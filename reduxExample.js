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