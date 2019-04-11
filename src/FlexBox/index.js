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
            <div className="container-3">
                <div className="box item-1"></div>
                <div className="box item-2"></div>
            </div>
            <div className="stage">
                <div className="ctx">
                    <div className="facelist">
                        <div className=" face first"></div>
                        <div className=" face after"></div>
                        <div className=" face top"></div>
                        <div className=" face bottom"></div>
                        <div className=" face left1"></div>
                        <div className=" face right2"></div>
                    </div>
                </div>
               
            </div>
       
   {/*          <div class="container-2">
                <div class="middle">
                    <h4>middle</h4>
                </div>
                <div class="left">
                <h4>left</h4>
                
                </div>
                <div class="right">
                    <h4>right</h4>
                
                </div>
            </div> */}

        </div>
     
    )
}


export default FlexBox
