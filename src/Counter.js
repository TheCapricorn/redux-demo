import * as React from "react";
import {connect} from "react-redux"

const Counter=({count})=>{
    return( <div>{count}</div>)
}

const mapStatetoProps=function({add:{count}}){
    return {count}
}

export default connect(mapStatetoProps)(Counter)
