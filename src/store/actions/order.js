import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json', orderData )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data, orderData));
            } )
            .catch( error => {
                dispatch(purchaseBurgerFail(error));
            } );
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        const queryParams = '?auth' + token + '&orderBy="userId"&equalTo="' + userId + '"'
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = [];
                //parse out the objects returned from firebase with the JS version of for each aka for(let x in y)
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    }) // res.data[key] = i.e. res.data[0] or res.data[1] - so spreading the properties for each object returned into the array
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            })
    }
}