import React, { useState } from 'react'
import clock from '../icons/Icon Clock.svg'

const RightSide = () => {
    const [value, setValue] = useState(179);

    const option1 = () => {
        setValue(179);
    }
    const option2 = () => {
        setValue(149);
    }
    const option3 = () => {
        setValue(99);
    }


    return (
        <div className="main_right">
            <div className="widget_list">
                <div className="widget">
                    <div className="widget_no">1</div>
                    <div className="widget_name">Sign Up</div>

                </div>
                <div className="widget">
                    <div className="widget_no">2</div>
                    <div className="widget_name">Subscribe</div>

                </div>
            </div>
            <div className="formContent">
                <h3>Select Your Subscription Plan</h3>
                <div className="cardList">
                    <div className="options">
                        <input id="radio-1" className="radio-custom" name="radio-group" type="radio" disabled />
                        <label htmlFor="radio-1" className="radio-custom-label">
                            <div className="card">
                                <div className="tag_exp">
                                    Offer Expired
                                </div>
                                <p>12 Months Subscription</p>
                                <div className="total">
                                    Total <span className="big">₹ 99</span>
                                    <br />
                                    ₹ 8 <span className="light">/month</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="options">
                        <input id="radio-2" className="radio-custom" name="radio-group" value="179" type="radio" defaultChecked
                            onClick={
                                option1
                            } />
                        <label htmlFor="radio-2" className="radio-custom-label">
                            <div className="card">
                                <div className="tag_rec">
                                    Recommended
                                </div>
                                <p>12 Months Subscription</p>
                                <div className="total">
                                    Total <span className="big">₹ 179</span>
                                    <br />
                                    ₹ 19 <span className="light">/month</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="options">
                        <input id="radio-3" className="radio-custom" name="radio-group" value="149" type="radio" />
                        <label htmlFor="radio-3" className="radio-custom-label">
                            <div className="card" onClick={option2}>
                                <p>6 Months Subscription</p>
                                <div className="total">
                                    Total <span className="big">₹ 149</span>
                                    <br />
                                    ₹ 25 <span className="light">/month</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="options">
                        <input id="radio-4" className="radio-custom" name="radio-group" value="99" type="radio"
                            onClick={option3} />
                        <label htmlFor="radio-4" className="radio-custom-label">
                            <div className="card">
                                <p>3 Months Subscription</p>
                                <div className="total">
                                    Total <span className="big">₹ 99</span>
                                    <br />
                                    ₹ 33 <span className="light">/month</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <hr />
                <div className="fee">
                    <p>Subscription Fee</p>
                    <p> ₹ 18,500 </p>
                </div>
                <div className="card_discount">
                    <div className="discount_line1">
                        <div id="redtag">Limited Time Offer</div>
                        <div> - ₹ 18,401 </div>
                    </div>
                    <div className="offer">
                        <img src={clock} alt="" />
                        <p>Offer valid till 25th March 2023</p>
                    </div>



                </div>
                <div className="final">
                    <div className="final_head">
                        <span className="big">Total</span> <span> (Incl. of 18% GST)</span>
                    </div>
                    <div className="big">₹ {value}</div>
                </div>

            </div>
        </div>
    )
}

export default RightSide
