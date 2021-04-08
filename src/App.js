import React , { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {Map} from 'immutable'
import logo from './assets/images/vivek.png'
import iot_thermist from './assets/images/iot_thermist.PNG'
import iot_drone from './assets/images/iot_drone.PNG'
import ux_design_tools from './assets/images/ux_design_tools.PNG'
import './App.css';
import {submitQuery} from './redux/actions/contactAction'

import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from './utils/validation'
let validateArr = ['name', 'email', 'subject',  'question']


const INPUT_CONFIG = [
  { name: "email", validations: [validateExistence, validateEmail] },
  { name: "name", validations: [validateExistence] },
  { name: "subject", validations: [validateExistence] },
  /* { name: "category", validations: [validateExistence] }, */
  { name: "question", validations: [validateExistence, validateLength(50, 150)] }
]

function App(props) {
  const [toggleFlg, setToggleFlg] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('home')
  const [state, setState] = useState({ name: '', email: '', subject: '', category: '', question: '' })
  const [error, setError] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  {/* Performs similarly to componentDidMount in classes */}
  useEffect(() => {
      window.addEventListener("resize", () => {
          const ismobile = window.innerWidth < 1200;
          if (ismobile !== isMobile) setIsMobile(ismobile);
      }, false);
  }, [isMobile]);

  useEffect(() => {
      if (!props.submit_faq_loading) {
          if (!props.submit_faq.toJS().error) {
              alert('Your request submitted successfully.')             
          } else {
            alert('Failed to submit your request, please try again sometime later.')               
          }
      }
  }, [props.submit_faq_loading])

  function onChangeHandler(e) {
      let id = e.target.id, value = e.target.value
      setState(prevState => {
          prevState[id] = value
          return ({ ...prevState })
      })
  }

  function isValidForm(form) {
      let canSubmit = true
      for (const input of INPUT_CONFIG) {
          if (!!!input.validations) continue
          for (const v of input.validations) {
              let checkResult = v.check(form[input.name])
              canSubmit = canSubmit && checkResult
              if (!checkResult) {
                  setError(`${input.name} :: ${v.errMsg}`)
                  return false
              }
          }
      }
      return canSubmit
  }

  function onSubmitHandler() {
      let isValid = isValidForm(state)
      if (isValid) {
          props.submitQuery(state)
      } else {
        alert(JSON.stringify(error))          
      }
  }

  function toggleNav() {
    setToggleFlg(!toggleFlg)
  }

  return (
    <div className={`App ${(isMobile && !toggleFlg) ? "offcanvas" : "non-mobile-class"}`}>
      {/* <nav className={'menu_shown'}>
    <ul className="menu desktop">
        <li><a href="" className="menu__item">Listings</a></li>
        <li><a href="" className="menu__item">News</a></li>
        <li><a href="" className="menu__item">Blog</a></li>
        <li><a href="" className="menu__item">About us</a></li>
        <li><a href="" className="menu__item">Contact us</a></li>
    </ul>
    <a className="menu__icon mobile"><span></span></a>
    <ul className="menu mobile">
        <li><a href="" className="menu__item">Listings</a></li>
        <li><a href="" className="menu__item">News</a></li>
        <li><a href="" className="menu__item">Blog</a></li>
        <li><a href="" className="menu__item">About us</a></li>
        <li><a href="" className="menu__item">Contact us</a></li>
    </ul>
</nav> */}

      <div className="container-wrap">
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" onClick={() => toggleNav()} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight" >
          <div className="text-center">
            <div className="author-img" >
              <img src={'https://res.cloudinary.com/djlz8wdtu/image/upload/v1617731008/personal-site/vivek_asfm72.jpg'} width="150" height="150" style={{borderRadius:'50px'}}/>              
            </div>
            <h1 id="colorlib-logo"><a href="index.html">Vivek Panneerselvam</a></h1>
            <span className="position"><a href="#">Developer,  </a> India</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse" aria-expanded="false">
              <ul>
                <li className={''+ (selectedMenu === 'home' ? 'active' : '')}><a href="#" data-nav-section="home" onClick={()=>setSelectedMenu('home')}>Home</a></li>
                <li className={''+ (selectedMenu === 'about' ? 'active' : '')}><a href="#about" data-nav-section="about" onClick={()=>setSelectedMenu('about')}>About</a></li>
                <li className={''+ (selectedMenu === 'services' ? 'active' : '')}><a href="#services" data-nav-section="services" onClick={()=>setSelectedMenu('services')}>Services</a></li>
                <li className={''+ (selectedMenu === 'skills' ? 'active' : '')}><a href="#skills" data-nav-section="skills" onClick={()=>setSelectedMenu('skills')}>Skills</a></li>
                <li className={''+ (selectedMenu === 'education' ? 'active' : '')}><a href="#education" data-nav-section="education" onClick={()=>setSelectedMenu('education')}>Education</a></li>
                <li className={''+ (selectedMenu === 'experience' ? 'active' : '')}><a href="#experience" data-nav-section="experience" onClick={()=>setSelectedMenu('experience')}>Experience</a></li>
                <li className={''+ (selectedMenu === 'work' ? 'active' : '')}><a href="#work" data-nav-section="work" onClick={()=>setSelectedMenu('work')}>Work</a></li>
                <li className={''+ (selectedMenu === 'blog' ? 'active' : '')}><a href="#blog" data-nav-section="blog" onClick={()=>setSelectedMenu('blog')}>Blog</a></li>
                <li className={''+ (selectedMenu === 'contact' ? 'active' : '')}><a href="#contact" data-nav-section="contact" onClick={()=>setSelectedMenu('contact')}>Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            <ul>
              <li><a href="https://www.facebook.com/vivekvppanneerselvam/" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/vppvivek" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/vivekvppanneerselvam/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://in.linkedin.com/in/vivekvppanneerselvam" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="https://vivekpanneerselvam.blogspot.com/" target="_blank"><i className="fa fa-rss-square" aria-hidden="true"></i></a></li>
            </ul>
            <p><small>©
              Copyright ©<script>document.write(new Date().getFullYear());</script>
              2021 All rights reserved | This template is designed by 
              <i className="icon-heart" aria-hidden="true"></i> 
              <a href="https://vivekpanneerselavam.in" target="_blank"> Vivek Panneerselvam</a>
              </small></p>

          </div>
        </aside>
        <div id="colorlib-main">
          <section id="colorlib-hero" className="js-fullheight" data-section="home" style={{ height: '158px' }}>
            <div className="flexslider js-fullheight" style={{ height: '158px' }}>
              <ul className="slides">
                <li style={{ width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 1, display: 'block', zIndex: 2 }} className="flex-active-slide" data-thumb-alt="">
                  
                  <div className="overlay"></div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp" style={{ height: '158px', float: 'left',  opacity: 1, display: 'block', zIndex: 2 }}>
                        <div className="slider-text-inner js-fullheight" style={{ height: '158px' }}>
                          <div className="desc">
                            <h1>Hi! <br />I'm Vivek</h1>
                            <h2>A programmer / blogger / venture capitalist</h2>
                            <img src={logo} />
                            <p><a className="btn btn-primary btn-learn" href="https://res.cloudinary.com/djlz8wdtu/raw/upload/v1617728468/personal-site/New_Vivek_Panneerselvam_CV__Final_fgjlwj.docx" target="_blank">Download CV <i className="icon-download4"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp">
                      <img src="https://res.cloudinary.com/djlz8wdtu/image/upload/v1617728812/personal-site/IMG-20210106-WA0004_a7u5sk.jpg" width="500" height="670" />
                      </div>
                    </div>
                  </div>
                </li>                
              </ul>
              </div>
          </section>
          <section className="colorlib-about" data-section="about" id="about">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                      <div className="about-desc">
                        <span className="heading-meta">About Us</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p><strong>Hi I'm Vivek, </strong> 
                        Im a programmer with 6 years of experience managing all aspects of the development process for service based and product based companies.
                        I am an Computer Science Engineering Undergraduate and Completed my B.E degree in 
                        Computer Science and Engineering from Jeppiaar Engineering College (Affiliated Anna University), Chennai. 
                        After completing my engineering, Joined a service based IT company where i get an opporunity to learn and work
                        with real stuff. Provided excellent service to the organization and got good feedbacks from my managers and clients.
                        I'm also passionate towards learning new stuffs and taking challenges, So I desided to bring my IT experience towards to support 
                        my father's ecommerce business. I founded an IT based retail startup ecommerce website “Chennai Farm Fresh(https://www.chennaifarmfresh.in)”
                        and in my learning towards IoT (Internet of Things). Started to do learn electronic's and did small projects like room temperature detector, IoT Drone etc.,
                        </p>
                        <p> I was so inspired and believe on below quotes.
                        “All Birds find shelter during a rain, But Eagle avoids rain by flying above the clouds” - missile man
                        “Dreams is not what you see in sleep, is the thing which doesn't let you sleep” - missile man
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div className="services color-1">
                        <span className="icon2"><i className="fa fa-lightbulb-o" aria-hidden="true"></i></span>
                        <h3>Graphic Design</h3>
                      </div>
                    </div>
                    <div className="col-md-3 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                      <div className="services color-2">
                        <span className="icon2"><i className="fa fa-globe" aria-hidden="true"></i></span>
                        <h3>Web Design</h3>
                      </div>
                    </div>
                    <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                      <div className="services color-3">
                        <span className="icon2"><i className="fa fa-database" aria-hidden="true"></i></span>
                        <h3>Software</h3>
                      </div>
                    </div>
                    <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                      <div className="services color-4">
                        <span className="icon2"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                        <h3>Application</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div className="hire">
                        <h2>I am happy to know  <br />that I have done 50+ projects  sucessfully!</h2>
                        {/* <a href="#" className="btn-hire">Hire me</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-services" data-section="services" id="services">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">What I do?</span>
                  <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>
              </div>
              <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box fadeInUp animated">
                  <div className="services color-1">
                    <span className="icon">
                      <i className="icon-bulb"></i>
                    </span>
                    <div className="desc">
                      <h3>Innovative Ideas</h3>
                      <p>Implemented various new front-end development technologies and adept at promptly and proactively mastering them with a keen awareness of new industry developments and the evolution of programming solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box fadeInUp animated">
                  <div className="services color-2">
                    <span className="icon">
                      <i className="icon-data"></i>
                    </span>
                    <div className="desc">
                      <h3>Software</h3>
                      <p>Design and implement front end and back end website components</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box fadeInUp animated">
                  <div className="services color-3">
                    <span className="icon">
                      <i className="icon-phone3"></i>
                    </span>
                    <div className="desc">
                      <h3>Application</h3>
                      <p>Design a basic framework that ensures maintenance of proper coding standard.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box fadeInUp animated">
                  <div className="services color-4">
                    <span className="icon">
                      <i className="icon-layers2"></i>
                    </span>
                    <div className="desc">
                      <h3>Creative Design</h3>
                      <p>Commendable involvement in understanding functional specifications and developing creative solutions.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box fadeInUp animated">
                  <div className="services color-5">
                    <span className="icon">
                      <i className="icon-data"></i>
                    </span>
                    <div className="desc">
                      <h3>Project management</h3>
                      <p>Requirements gathering from the user,
                      Provide technical support for the team and fix production issues.
                      Deploy the application and do the testing in the testing environment QA.
                      
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box fadeInUp animated">
                  <div className="services color-6">
                    <span className="icon">
                      <i className="icon-phone3"></i>
                    </span>
                    <div className="desc">
                      <h3>Complex problem solver</h3>
                      <p>Code, optimize, test and review the programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="colorlib-counter" className="colorlib-counters animated" style={{ backgroundImage: 'url(images/cover_bg_1.jpg)' }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="colorlib-narrow-content">
              <div className="row">
              </div>
              <div className="row">
                <div className="col-md-3 text-center animate-box fadeInUp animated">
                  <span className="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50">309</span>
                  <span className="colorlib-counter-label">Cups of coffee</span>
                </div>
                <div className="col-md-3 text-center animate-box fadeInUp animated">
                  <span className="colorlib-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50">356</span>
                  <span className="colorlib-counter-label">Projects</span>
                </div>
                <div className="col-md-3 text-center animate-box fadeInUp animated">
                  <span className="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50">30</span>
                  <span className="colorlib-counter-label">Clients</span>
                </div>
                <div className="col-md-3 text-center animate-box fadeInUp animated">
                  <span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50">10</span>
                  <span className="colorlib-counter-label">Partners</span>
                </div>
              </div>
            </div>
          </div>
          <section className="colorlib-skills" data-section="skills" id="skills">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">My Specialty</span>
                  <h2 className="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <h4>TECHNICAL SKILLS</h4><hr/> <br/>

              <div className="row">  <h6> Technology</h6>: 
                SpringBoot, J2EE, Servlets, JSP, Jquery,  <br/>
                 Javascript, HTML, CSS, Shell Script, SQL,  ReactJs,  <br/>
                 React Native,  AngularJs, NodeJs, Junit, JavaFx, Python,  <br/>
                 Hibernate(JPA), EJB, JDBC, GIT, JIRA, Docker, Kubernetes</div>
                  <br/>
                  <div className="row">   <h6> Database/ DB tools </h6>: My SQL, Mongo DB, DB2, Druid, Oracle <br/> </div>
                  <table border="1">
                  <tbody>
                    <tr>
                      <td>Quality Management</td>
                      <td>JIRA</td>
                    </tr>
                    <tr>
                      <td>OS</td>
                      <td>Windows, Linux</td>
                    </tr>
                    <tr>
                      <td>Build</td>
                      <td>Maven</td>
                    </tr>
                    <tr>
                      <td>Server</td>
                      <td>AWS, GCP, PCF, heroku, Apache Tomcat, Weblogic </td>
                    </tr>
                    <tr>
                      <td>IDE</td>
                      <td>Eclipse, STS, VScode</td>
                    </tr>
                    </tbody>
                  </table>
                  <br/>

                </div>
                <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="progress-wrap">
                    <h3>JAVA</h3>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h3>JavaScript / jQuery</h3>
                    <div className="progress">
                      <div className="progress-bar color-2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="progress-wrap">
                    <h3>HTML5</h3>
                    <div className="progress">
                      <div className="progress-bar color-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h3>CSS3</h3>
                    <div className="progress">
                      <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="progress-wrap">
                    <h3>Docker / Kubernetes</h3>
                    <div className="progress">
                      <div className="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h3>Photoshop</h3>
                    <div className="progress">
                      <div className="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-education" data-section="education" id="education">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">Education</span>
                  <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="fancy-collapse-panel">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree of Computer Science</a>
                          </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div className="panel-body">
                            <div className="row">
                          <table>
                            <thead>
                              <tr>  
                                <th>Graduation/Post Graduation</th>
                                <th>Specialization</th>
                                <th>Month
                            /Year Of Passing</th>
                                <th>College Name</th>
                                <th>University Name</th>
                                <th>CGPA </th>    
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>B.E.</td>
                                <td>COMPUTER SCIENCE</td>
                                <td>MAY ‘15</td>
                                <td>Jeppiaar Engineering College</td>
                                <td>Affiliated college of Anna University</td>
                                <td>7.15</td>
                              </tr>
                              </tbody>
                            </table>                             
 
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> High School Secondary Education</a>
                          </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div className="panel-body">
                            <table>
                              <thead>
                                <tr>  
                                  <th>Institution</th>
                                  <th>Year of passing</th>        
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>Gill Adarsh Mat.Hr.Secondary School, Chennai</td>    
                                  <td>2011</td>    
                                </tr>
                                </tbody>
                              </table>                
                          </div>
                        </div>
                      </div>                   
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-experience" data-section="experience" id="experience">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">Experience</span>
                  <h2 className="colorlib-heading animate-box fadeInUp animated">Work Experience</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="timeline-centered">                    
                    <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">System Analyst at Verizon, India</a> <span>2019-2021</span></h2>
                          <h6>As a Programmer</h6>
                          <ul>
<li>	Design and implement front end and back end website components</li>
<li>Write test cases for unit testing</li>
<li>	Design a basic framework that ensures maintenance of proper coding standard.</li>
</ul>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#">Associate Consultant at Syntel, Inc</a> <span>2016-2018</span></h2>
                          <h6>As a Senior Software Engineer </h6>
                          <li>	Deploy the application and do the testing in the testing environment QA.</li>
                            <li>Code, optimize, test and review the programs.</li>
                            <li>Coordinate with QA team for fixing issues.</li>
                            <li>Design mock up for front end and back end.</li>
                            <li>Provide creative features for websites.</li>
                            <li>Provide technical support for the team and fix production issues.</li>
                            <li>	Requirements gathering from the user</li>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2"></i>
                        </div>
                        <div className="timeline-label">
                          <h2><a href="#"></a>Software Engineer at Syntel, Inc<span>2015-2016</span></h2>

                          <h6>As a Software Engineer </h6>
                          <ul>
                            <li>  Analyze the requirements.</li>
                            <li> Prepare design documents.</li>
                            <li> Coding, test case preparation and developer testing.</li>
                            <li> Releasing enhancements and issue fixing for every release.</li>
                            <li>  Release management and support coordination with various</li>
                            <li> infrastructure teams.</li>                           

                          </ul>                          
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none">
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-work" data-section="work" id="work">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">My Work</span>
                  <h2 className="colorlib-heading animate-box fadeInUp animated">Recent Work</h2>
                </div>
              </div>
              <div className="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <p className="work-menu">
                    <span><a href="#" className="active">Graphic Design</a></span>
                    <span><a href="#">Web Design</a></span> 
                    <span><a href="#">Software</a></span>
                    <span><a href="#">Apps</a></span></p>
                </div>
              </div>
             <ul>
              <li>Design web pages</li>
              <li>Brochures</li>
              <li>Logos</li>
              <li>Signs</li>              
              <li>Magazine covers/ Posters</li>
              <li>Annual reports</li>
              <li>Advertisements and other communication materials.</li>
             </ul>

             <ul>
              <li>Design web pages</li>
              <li>Mobile application templates</li>
              <li>Creating mockups</li>
              <li>Designing assets </li>
             </ul>

             <ul>
              <li>Billing & Retial Inventory Management Software</li>
              <li>Published Capche Module for Angular & React</li> 
              <li>IOT Drone / Quadcopter</li>             
             </ul>
             <ul>
              <li>Ecommerse Website & Mobile App for selling products</li>
              <li>Taxi Booking Mobile  App</li>              
              <li>IOT Drone / Quadcopter</li>
             </ul>
             

              <div className="row">
                <div className="col-md-12 animate-box fadeInUp animated">
                  <p><a href="#" className="btn btn-primary btn-sm rounded-0 btn-load-more">Load more <i className="icon-reload"></i></a></p>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-blog" data-section="blog" id="blog">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">Read</span>
                  <h2 className="colorlib-heading">Recent Blog</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="blog-entry">
                    <a href="https://vivekpanneerselvam.blogspot.com/" target="_blank" className="blog-img">
                      <img src={iot_drone} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                    <div className="desc">
                      <span><small>April 06, 2021</small> | <small> IoT </small> | </span>
                      <h3><a href="https://vivekpanneerselvam.blogspot.com/" target="_blank">IOT Drone / Quadcopter</a></h3>
                      <p>  Another IoT project IoT Drone / Quadcopter with nodemcu able to control quadcopter 
                        without transmitter & receiver an initial start to spin BDLC motor with ESC component.
                        Components used 1. NodeMCU ESP8266 </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                <div className="blog-entry">
                    <a href="https://vivekpanneerselvam.blogspot.com/" target="_blank" className="blog-img">
                      <img src={ux_design_tools} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                    <div className="desc">
                    <span><small>April 06, 2021</small> | <small> IoT </small> | </span>
                      <h3><a href="blog.html">UI/UX Research & Design Tools</a></h3>
                      <p>A nice big list of UX Research & Design Tools.

Too much to choose from, so pick wisely, as per the user & system needs. #ai

#DesignThing #UXResearch #UXTools #UXDesign</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="blog-entry">
                    <a href="https://vivekpanneerselvam.blogspot.com/" target="_blank" className="blog-img">
                      <img src={iot_thermist} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                    <div className="desc">
                    <span><small>April 06, 2021</small> | <small> IoT </small> | </span>
                      <h3><a href="https://vivekpanneerselvam.blogspot.com/" target="_blank">IOT Thermist</a></h3>
                      <p> Small IoT project from my learning. Temperature Monitoring System Components: 
                        Arduino NodeMCU WiFi Resistor Thermistor 102 Breadboard 
                        "If you think that the internet has changed your life, think again. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animate-box fadeInUp animated">
                  <p><a href="https://vivekpanneerselvam.blogspot.com/" target="_blank" className="btn btn-primary btn-sm rounded-0 btn-load-more">Load more <i className="icon-reload"></i></a></p>
                </div>
              </div>
            </div>
          </section>
          <section className="colorlib-contact" data-section="contact" id="contact">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">Get in Touch</span>
                  <h2 className="colorlib-heading">Contact</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="colorlib-icon">
                      <i className="icon-globe-outline"></i>
                    </div>
                    <div className="colorlib-text">
                      <p><a href="#">vivekvppanneerselvam@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="colorlib-icon">
                      <i className="icon-map"></i>
                    </div>
                    <div className="colorlib-text">
                      <p>Chennai, India</p>
                    </div>
                  </div>
                  <div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="colorlib-icon">
                      <i className="icon-phone"></i>
                    </div>
                    <div className="colorlib-text">
                      <p><a href="tel://">+91 9840271370</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-md-push-1">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                      <form action="">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name" id="name" value={state.name} onChange={(e) => onChangeHandler(e)} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Email" id="email"  value={state.email} onChange={(e) => onChangeHandler(e)}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Subject" id="subject" value={state.subject} onChange={(e) => onChangeHandler(e)} />
                        </div>
                        <div className="form-group">
                          <textarea name="" id="question" cols="30" rows="7" value={state.question} onChange={(e) => onChangeHandler(e)} className="form-control" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary btn-sm rounded-0 btn-send-message" onClick={() => onSubmitHandler()} >Send Message</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* </header> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      submit_faq_loading: state.ContactReducer.getIn(['submit_faq', 'loading'], true),
      submit_faq: state.ContactReducer.getIn(['submit_faq'], Map())
  }
}
export default connect(mapStateToProps, { submitQuery })(App);
