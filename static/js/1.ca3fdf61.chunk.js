webpackJsonp([1],{178:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=n.n(u),c=n(7),s=n(9),p=n(179),A=n(50),d=n(191),h=n.n(d),b=n(12),m=n(51),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){var e,n,r,u;o(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"email address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}},r.inputChangedHandler=function(e,t){var n=Object.assign({},r.state.controls,a({},t,Object.assign({},r.state.controls[t],{value:e.target.value,valid:r.checkValidity(e.target.value,r.state.controls[t].validation),touched:!0})));r.setState({controls:n})},r.submitHandler=function(e){e.preventDefault(),r.props.onAuth(r.state.controls.email.value,r.state.controls.password.value,r.state.isSignup)},r.switchAuthModeHandler=function(){r.setState(function(e){return{isSignup:!e.isSignup}})},u=n,i(r,u)}return r(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map(function(t){return l.a.createElement(p.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(a=l.a.createElement(m.a,null));var o=null;this.props.error&&(o=l.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=l.a.createElement(s.c,{to:this.props.authRedirectPath})),l.a.createElement("div",{className:h.a.Auth},i,o,l.a.createElement("form",{onSubmit:this.submitHandler},a,l.a.createElement(A.a,{btnType:"Success"},"Submit")),l.a.createElement(A.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"Switch to ",this.state.isSignup?"Sign In":"Sign Up"))}}]),t}(u.Component),x=function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}},C=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}};t.default=Object(c.b)(C,x)(f)},179:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(180),r=n.n(i),u=function(e){var t=null;switch(e.elementType){case"input":t=o.a.createElement("input",Object.assign({className:r.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:r.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=o.a.createElement("select",{className:r.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=o.a.createElement("input",Object.assign({className:r.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:r.a.Input},o.a.createElement("label",{className:r.a.Label},e.label),t)};t.a=u},180:function(e,t,n){var a=n(181);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;n(175)(a,o);a.locals&&(e.exports=a.locals)},181:function(e,t,n){t=e.exports=n(174)(!0),t.push([e.i,".Input__Input__s67N0{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label___n-1m{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__2-aFx{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__2-aFx:focus{outline:none;background-color:#ccc}","",{version:3,sources:["/home/ubuntu/workspace/new_react_course/burger-builder/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}"],sourceRoot:""}]),t.locals={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx"}},191:function(e,t,n){var a=n(192);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;n(175)(a,o);a.locals&&(e.exports=a.locals)},192:function(e,t,n){t=e.exports=n(174)(!0),t.push([e.i,".Auth__Auth__2YUr1{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__2YUr1{width:500px}}","",{version:3,sources:["/home/ubuntu/workspace/new_react_course/burger-builder/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n    .Auth {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),t.locals={Auth:"Auth__Auth__2YUr1"}}});
//# sourceMappingURL=1.ca3fdf61.chunk.js.map