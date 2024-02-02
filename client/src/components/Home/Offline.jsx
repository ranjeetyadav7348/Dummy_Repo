import React from 'react'
import './Offline.css'
import pic from '../../assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg'
import {HiSparkles} from 'react-icons/hi'
import {IoMdCheckboxOutline} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'

const Offline = () => {
    return (
        <>
            <div style={{paddingBottom:"6rem"}} className='container' >
                <div className='textimg' >
                    <div className='subtexgtimg' >

                        <div className='imgfull' >
                            <img className="image" src={pic} alt='img' />
                        </div>

                        <div className='text' >
                            <p className="pColor">INTRODUCING <HiSparkles/></p>
                            <h1 className="hfirst" >Learner's Space for IIT JEE <br/> and NEET UG</h1><br />
                            <h2 className="hSecond" >Admissions open in Kota, Delhi, Chandigarh, Sikar, <br/> Indore and 20+ other cities!</h2><br />
                            {/* <h3 >Learn from top educators in your city
                                In-person classes & doubt solving
                                Bonus access to online learning
                            </h3> */}
                            <ul className="list"> 
                                <li><span className="sColor"><IoMdCheckboxOutline/></span> Learn from top educators in your city</li>
                                <li><span className="sColor"><IoMdCheckboxOutline/></span> In-person classes & doubt solving</li>
                                <li><span className="sColor"><IoMdCheckboxOutline/></span> Bonus access to online learning</li>
                            </ul>
                            <br />
                            <button className="find-btn" inputMode="text" ><a target="_blank" href="https://www.google.com/search?tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=APwXEde5Wtc07xWxP3aUsEsPSvm-N4yFNQ:1683018114023&q=allen+centres&rflfq=1&num=10&sa=X&ved=2ahUKEwik0tiGo9b-AhXSUt4KHUZeCdcQjGp6BAhhEAE&biw=1536&bih=746&dpr=1.25#rlfi=hd:;si:;mv:[[34.67230906718265,91.45135855596622],[23.327513784360036,70.22577261846624]]">Find Center<MdLocationOn/></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offline