import React from 'react'
import './App.css';




function Footer() {
  return (
    <div>
      
      {/* <!-- Footer --> */}
  <div class="vg-footer">
    {/* <h1 class="text-center"> Virtual Folio </h1> */}
    <div class="container">
      <div class="row">
        <div class="col-lg-4 py-3">
          <div class="footer-info">
            <p>Where to find me</p>
            <hr class="divider"/>
            <p class="fs-large fg-white">1600 Amphitheatre Parkway Mountain View, Hyderabad 94043 India </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 py-3">
          <div class="float-lg-right">
            <p> Follow me </p>
            <hr class="divider"/>
            <ul class="list-unstyled">
              {/* <li><a href="#">mail</a></li>
              <li><a href="#">Email</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">Git</a></li> */}
              <span id="social"><a href="https://mail.google.com/" target='_blank'><img src={"../assets/social/gmail.svg"} style={{width:"35px",height:"35px",padding:"3px"}}/></a></span>
              <span id="social"><a href="https://www.linkedin.com/in/mahesh-babu-kanneti-1a6b5720b" target='_blank'><img src={"../assets/social/linkedin.svg"} style={{width:"40px",height:"40px",padding:"3px"}}/></a></span>
              <span id="social"><a href="https://www.whatsapp.com/" target='_blank'><img src={"../assets/social/whatsapp.svg"} style={{width:"35px",height:"35px",padding:"3px"}}/></a></span>
              <span id="social"><a href="https://github.com/Kanneti-Mahesh" target='_blank'><img src={"../assets/social/git.svg"} style={{width:"35px",height:"35px",padding:"3px"}}/></a></span>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 py-3">
          <div class="float-lg-right">
            <p>Contact me</p>
            <hr class="divider"/>
            <ul class="list-unstyled">
              <li>mb@technologies.com</li>
              <li>+91 9876543210</li>
              <li>+91 9988776655</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-12 mb-3">
          <h3 class="fw-normal text-center">Subscribe</h3>
        </div>
        <div class="col-lg-6">
          <form class="mb-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Email address"/>
              <input type="submit" class="btn btn-theme no-shadow" value="Subscribe"/>
            </div>
          </form>
        </div>
        <div class="col-12">
          <p class="text-center mb-0 mt-4"> Copyright &copy;2023. All right reserved <span class="ti-heart fg-theme-red"></span> by <a href="https://mbtechno.onrender.com"> MB Technologies </a></p>
        </div>
      </div>
    </div>
  </div> 
  
  {/* <!-- End footer --> */}

    </div>
  );
}

export default Footer;