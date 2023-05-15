import React from 'react'
import icon from "../icons/Icon.svg"
import icon1 from "../icons/Icon-1.svg"
import icon2 from "../icons/Icon-2.svg"
import icon3 from "../icons/Icon-3.svg"
import icon4 from "../icons/Icon-4.svg"

const LeftSide = () => {
  return (
    <div className="main_left">
    <div className="main_left_heading">
        Access curated courses worth <span className="strike">₹ 18,500</span> at just <span className="blue">₹ 99</span>
        per year!
    </div>
    <div className="item_list">
        <div className="item">
            <img src={icon} alt=""/>
            <span className="text"> <span className="blue">100+</span> Job Related Questions</span>
        </div>
    </div>
    <div className="item_list">
        <div className="item">
            <img src={icon1} alt=""/>
            <span className="text"> <span className="blue">20000+</span> Hour Of Content</span>
        </div>
    </div>
    <div className="item_list">
        <div className="item">
            <img src={icon2} alt=""/>
            <span className="text"> <span className="blue">Exclusive</span> Webinar Content</span>
        </div>
    </div>
    <div className="item_list">
        <div className="item">
            <img src={icon3} alt=""/>
            <span className="text"> Scholarship Worth <span className="blue">₹ 94,500</span></span>
        </div>
    </div>
    <div className="item_list">
        <div className="item">
            <img src={icon4} alt=""/>
            <span className="text"> <span className="blue">Ad Free</span> Learning Experience</span>
        </div>
    </div>
</div>
  )
}

export default LeftSide
