import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'



class BurgerBuilder extends Component {
    //older method of creating a class with state
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         ingredients: {
    //             salad: 1,
    //             bacon: 1,
    //             cheese: 2,
    //             meat: 2
    //         }
    //     }
    // }
    
    state = {
        purchasing: false
    }
    
    componentDidMount () {
        this.props.onInitIngredients();
    }
    
    updatePurchaseState (ingredients) {
        //we pass the copied updated ingredients object from the other handlers

        //create an array of the keys from the ingredients copy
        const sum = Object.keys(ingredients)
            //using a nested map function to return an array of each value at the respective key
            .map(igKey => {
                return ingredients[igKey];
            })
            //using a accumulator function to start at 0 and add each value from the map array
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
            //use the accumulated value to evaluate a true/false logic and set the state
        return sum > 0;
    }
    
    purchaseHandler = () => {
        if(this.props.isAuthenticated) {
            this.setState({purchasing: true})
        } else {
            //sets the path for redirect after auth is completed, so it will continue to checkout
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    
    purchaseContinueHandler = () => {
        this.props.onInitPurchase()
        this.props.history.push('/checkout');
    }
    
    render () {
        const disabledInfo = {
            ...this.props.ings
        }
        
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //this takes the keys of ingredients and sets them equal to true/false depending on if they are less than or equal to 0
        //if they are then it's true and can be used to disable the button by passing it down the controls
        let orderSummary = null;
        
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />
        
        if (this.props.ings) {
            burger = (
            <Fragment>
                <Burger ingredients={this.props.ings}/>
                <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchaseable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                        price={this.props.price}/>
            </Fragment>
            );
            orderSummary = <OrderSummary ingredients={this.props.ings}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.props.price.toFixed(2)}/>
        }
        
        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));