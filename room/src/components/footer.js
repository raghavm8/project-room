import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export class footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcSet="images/agency/logo-retina-inverse-280x74.png 2x" /></a>
                <p>We are a new agency, trying our best to give the user details they want.</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2020</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>CHITKARA UNIVERSITY, Rajpura , Punjab</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">prince7355277341@gmail.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">9877823923</a> <span>or</span> <a href="tel:#">7355277340</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                {/* <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><Link className="social-inner" to="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></Link></div>
          <div className="col"><Link className="social-inner" to="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></Link></div>
          <div className="col"><Link className="social-inner" to="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></Link></div>
          <div className="col"><Link className="social-inner" to="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></Link></div>
        </div>
            </footer>
        );
    }
}

export default footer;
