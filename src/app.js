import * as React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import comReducers from "../reducer";
import Counter from "./Counter";
import Button from "./Button";
const root=document.getElementById('root') ;

const store=createStore(comReducers);
const App=()=>{
    return(
        <Provider store={store}>
            <Counter/>
            <Button/>
        </Provider>
    )
}

ReactDom.render(<App/>,root)
