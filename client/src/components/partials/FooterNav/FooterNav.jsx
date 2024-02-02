// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import "./FooterNav.css";
// function FooterNav() {
//   return ( 
//     <>
//       <div className="footer-nav">
//         <div className="container">
//           <div className="row py-1">
//             <div className="col-6 d-flex justify-content-center">
//               <h3>
//                 <NavLink to="/" className="nav-link footer-nav-link" activeClassName="selected" exact>
//                   Home
//                 </NavLink>
//               </h3>
//             </div>
//             {/* <div className="col-4 d-flex justify-content-center">
//               <h3>
//                 <NavLink to="/classes/reminders" className="nav-link footer-nav-link" activeClassName="selected" exact>
//                   Reminders
//                 </NavLink>
//               </h3>
//             </div> */}
//             <div className="col-6 d-flex justify-content-center">
//               <h3>
//               <NavLink to="/browse" className="nav-link footer-nav-link" activeClassName="selected" >
//                   Browse
//                 </NavLink>
//               <NavLink to="/courses" className="nav-link footer-nav-link" activeClassName="selected" >
//                   Courses
//                 </NavLink>
//                 <NavLink to="/resources" className="nav-link footer-nav-link" activeClassName="selected" >
//                   Resources
//                 </NavLink>
//                 <NavLink to="/forum" className="nav-link footer-nav-link" activeClassName="selected" >
//                   Discussion
//                 </NavLink>
//                 <NavLink to="/classes" className="nav-link footer-nav-link" activeClassName="selected" >
//                   Classes
//                 </NavLink>
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//    );
// }

// export default FooterNav;
import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../FooterNav/FooterNav.scss';
import { MdEmail ,MdAddCall} from 'react-icons/md';
import {TiLocation} from 'react-icons/ti';
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


import "./FooterNav.scss";
function FooterNav() {

 const [text , setText] = useState({text:""});

 const handlealert =()=>{
  //  const {text } = text;
   console.log(text, "jnsdjn")
    if(text.text === ""){
     alert("Please Enter the Email");
    }else{
      alert("Subscribed");

    }   
  }

  return ( 
    <>
     	<footer class="footer-10">
			<div class="container">
				<div  class="row mb-5 pb-3 no-gutters">
					<div  class="col-md-4 mb-md-0 mb-4 d-flex">
						<div id='box'  class="con con-1 w-100 py-5">
							<div  class="con-info w-100 text-center">
								<div class="icon d-flex align-items-center justify-content-center">
									<span >
                  <table>
                     <tr>
                              <td>
                         <a href="tel:+917348207455"><MdAddCall/></a>
                          </td>
                              </tr>
                                </table>
                  </span>
								</div>
								<div class="text" >
                <span>+917348207455</span>
               
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 mb-md-0 mb-4 d-flex">
						<div id='box' class="con con-2 w-100 py-5">
							<div class="con-info w-100 text-center">
								<div class="icon d-flex align-items-center justify-content-center">
									
									<a href = "mailto: yadavranjeet060@gmail.com"><span ><MdEmail /></span></a>
								</div>
								<div class="text">
									<span>yadavranjeet060@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 mb-md-0 mb-4 d-flex">
						<div id='box' class="con con-3 w-100 py-5">
							<div class="con-info w-100 text-center">
								<div class="icon d-flex align-items-center justify-content-center">
									
									<a href="https://www.google.com/maps/dir//Lanka,+Varanasi,+Uttar+Pradesh/@25.281175,82.9925101,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x398e318b731bff83:0xa97c2620d0075ebe!2m2!1d82.9978626!2d25.2814092">
									<span ><TiLocation/></span></a>
								</div>
								<div class="text">
									<span>Lanka,Varanasi</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-7">
						<div class="row">
							<div class="col-md-4 mb-md-0 mb-4">
								<h2 class="footer-heading">About</h2>
								<ul class="list-unstyled">
		              <li><a href="#" class="d-block">Out story</a></li>
		              <li><a href="#" class="d-block">Awards</a></li>
		              <li><a href="#" class="d-block">Our Team</a></li>
		              <li><a href="#" class="d-block">Career</a></li>
		            </ul>
							</div>
							<div class="col-md-4 mb-md-0 mb-4">
								<h2 class="footer-heading">Company</h2>
								<ul class="list-unstyled">
		              <li><a href="#" class="d-block">Our services</a></li>
		              <li><a href="#" class="d-block">Clients</a></li>
		              <li><a href="#" class="d-block">Contact</a></li>
		              <li><a href="#" class="d-block">Press</a></li>
		            </ul>
							</div>
							<div class="col-md-4 mb-md-0 mb-4">
								<h2 class="footer-heading">Resources</h2>
								<ul class="list-unstyled">
		              <li><a href="#" class="d-block">Blog</a></li>
		              <li><a href="#" class="d-block">Newsletter</a></li>
		              <li><a href="#" class="d-block">Privacy Policy</a></li>
		            </ul>
							</div>
						</div>
					</div>
					<div class="col-md-5 mb-md-0 mb-4">
						<h2 class="footer-heading">Subscribe</h2>
						<form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control rounded-left" name="text"  value={text.text} onChange={(e)=>{setText((prev)=>({...prev, text:e.target.value}))}} placeholder="Enter email address"/>
                <button type="submit" class="form-control submit rounded-right" onClick={handlealert}>Subscribe</button>
              </div>
              <span class="subheading">Get Our Educational updates in your mailbox</span>
            </form>
					</div>
				</div>
				<div class="row mt-5 pt-4 border-top">
          <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
            {/* <p class="copyright mb-0"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved. | This template is made with <i class="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
          </div>
		  <div class="copyright">
          
		  {/* <span class="copyright_text"> All right reserved to : &copy; Learner Space </span> */}

          <div class="col-10 col-md-2 mx-auto">
		  
          	<ul class="ftco-footer-social p-0">
              <li class="ftco-animate" id='twitter'><a target='_' href="https://www.linkedin.com/in/ranjeet-yadav-895948200/" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="ion-logo-twitter"><BsTwitter/></span></a></li>
              <li class="ftco-animate" id='linked'><a target='_' href="https://www.linkedin.com/in/ranjeet-yadav-895948200/" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"><BsLinkedin/></span></a></li>
              <li class="ftco-animate"  id='insta'><a target='_' href="https://www.instagram.com/ranjeet_yadav0/" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram"><FiInstagram/></span></a></li>
            </ul>
          </div>
		  </div>
        </div>
			</div>
		</footer>
    </>
   );
}

export default FooterNav;