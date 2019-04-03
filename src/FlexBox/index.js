import React from "react";
import "./flexBox.css";
const FlexBox =()=>{
    return(
        <div className="container-wrap">
            <div className="container">
                <div className="box flex-item">1</div>
                <div className="box flex-item">2</div>
                <div className="box flex-item">3</div>
            </div>
            <p>左右两侧固定中间自适应</p>
            <div className="container">
                <div className="box flex-item">2</div>
                <div className="box flex-item flex-item1">1</div>
                <div className="box flex-item flex-item2">3</div>
            </div>
            <div className="container-1">
                <div className="box float-item float-item-1">1</div>
                <div className="box float-item  item">2</div>
                <div className="box float-item float-item-2">3</div>
            </div>
       
<div class="container-2">
    <div class="middle">
        <h4>middle</h4>
       



    </div>
    <div class="left">
    <h4>left</h4>
       
    </div>
    <div class="right">
    <h4>right</h4>
     
    </div>
    </div>

        </div>
     
    )
}


export default FlexBox
