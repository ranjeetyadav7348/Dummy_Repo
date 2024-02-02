import React, {useState, useEffect} from 'react';
import './Home.css';
import landingVector from "../../assets/landing-vector.svg";
import Header from '../partials/Header/Header';
import { Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../reduxSlices/authSlice';
import LoginModal from '../partials/LoginModal/LoginModal';
import Testimonial from './Testimonial';
import Offline from './Offline';
import Contact from './Contact';
import FooterNav from '../partials/FooterNav/FooterNav';

const Home = () => {
  const userData = useSelector(selectUserData);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(prevState=>!prevState);
  useEffect(async () => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing"> 
      <Header/>
      <section id="hero">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div>
                <h2 className="h2Size">Enhance your learning with</h2>
                <h1><strong>Classroom</strong></h1>
                <p className="pSize">Bring learning to life with our interactive eLearning <br/> platform, where knowledge meets innovation, and <br/> education knows no bounds.</p>
                  {
                    (userData.token) ? 
                      (<Link to="classes" className="btn-get-started scrollto">Get Started</Link>) : 
                      (<button className="btn-get-started scrollto" onClick={() => setShow(true)}>Get Started</button>)
                  }
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-ani0 FloatImg" data-aos="fade-left">
              <img src={landingVector} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Offline/>
      <Testimonial/>
      <Contact/>

      <FooterNav/>
     
      <LoginModal isModalOpen={show} toggleModal={toggle} setShow={setShow}/>
    </div>
  );
}
  
export default Home;