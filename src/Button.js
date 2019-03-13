import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../action";
import * as React from "react";
const Button =({actions})=>{
    let count=0;
    const onClick=()=>{
        actions.addCount(++count);
    }
    return (<button onClick={onClick}>点击</button>)
}
const mapStateToProps=function(state){
    console.log(state);
    return {}
};
const mapDispatchToProps=function(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Button)