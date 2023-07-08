import React,{useState} from 'react'
import './App.css';
import Footer from './Footer.js'

//Packages import Section...
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';






function Home() {

    const redChange = (e) =>{
                      //Red Theme

var redColor = e.target.classList[2];

        if(redColor === "selected"){
                var color1=document.getElementsByClassName("theme-red")[0];
                var color2=document.getElementsByClassName("theme-blue")[0];
                var color3=document.getElementsByClassName("theme-green")[0];
                var color4=document.getElementsByClassName("theme-orange")[0];
                var color5=document.getElementsByClassName("theme-purple")[0];
                    if(color1){
                    color1.className = color1.className.replace("theme-red", "theme-red");
                    }
                    if(color2){
                        color2.className = color2.className.replace("theme-blue", "theme-red");
                        }
                        if(color3){
                            color3.className = color3.className.replace("theme-green", "theme-red");
                            }
                            if(color4){
                                color4.className = color4.className.replace("theme-orange", "theme-red");
                                }
                                if(color5){
                                    color5.className = color5.className.replace("theme-purple", "theme-red");
                                    }
        }


}

    const blueChange = (e) =>{
                     //Blue Theme

        var blueColor = e.target.classList[2];

        if(blueColor === "selected"){
            var color1=document.getElementsByClassName("theme-red")[0];
            var color2=document.getElementsByClassName("theme-blue")[0];
            var color3=document.getElementsByClassName("theme-green")[0];
            var color4=document.getElementsByClassName("theme-orange")[0];
            var color5=document.getElementsByClassName("theme-purple")[0];
                if(color1){
                color1.className = color1.className.replace("theme-red", "theme-blue");
                }
                if(color2){
                    color2.className = color2.className.replace("theme-blue", "theme-blue");
                    }
                    if(color3){
                        color3.className = color3.className.replace("theme-green", "theme-blue");
                        }
                        if(color4){
                            color4.className = color4.className.replace("theme-orange", "theme-blue");
                            }
                            if(color5){
                                color5.className = color5.className.replace("theme-purple", "theme-blue");
                                }
    }







    }
    const greenChange = (e) =>{

                     //Green Theme



        var greenColor = e.target.classList[2];

        if(greenColor === "selected"){
            var color1=document.getElementsByClassName("theme-red")[0];
            var color2=document.getElementsByClassName("theme-blue")[0];
            var color3=document.getElementsByClassName("theme-green")[0];
            var color4=document.getElementsByClassName("theme-orange")[0];
            var color5=document.getElementsByClassName("theme-purple")[0];
                if(color1){
                color1.className = color1.className.replace("theme-red", "theme-green");
                }
                if(color2){
                    color2.className = color2.className.replace("theme-blue", "theme-green");
                    }
                    if(color3){
                        color3.className = color3.className.replace("theme-green", "theme-green");
                        }
                        if(color4){
                            color4.className = color4.className.replace("theme-orange", "theme-green");
                            }
                            if(color5){
                                color5.className = color5.className.replace("theme-purple", "theme-green");
                                }
    }

    }

    const orangeChange = (e) =>{
                   //Orange Theme

        var orangeColor = e.target.classList[2];

        if(orangeColor === "selected"){
            var color1=document.getElementsByClassName("theme-red")[0];
            var color2=document.getElementsByClassName("theme-blue")[0];
            var color3=document.getElementsByClassName("theme-green")[0];
            var color4=document.getElementsByClassName("theme-orange")[0];
            var color5=document.getElementsByClassName("theme-purple")[0];
                if(color1){
                color1.className = color1.className.replace("theme-red", "theme-orange");
                }
                if(color2){
                    color2.className = color2.className.replace("theme-blue", "theme-orange");
                    }
                    if(color3){
                        color3.className = color3.className.replace("theme-green", "theme-orange");
                        }
                        if(color4){
                            color4.className = color4.className.replace("theme-orange", "theme-orange");
                            }
                            if(color5){
                                color5.className = color5.className.replace("theme-purple", "theme-orange");
                                }
    }

    }
    const purpleChange = (e) =>{
            //Purple Theme

        var purpleColor = e.target.classList[2];

        if(purpleColor === "selected"){
            var color1=document.getElementsByClassName("theme-red")[0];
            var color2=document.getElementsByClassName("theme-blue")[0];
            var color3=document.getElementsByClassName("theme-green")[0];
            var color4=document.getElementsByClassName("theme-orange")[0];
            var color5=document.getElementsByClassName("theme-purple")[0];
                if(color1){
                color1.className = color1.className.replace("theme-red", "theme-purple");
                }
                if(color2){
                    color2.className = color2.className.replace("theme-blue", "theme-purple");
                    }
                    if(color3){
                        color3.className = color3.className.replace("theme-green", "theme-purple");
                        }
                        if(color4){
                            color4.className = color4.className.replace("theme-orange", "theme-purple");
                            }
                            if(color5){
                                color5.className = color5.className.replace("theme-purple", "theme-purple");
                                }
    }

}


        // const notify = () => toast.success('Thankyou!Your Message has been sent.',{position:"top-right"});

        const [user,setUser] = useState({
          fname:"",
          email:"",
          subject:"",
          message:""
        })

        const {fname,email,subject,message} = user;

        const changeHandler = (e)=>{
          setUser({...user,[e.target.name]:e.target.value});
          console.log(user,"user")
        }



         const submitHandler = async (e)=>{
             e.preventDefault();


          //POST Request API Call...noxile4224@marikuza.com.......https://64313f543adb159651685138.mockapi.io/users (endpoint)
              try{
                let payload = {
                  "name":fname,
                  "email":email,
                  "subject":subject,
                  "message":message
                }

            let res = await axios.post('https://64313f543adb159651685138.mockapi.io/users',payload)
              toast.success('Thankyou Your Message has been sent.',{position:"top-right"});
              // console.log(resp.data,"User is Registered!")
          }
          catch(err){
            if (err) throw err;
            toast.error('Something went wrong.')
          }


            //Reset Form Data...
              setUser({
                fname:"",
                email:"",
                subject:"",
                message:""
              })
        }



  return (
    <>
        <div className="theme-red">

            {/* <!-- Back to top button --> */}
  <div className="btn-back_to_top">
    <span className="ti-arrow-up"></span>
  </div>
  
  {/* <!-- Setting button --> */}
  <div className="config">
    <div className="template-config">
      {/* <!-- Settings --> */}
      <div className="d-block">
        <button className="btn btn-fab btn-sm" id="sideel" title="Settings"><span className="ti-settings"></span></button>
      </div>
    </div>
    <div className="set-menu">
      <p>Select Color</p>
      <div className="color-bar" data-toggle="selected">
        <span className="color-item bg-theme-red selected" data-className="theme-red" onClick={(e)=>redChange(e)}></span>
        <span className="color-item bg-theme-blue" data-className="theme-blue" onClick={(e)=>blueChange(e)}></span>
        <span className="color-item bg-theme-green" data-className="theme-green" onClick={(e)=>greenChange(e)}></span>
        <span className="color-item bg-theme-orange" data-className="theme-orange" onClick={(e)=>orangeChange(e)}></span>
        <span className="color-item bg-theme-purple" data-className="theme-purple" onClick={(e)=>purpleChange(e)}></span>
      </div>
    </div>
  </div>
  
  <div className="vg-page page-home" id="home" style={{backgroundImage: "url(../assets/img/bg_image_1.jpg)"}}>
    {/* <!-- Navbar --> */}
    <div className="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
      <div className="container">
        <a href="" className="navbar-brand"> MB-Folio </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
          <span className="ti-menu"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="#home" className="nav-link" data-animate="scrolling">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" data-animate="scrolling">About</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" data-animate="scrolling">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link" data-animate="scrolling">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
            </li>
          </ul>
          <ul className="nav ml-auto">
            <li className="nav-item">
              {/* <button className="btn btn-fab btn-theme no-shadow" title='Admin'> A </button> */}
              <div class='c-avatar'>
                <img class='c-avatar__image' src='../assets/img/person1.jpg' alt='' title='Admin'/>
                <span class='c-avatar__status'></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    {/* <!-- End Navbar --> */}
    {/* <!-- Caption header --> */}
    <div className="caption-header text-center wow zoomInDown">
      <h5 className="fw-normal"> Hi ! &nbsp; Welcome </h5>
      <h1 className="fw-light mb-4"> I'm <b className="fg-theme"> Mahesh </b> Babu </h1>
      <div className="badge"> MERN Stack Developer </div>
    </div> 
    {/* <!-- End Caption header --> */}
    <div className="floating-button"><span className="ti-mouse"></span></div>
  </div>
  
  <div className="vg-page page-about" id="about">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="img-place wow fadeInUp">
            <img src="../assets/img/person1.jpg" alt=""/>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
          <h1 className="fw-light"> Mahesh Babu Kanneti</h1>
          <h5 className="fg-theme mb-3"> MERN Stack Developer </h5>
          <p className="text-muted">Over 1 year of IT and hands on experience in responsive web application development, building reusable components and front-end libraries for future use and developing 
new user-facing features. Implementing the web applications using modern JavaScript technologies (React.js, 
Node.js) along with HTML, CSS, JavaScript, Material UI, Bootstrap, and other web 
technologies.</p>
          <ul className="theme-list">
            <li><b>From:</b> Hyderabad, India </li>
            <li><b>Lives In:</b> Texas, US</li>
            <li><b>Age:</b> 25</li>
            <li><b>Gender:</b> Male</li>
          </ul>
          {/* <button className="btn btn-theme-outline"> Download CV </button>  */}
          <button className="btn btn-theme-outline"><a href='https://drive.google.com/file/d/15KdDShPefcmnbByKeDrhBr-YB95-4r9q/view?usp=sharing' style={{textDecoration:'none',color:'red'}} target='_blank' download> Download CV </a></button>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <h1 className="text-center fw-normal wow fadeIn"> Tech-Stack </h1>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Coding skills</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> JavaScript </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> 90% </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> ReactJS </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> HTML + CSS </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> NodeJS </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp"> <br/> </h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> MongoDB </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> MySQL </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption"> Git/GitHub </span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 wow fadeInRight">
          <h2 className="fw-normal">Education</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">2021</div>
              <div className="details">
                <h5>Bachelor of Technology</h5>
                <small className="fg-theme"> Talla Padmavathi College of Engineering, Kazipet </small>
                <p> Electrical and Electronics Engineering </p>
                <p> Aggregate CGPA: 7.2/10 </p>
              </div>
            </li>
            <li>
              <div className="title">2018</div>
              <div className="details">
                <h5> Diploma Engineering </h5>
                <small className="fg-theme"> Khammam Institute of Technology and Sciences, Khammam </small>
                <p> Aggregate Percentage: 85% </p>
              </div>
            </li>
            <li>
              <div className="title">2015</div>
              <div className="details">
                <h5> Higher Secondary Eduation </h5>
                <small className="fg-theme"> Central Board of Secondary Education, Khammam  </small>
                <p> MPC and Computer Sciences </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
          <h2 className="fw-normal">Experience </h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title"> 2022 - Current</div>
              <div className="details">
                <h5> Bot Developer </h5>
                <small className="fg-theme"> Key Point Technologies, Hyderabad </small>
                <p>Over 7months of experience to build responsive single page web applications in React.js and JavaScript technologies and Integrating of APIs to chatbots in JavaScript.</p>
              </div>
            </li>
            <li>
              <div className="title"> 2022 </div>
              <div className="details">
                <h5> Full-Stack Developer </h5>
                <small className="fg-theme"> Gradious Technologies Private Limited, Hyderabad </small>
                <p>I had 8months of trained experience and learned hands on to build and design web applications from front-end to back-end with the 
MERN stack (MySQL, Express.js, React.js, Node.js)</p>
              </div>
            </li>
            <li>
              <div className="title">2021</div>
              <div className="details">
                <h5> HTML,CSS,JavaScript and Python </h5>
                <small className="fg-theme"> Naresh i Technologies, Hyderabad </small>
                <p> Certifications received from Software Training on frontend technologies and Python Language. </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div className="vg-page page-service">
    <div className="container">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Service</div>
      </div>
      <h1 className="fw-normal text-center wow fadeInUp">What can i do?</h1>
      <div className="row mt-5">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-paint-bucket"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme"> Web Design </h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-search"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme"> DB Management </h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-vector"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme"> Mobile Responsive </h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-desktop"></span>
            </div>
            <div className="caption">
              <h4 className="fg-theme">Web Development</h4>
              <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="vg-page page-funfact" style={{backgroundImage: "url(../assets/img/bg_banner.jpg)"}}>
    <div className="container">
      <div className="row section-counter">
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="768">768</h1>
          <span> Downloads </span>
        </div>
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="15"> 15+ </h1>
          <span> Project Complete </span>
        </div>
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="05"> 05 </h1>
          <span> Project Ongoing </span>
        </div>
        <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
          <h1 className="number" data-number="699">699</h1>
          <span>Client Satisfaction</span>
        </div>
      </div>
    </div>
  </div>
  
  {/* <!-- Portfolio page --> */}
  <div className="vg-page page-portfolio" id="portfolio">
    <div className="container">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Portfolio</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
      <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
        <button className="btn btn-theme-outline selected" data-filter="*">All</button>
        <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
        {/* <button className="btn btn-theme-outline" data-filter=".template">Template</button>
        <button className="btn btn-theme-outline" data-filter=".ios">IOS</button> */}
        <button className="btn btn-theme-outline" data-filter=".ui-ux">React</button>
        <button className="btn btn-theme-outline" data-filter=".graphic">NodeJS</button>
        <button className="btn btn-theme-outline" data-filter=".wireframes">Database Management</button>
      </div>

      <div className="gridder my-3">
        <div className="grid-item apps wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/mobile.png" data-fancybox data-caption="<h5 className='fg-theme'>Mobile Personal Portfolio App</h5> <p>Technologies: ReactJS, JavaScript</p>">
            <img src="../assets/img/work/mobile.png" alt="" style={{height:"255px"}}/>
            <div className="img-caption">
              <h5 className="fg-theme">Mobile ReactJS Portfolio App</h5>
              <p>Technologies: ReactJS,JavaScript</p>
            </div>
          </div>
        </div>
        <div className="grid-item template wireframes wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/work-2.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Music App</h5> <p>Musics</p>">
            <img src="../assets/img/work/work-2.jpg" alt="" title='Coming Soon...'/>
            <div className="img-caption">
              <h5 className="fg-theme" title='Coming Soon...'>Music App</h5>
              <p title='Coming Soon...'>Musics</p>
            </div>
          </div>
        </div>
        <div className="grid-item ui-ux wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/todo.png" data-fancybox data-caption="<h5 className='fg-theme'>Todo List App</h5> <p>ReactJS, RTK, Bootstrap</p>">
            <img src="../assets/img/work/todo.png" alt="" style={{height:"250px"}}/>
            <div className="img-caption">
              <h5 className="fg-theme">Todo List App</h5>
              <p>ReactJS, RTK, Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="grid-item ui-ux wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/portfolio.png" data-fancybox data-caption="<h5 className='fg-theme'>Personal Portfolio Application</h5> <p>Technologies: ReactJS, JavaScript.</p>">
            <img src="../assets/img/work/portfolio.png" alt="" style={{height:"250px"}}/>
            <div className="img-caption">
              <h5 className="fg-theme">ReactJS Portfolio Application</h5>
              <p>Technologies: ReactJS, JavaScript.</p>
            </div>
          </div>
        </div>
        <div className="grid-item ui-ux wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/doctor.png" data-fancybox data-caption="<h5 className='fg-theme'>Doctor Appointment Booking</h5> <p>Technologies: ReactJS, Redux-Tool-Kit.</p>">
            <img src="../assets/img/work/doctor.png" alt="" style={{height:"250px"}}/>
            <div className="img-caption">
              <h5 className="fg-theme">Doctor Appointment Booking</h5>
              <p>Technologies: ReactJS, Redux-Tool-Kit.</p>
            </div>
          </div>
        </div>
        <div className="grid-item graphic ui-ux wireframes wow zoomIn">
          <div className="img-place" data-src="../assets/img/work/ems.png" data-fancybox data-caption="<h5 className='fg-theme'>Employees Management System</h5> <p>Technologies: MongoDB, ReactJS, NodeJS, Material-UI.</p>">
            <img src="../assets/img/work/ems.png" alt="" style={{height:"250px"}}/>
            <div className="img-caption">
              <h5 className="fg-theme">Employee Management System</h5>
              <p>Technologies: MongoDB, ReactJS, NodeJS, Material-UI.</p>
            </div>
          </div>
        </div>
      </div> 
      {/* <!-- End gridder --> */}
      <div className="text-center wow fadeInUp">
        <a href="#" className="btn btn-theme">Load More</a>
      </div>
    </div>
  </div> 
  {/* <!-- End Portfolio page --> */}
  
  {/* <!-- Testimonial --> */}
  <div className="vg-page page-testimonial">
    <div className="container">
      <h1 className="text-center fw-normal wow fadeInUp">What Clients are Saying</h1>
      <div className="row justify-content-center mt-5 wow fadeInUp">
        <div className="col-md-9">
          <div className="owl-carousel testi-carousel">
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-place">
                    <img src="../assets/img/man.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="caption">
                    <div className="testi-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</div>
                    <div className="testi-info">
                      <div className="thumb-profile">
                        <img src="../assets/img/man.png" alt=""/>
                      </div>
                      <div className="tagline">
                        <h5 className="mb-0"> Coming Soon... </h5>
                        <span className="text-muted"> CTO </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-place">
                    <img src="../assets/img/person1.jpg" alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="caption">
                    <div className="testi-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe natus expedita ab facilis ut, animi explicabo amet. Voluptatibus possimus iste enim, doloremque, fugiat accusamus nisi optio fugit ratione expedita harum?</div>
                    <div className="testi-info">
                      <div className="thumb-profile">
                        <img src="../assets/img/person1.jpg" alt=""/>
                      </div>
                      <div className="tagline">
                        <h5 className="mb-0"> Mahesh Babu </h5>
                        <span className="text-muted"> CEO </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  {/* <!-- End testimonial --> */}
  
  {/* <!-- Client --> */}
  <div className="vg-page page-client">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_1.svg" alt=""/> */}
            <img src="../assets/img/logo/html.svg" alt=""/>
           
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_2.svg" alt=""/> */}
            <img src="../assets/img/logo/css.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_3.svg" alt=""/> */}
            <img src="../assets/img/logo/react.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_4.svg" alt=""/> */}
            <img src="../assets/img/logo/js.svg" alt=""/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_5.svg" alt=""/> */}
            <img src="../assets/img/logo/node.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_6.svg" alt=""/> */}
            <img src="../assets/img/logo/mongo.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_7.svg" alt=""/> */}
            <img src="../assets/img/logo/sql.svg" alt=""/>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 item">
          <div className="img-place wow fadeInUp">
            {/* <img src="../assets/img/logo/company_8.svg" alt=""/> */}
            <img src="../assets/img/logo/git.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div> 
  {/* <!-- End client --> */}
  
  {/* <!-- Blog --> */}
  <div className="vg-page page-blog" id="blog">
    <div className="container">
      <div className="text-center">
        <div className="badge badge-subhead wow fadeInUp">Blog</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">Latest Post</h1>
      <div className="row post-grid">
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <a href="https://mbems.netlify.app" target='_blank'> <img src="../assets/img/work/ems.png" alt="" style={{height:'175px',width:'100%'}}/> </a>
            </div>
            <div className="caption">
              <a href="https://mbems.netlify.app" target='_blank' className="post-category">Employees Management System Dashboard</a>
              <a href="https://mbems.netlify.app" target='_blank' className="post-title">MongoDB, NodeJS, ReactJS, Material-UI.</a>
              <span className="post-date"><span className="sr-only">Published on</span>Email:demo@gmail.com | Pass:demo@gmail.com</span><br/>
              <span className="post-date"><span className="sr-only">Published on</span> Current - 2023 latest</span>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
              <a href="https://mbtodoapp.onrender.com" target='_blank'> <img src="../assets/img/work/todo.png" alt="" style={{height:'275px',width:'100%'}}/> </a>
            </div>
            <div className="caption">
              <a href="https://mbtodoapp.onrender.com" target='_blank' className="post-category">Todo List App</a>
              <a href="https://mbtodoapp.onrender.com" target='_blank' className="post-title">ReactJS, RTK, Bootstrap.</a>
              <span className="post-date"><span className="sr-only">Published on</span> April 2023 latest</span>
            </div>
          </div>
        </div>


        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
               <a href='https://mbinfotech.netlify.app' target='_blank'> <img src="../assets/img/work/portfolio.png" alt="" style={{height:'275px',width:'100%'}}/> </a>
            </div>
            <div className="caption">
              <a href="https://mbinfotech.netlify.app" target='_blank' className="post-category">ReactJS Portfolio Application</a>
              <a href="https://mbinfotech.netlify.app" target='_blank' className="post-title">ReactJS, JavaScript.</a>
              <span className="post-date"><span className="sr-only">Published on</span> February 22, 2023</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeInUp">
          <div className="card">
            <div className="img-place">
                <a href="https://mbdabooking.onrender.com" target='_blank'> <img src="../assets/img/work/doctor.png" alt="" style={{height:'275px',width:'100%'}}/> </a>
            </div>
            <div className="caption">
              <a href="https://mbdabooking.onrender.com" target='_blank' className="post-category">Doctor Appointment Booking</a>
              <a href="https://mbdabooking.onrender.com" target='_blank' className="post-title">ReactJS, Redux-Tool-Kit.</a>
              <span className="post-date"><span className="sr-only">Published on</span> May 22, 2021</span>
            </div>
          </div>
        </div>
        <div className="col-12 text-center py-3 wow fadeInUp">
          {/* <a href="../blog-topbar.html" className="btn btn-theme">See All Post</a> */}
          <a href="#" className="btn btn-theme">See All Post</a>
        </div>
      </div>
    </div>
  </div> 
  {/* <!-- End blog --> */}
  
  {/* <!-- Contact --> */}
  <div className="vg-page page-contact" id="contact">
    <div className="container-fluid">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Contact</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
      <div className="row py-5">
        <div className="col-lg-7 px-0 pr-lg-3 wow zoomIn">
          <div className="vg-maps">
            {/* <div id="google-maps" style={{width: "100%", height: "100%"}}></div> */}
            <img src={"../assets/img/logo/contact.jpg"} style={{width: "100%", height: "100%"}}/>
          </div>
        </div>
        <div className="col-lg-5">
          <form className="vg-contact-form" action="https://64313f543adb159651685138.mockapi.io/users" method="POST" onSubmit={submitHandler} autoComplete='off'>
            <div className="form-row">
              <div className="col-12 mt-3 wow fadeInUp">
                <input className="form-control" type="text" name="fname" placeholder="Your Name" value={fname} onChange={(e)=>changeHandler(e)} maxLength={15} required/>
              </div>
              <div className="col-6 mt-3 wow fadeInUp">
                <input className="form-control" type="email" name="email" placeholder="Email Address" value={email} onChange={(e)=>changeHandler(e)} required/>
              </div>
              <div className="col-6 mt-3 wow fadeInUp">
                <input className="form-control" type="text" name="subject" placeholder="Subject" value={subject} onChange={(e)=>changeHandler(e)} maxLength={20} required/>
              </div>
              <div className="col-12 mt-3 wow fadeInUp">
                <textarea className="form-control" name="message" rows="6" placeholder="Enter message here.." value={message} onChange={(e)=>changeHandler(e)} maxLength={50} required></textarea>
              </div>
              <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
                <Toaster />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 
  
  {/* <!-- End Contact --> */}

           <Footer/>
        </div>
    </>
  );
}

export default Home;
