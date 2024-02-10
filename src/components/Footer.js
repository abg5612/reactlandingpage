import React from 'react'

export default function Footer() {
    return (
        <div>

            <div className="footer-header">Don't take our word for it</div>
            <div className="footer-para">
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus <br />
                nulla at volutpat diam ut venenatis tellus—in ornare.
            </div>

            <div className="footer-card">
                <div className="card1">

                    <div className="footer-circle">
                    <img src='/Images/thumsup.png' alt='icon'></img>
                    </div>
                    <p className="footer-card-text">
                        — Open PRO lets me quickly get the <br />
                        insights I care about so that I can <br />
                        focus on my productive work. I've <br />
                        had Open PRO for about 24 hours <br />
                        now and I honestly don't know how I <br />
                        functioned without it before.
                    </p>

                    <hr />

                    <h2 className="footer-card-head">Anastasia Dan  <span>UX Board</span> </h2>

                </div>

                <div className="card1">

                    <div className="footer-circle">
                    <img src='/Images/thumsup.png' alt='icon'></img>
                    </div>
                    <p className="footer-card-text">
                        — Open PRO lets me quickly get the <br />
                        insights I care about so that I can <br />
                        focus on my productive work. I've <br />
                        had Open PRO for about 24 hours <br />
                        now and I honestly don't know how I <br />
                        functioned without it before.
                    </p>
                    <hr />
                    <h2 className="footer-card-head">Anastasia Dan  <span>UX Board</span> </h2>

                </div>

                <div className="card1">

                    <div className="footer-circle">
                    <img src='/Images/thumsup.png' alt='icon'></img>
                    </div>
                    <p className="footer-card-text">
                        — Open PRO lets me quickly get the <br />
                        insights I care about so that I can <br />
                        focus on my productive work. I've <br />
                        had Open PRO for about 24 hours <br />
                        now and I honestly don't know how I <br />
                        functioned without it before.
                    </p>
                    <hr />
                    <h2 className="footer-card-head">Anastasia Dan  <span>UX Board</span> </h2>

                </div>

            </div>


            <div className="footer-panel">

                <div className="panel-cont">
                    <h2 className="panel-cont">Stay in the loop</h2>
                    <p className='panel-cont'>Join our newsletter to get top news before anyone else.</p>
                </div>

                <div className="panel-form">
                    <input type='text' placeholder='Your best email...'></input>
                    <button type='button'>Subscribe</button>
                </div>


            </div>

            <div className="footer-list">

                <p className="footer-list-sec1">
                    Lorem ipsum is placeholder text commonly used in the <br />
                    graphic, print, and publishing industries for previewing <br />
                    layouts and visual mockups.
                </p>
                {/* <p>   © Cruip.com. All rights reserved.     </p> */}
                <div className="footer-list-sec2">

                    <ul className='list1'>
                        <li><span>Products</span></li>
                        <li>Web Studio</li>
                        <li>DynamicBox Flex</li>
                        <li>Programming Forms</li>
                    </ul>

                    <ul className='list2'>
                        <li><span>Resources</span></li>
                        <li>Nostrud exercitation</li>
                        <li>Visual mockups</li>
                        <li>Nostrud exercitation</li>
                        <li>Visual mockups</li>
                        <li>Nostrud exercitation</li>
                    </ul>

                    <ul className='list3'>
                        <li><span>Company</span></li>
                        <li>Consectetur adipiscing</li>
                        <li>Labore et dolore</li>
                        <li>Consectetur adipiscing</li>
                        <li>Labore et dolore</li>
                        <li>Consectetur adipiscing</li>
                    </ul>


                </div>

            </div>

            <p className="footer-last">
            Cruip.com. All rights reserved.
            </p>

        </div>
    )
}
