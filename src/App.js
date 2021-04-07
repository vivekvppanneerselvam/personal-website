import { useState } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  const [toggleFlg, setToggleFlg] = useState(false)

  function toggleNav() {
    setToggleFlg(!toggleFlg)
  }

  return (
    <div className={'App ' + (!toggleFlg ? 'offcanvas' : '')}>
      {/* <nav class={'menu_shown'}>
    <ul class="menu desktop">
        <li><a href="" class="menu__item">Listings</a></li>
        <li><a href="" class="menu__item">News</a></li>
        <li><a href="" class="menu__item">Blog</a></li>
        <li><a href="" class="menu__item">About us</a></li>
        <li><a href="" class="menu__item">Contact us</a></li>
    </ul>
    <a class="menu__icon mobile"><span></span></a>
    <ul class="menu mobile">
        <li><a href="" class="menu__item">Listings</a></li>
        <li><a href="" class="menu__item">News</a></li>
        <li><a href="" class="menu__item">Blog</a></li>
        <li><a href="" class="menu__item">About us</a></li>
        <li><a href="" class="menu__item">Contact us</a></li>
    </ul>
</nav> */}

      <div class="container-wrap">
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" onClick={() => toggleNav()} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <aside id="colorlib-aside" role="complementary" class="border js-fullheight" >
          <div class="text-center">
            <div class="author-img" style={{ backgroundImage: "url(https://res.cloudinary.com/djlz8wdtu/image/upload/v1617731008/personal-site/vivek_asfm72.jpg)" }}></div>
            <h1 id="colorlib-logo"><a href="index.html">Vivek Panneerselvam</a></h1>
            <span class="position"><a href="#">Developer,  </a> India</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" class="navbar">
            <div id="navbar" class="collapse" aria-expanded="false">
              <ul>
                <li class=""><a href="#" data-nav-section="home">Home</a></li>
                <li class=""><a href="#" data-nav-section="about">About</a></li>
                <li class=""><a href="#" data-nav-section="services">Services</a></li>
                <li class=""><a href="#" data-nav-section="skills">Skills</a></li>
                <li class=""><a href="#" data-nav-section="education">Education</a></li>
                <li class=""><a href="#" data-nav-section="experience">Experience</a></li>
                <li class=""><a href="#" data-nav-section="work">Work</a></li>
                <li class=""><a href="#" data-nav-section="blog">Blog</a></li>
                <li class="active"><a href="#" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div class="colorlib-footer">
            <ul>
              <li><a href="https://www.facebook.com/vivekvppanneerselvam/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/vppvivek" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/vivekvppanneerselvam/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://in.linkedin.com/in/vivekvppanneerselvam" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="https://vivekpanneerselvam.blogspot.com/" target="_blank"><i class="fa fa-rss-square" aria-hidden="true"></i></a></li>
            </ul>
            <p><small>©
              Copyright ©<script>document.write(new Date().getFullYear());</script>
              2021 All rights reserved | This template is designed by
              <i class="icon-heart" aria-hidden="true"></i> 
              <a href="https://vivekpanneerselavam.in" target="_blank">Vivek Panneerselvam</a>
              </small></p>

          </div>
        </aside>
        <div id="colorlib-main">
          <section id="colorlib-hero" class="js-fullheight" data-section="home" style={{ height: '158px' }}>
            <div class="flexslider js-fullheight" style={{ height: '158px' }}>
              <ul class="slides">
                <li style={{ backgroundImage: 'url(&quot;https://res.cloudinary.com/djlz8wdtu/image/upload/v1617728812/personal-site/IMG-20210106-WA0004_a7u5sk.jpg&quot;)', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 1, display: 'block', zIndex: 2 }} class="flex-active-slide" data-thumb-alt="">
                  <div class="overlay"></div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp" style={{ height: '158px' }}>
                        <div class="slider-text-inner js-fullheight" style={{ height: '158px' }}>
                          <div class="desc">
                            <h1>Hi! <br />I'm Vivek</h1>
                            <h2>A programmer / blogger / venture capitalist</h2>
                            <p><a class="btn btn-primary btn-learn">Download CV <i class="icon-download4"></i></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>                
              </ul>
              </div>
          </section>
          <section class="colorlib-about" data-section="about">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-12">
                  <div class="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div class="col-md-12">
                      <div class="about-desc">
                        <span class="heading-meta">About Us</span>
                        <h2 class="colorlib-heading">Who Am I?</h2>
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
                  <div class="row">
                    <div class="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div class="services color-1">
                        <span class="icon2"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span>
                        <h3>Graphic Design</h3>
                      </div>
                    </div>
                    <div class="col-md-3 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                      <div class="services color-2">
                        <span class="icon2"><i class="fa fa-globe" aria-hidden="true"></i></span>
                        <h3>Web Design</h3>
                      </div>
                    </div>
                    <div class="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                      <div class="services color-3">
                        <span class="icon2"><i class="fa fa-database" aria-hidden="true"></i></span>
                        <h3>Software</h3>
                      </div>
                    </div>
                    <div class="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                      <div class="services color-4">
                        <span class="icon2"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                        <h3>Application</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div class="hire">
                        <h2>I am happy to know  <br />that I have done 50+ projects  sucessfully!</h2>
                        {/* <a href="#" class="btn-hire">Hire me</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-services" data-section="services">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">What I do?</span>
                  <h2 class="colorlib-heading">Here are some of my expertise</h2>
                </div>
              </div>
              <div class="row row-pt-md">
                <div class="col-md-4 text-center animate-box fadeInUp animated">
                  <div class="services color-1">
                    <span class="icon">
                      <i class="icon-bulb"></i>
                    </span>
                    <div class="desc">
                      <h3>Innovative Ideas</h3>
                      <p>Implemented various new front-end development technologies and adept at promptly and proactively mastering them with a keen awareness of new industry developments and the evolution of programming solutions.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center animate-box fadeInUp animated">
                  <div class="services color-2">
                    <span class="icon">
                      <i class="icon-data"></i>
                    </span>
                    <div class="desc">
                      <h3>Software</h3>
                      <p>Design and implement front end and back end website components</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center animate-box fadeInUp animated">
                  <div class="services color-3">
                    <span class="icon">
                      <i class="icon-phone3"></i>
                    </span>
                    <div class="desc">
                      <h3>Application</h3>
                      <p>Design a basic framework that ensures maintenance of proper coding standard.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center animate-box fadeInUp animated">
                  <div class="services color-4">
                    <span class="icon">
                      <i class="icon-layers2"></i>
                    </span>
                    <div class="desc">
                      <h3>Creative Design</h3>
                      <p>Commendable involvement in understanding functional specifications and developing creative solutions.
                        </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center animate-box fadeInUp animated">
                  <div class="services color-5">
                    <span class="icon">
                      <i class="icon-data"></i>
                    </span>
                    <div class="desc">
                      <h3>Project management</h3>
                      <p>Requirements gathering from the user,
                      Provide technical support for the team and fix production issues.
                      Deploy the application and do the testing in the testing environment QA.
                      
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 text-center animate-box fadeInUp animated">
                  <div class="services color-6">
                    <span class="icon">
                      <i class="icon-phone3"></i>
                    </span>
                    <div class="desc">
                      <h3>Complex problem solver</h3>
                      <p>Code, optimize, test and review the programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="colorlib-counter" class="colorlib-counters animated" style={{ backgroundImage: 'url(images/cover_bg_1.jpg)' }} data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="colorlib-narrow-content">
              <div class="row">
              </div>
              <div class="row">
                <div class="col-md-3 text-center animate-box fadeInUp animated">
                  <span class="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50">309</span>
                  <span class="colorlib-counter-label">Cups of coffee</span>
                </div>
                <div class="col-md-3 text-center animate-box fadeInUp animated">
                  <span class="colorlib-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50">356</span>
                  <span class="colorlib-counter-label">Projects</span>
                </div>
                <div class="col-md-3 text-center animate-box fadeInUp animated">
                  <span class="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50">30</span>
                  <span class="colorlib-counter-label">Clients</span>
                </div>
                <div class="col-md-3 text-center animate-box fadeInUp animated">
                  <span class="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50">10</span>
                  <span class="colorlib-counter-label">Partners</span>
                </div>
              </div>
            </div>
          </div>
          <section class="colorlib-skills" data-section="skills">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">My Specialty</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <h4>TECHNICAL SKILLS</h4><hr/> <br/>

                <h6> Technology</h6>: 
                SpringBoot, J2EE, Servlets, JSP, Jquery,  <br/>
                 Javascript, HTML, CSS, Shell Script, SQL,  ReactJs,  <br/>
                 React Native,  AngularJs, NodeJs, Junit, JavaFx, Python,  <br/>
                 Hibernate(JPA), EJB, JDBC, GIT, JIRA, Docker, Kubernetes
                  <br/>
                  <h6> Database/ DB tools </h6>: My SQL, Mongo DB, DB2, Druid, Oracle <br/> 
                  <table border="1">
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
                  </table>
                  <br/>

                </div>
                <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div class="progress-wrap">
                    <h3>JAVA</h3>
                    <div class="progress">
                      <div class="progress-bar color-1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div class="progress-wrap">
                    <h3>JavaScript / jQuery</h3>
                    <div class="progress">
                      <div class="progress-bar color-2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div class="progress-wrap">
                    <h3>HTML5</h3>
                    <div class="progress">
                      <div class="progress-bar color-3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div class="progress-wrap">
                    <h3>CSS3</h3>
                    <div class="progress">
                      <div class="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div class="progress-wrap">
                    <h3>Docker / Kubernetes</h3>
                    <div class="progress">
                      <div class="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div class="progress-wrap">
                    <h3>Photoshop</h3>
                    <div class="progress">
                      <div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-education" data-section="education">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">Education</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">Education</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div class="fancy-collapse-panel">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree of Computer Science</a>
                          </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body">
                            <div class="row">
<table>
<tbody>
  <th>  
    <td>Graduation/Post Graduation</td>
    <td>Specialization</td>
    <td>Month
/Year Of Passing</td>
    <td>College Name</td>
    <td>University Name</td>
    <td>CGPA </td>    
  </th>
  
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
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                          <h4 class="panel-title">
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> High School Secondary Education</a>
                          </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div class="panel-body">
                          <table>
<tbody>
  <th>  
    <td>Institution</td>
    <td>Year of passing</td>        
  </th>
  
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
          <section class="colorlib-experience" data-section="experience">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">Experience</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">Work Experience</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="timeline-centered">
                    <article class="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div class="timeline-entry-inner">
                        <div class="timeline-icon color-1">
                          <i class="icon-pen2"></i>
                        </div>
                        <div class="timeline-label">
                          <h2><a href="#">Full Stack Developer</a> <span>2017-2018</span></h2>
                          <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        </div>
                      </div>
                    </article>
                    <article class="timeline-entry animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                      <div class="timeline-entry-inner">
                        <div class="timeline-icon color-2">
                          <i class="icon-pen2"></i>
                        </div>
                        <div class="timeline-label">
                          <h2><a href="#">Front End Developer at Google Company</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                    <article class="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div class="timeline-entry-inner">
                        <div class="timeline-icon color-3">
                          <i class="icon-pen2"></i>
                        </div>
                        <div class="timeline-label">
                          <h2><a href="#">System Analyst</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                    <article class="timeline-entry animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                      <div class="timeline-entry-inner">
                        <div class="timeline-icon color-4">
                          <i class="icon-pen2"></i>
                        </div>
                        <div class="timeline-label">
                          <h2><a href="#">Creative Designer</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                    <article class="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                      <div class="timeline-entry-inner">
                        <div class="timeline-icon color-5">
                          <i class="icon-pen2"></i>
                        </div>
                        <div class="timeline-label">
                          <h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                      </div>
                    </article>
                    <article class="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                      <div class="timeline-entry-inner">
                        <div class="timeline-icon color-none">
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-work" data-section="work">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">My Work</span>
                  <h2 class="colorlib-heading animate-box fadeInUp animated">Recent Work</h2>
                </div>
              </div>
              <div class="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div class="col-md-12">
                  <p class="work-menu"><span><a href="#" class="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
                </div>
              </div>
             <ul>
             <li>Design web pages</li>
             <li>brochures</li>
             <li>logos</li>
             <li>signs</li>              
             <li>magazine covers</li>
             <li>annual reports</li>
             <li>advertisements and other communication materials.</li>
             </ul>

              <div class="row">
                <div class="col-md-12 animate-box fadeInUp animated">
                  <p><a href="#" class="btn btn-primary btn-sm rounded-0 btn-load-more">Load more <i class="icon-reload"></i></a></p>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-blog" data-section="blog">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">Read</span>
                  <h2 class="colorlib-heading">Recent Blog</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div class="blog-entry">
                    <a href="blog.html" class="blog-img"><img src="images/blog-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                    <div class="desc">
                      <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                      <h3><a href="blog.html">Renovating National Gallery</a></h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div class="blog-entry">
                    <a href="blog.html" class="blog-img"><img src="images/blog-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                    <div class="desc">
                      <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                      <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div class="blog-entry">
                    <a href="blog.html" class="blog-img"><img src="images/blog-3.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                    <div class="desc">
                      <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                      <h3><a href="blog.html">Make website from scratch</a></h3>
                      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 animate-box fadeInUp animated">
                  <p><a href="#" class="btn btn-primary btn-sm rounded-0 btn-load-more">Load more <i class="icon-reload"></i></a></p>
                </div>
              </div>
            </div>
          </section>
          <section class="colorlib-contact" data-section="contact">
            <div class="colorlib-narrow-content">
              <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <span class="heading-meta">Get in Touch</span>
                  <h2 class="colorlib-heading">Contact</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div class="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div class="colorlib-icon">
                      <i class="icon-globe-outline"></i>
                    </div>
                    <div class="colorlib-text">
                      <p><a href="#">vivekvppanneerselvam@gmail.com</a></p>
                    </div>
                  </div>
                  <div class="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div class="colorlib-icon">
                      <i class="icon-map"></i>
                    </div>
                    <div class="colorlib-text">
                      <p>Chennai, India</p>
                    </div>
                  </div>
                  <div class="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div class="colorlib-icon">
                      <i class="icon-phone"></i>
                    </div>
                    <div class="colorlib-text">
                      <p><a href="tel://">+91 9840271370</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-md-push-1">
                  <div class="row">
                    <div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                      <form action="">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Name" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Subject" />
                        </div>
                        <div class="form-group">
                          <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                          <input type="submit" class="btn btn-primary btn-sm rounded-0 btn-send-message" value="Send Message" />
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

export default App;
