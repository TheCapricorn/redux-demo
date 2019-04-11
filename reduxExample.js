import {createStore,combineReducers,applyMiddleware,compose,bindActionCreators} from "redux";
import {mainReducer,addReducer} from "./reducer";
import {addCount} from "./action";
 const store1=createStore(combineReducers({add:addReducer,main:mainReducer}),{add:{prev:0}});


 console.log(store1.getState())
 
 store1.dispatch(addCount(0));

 store1.dispatch(addCount(1));

console.log(store1.getState());

const bindActions=bindActionCreators({addCount},store1.dispatch);

bindActions.addCount(5);

console.log(store1.getState());

Function.prototype.myCall=function(context=window){
    context.fn=this;
    let result = context.fn([...arguments].slice(1));
    delete context.fn;
    return result;
}

Function.myApplay = function(context=window,arr){
    context.fn = this;
    let result = context.fn(arr);
    delete context.fn;
    return result;
}

Function.myBind = function(context=window){
    let _self = this;
    let arg = Array.prototype.slice.call(arguments,1);
    return function (){
        _self.apply(context,arg.contact(arguments));
    }
}

Function.prototype.myBind1 = function(context=window){

    if(typeof this !== "function"){
        throw new Error("this is not function!");
    }

    let _self = this;
    let args = Array.prototype.slice.call(arguments,1);

    let F = function(){}
    let rF = function(){
    let interArgs = Array.prototype.slice.call(arguments,1);
        _self.apply( this instanceof F ? this : context, args.contact(interArgs)  )
    }

    F.prototype = _self.prototype;
    rF.prototype = new F();

    return rF

}

function instanceOf(a,b){
    if(typeof a !== 'object'){
        throw new Error('a is not object!')
    }

    if(typeof b !== 'function'){
        throw new Error('b is not function!')
    }

    let l = a.__proto__;
    let r = b.prototype;
    while(typeof l === 'object' && l !==null){
        if(l===r){
            return true;
        }else{
            l = l.__proto__
        }
    }

    return false
}



/* 

    Mixin   

    HOC

    Hooks



*/






