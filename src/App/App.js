// src/App/App.js

//dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//styles
import './App.css';

//views
import About from './views/About/About.js';
import Contact from './views/Contact/Contact.js';
import Home from './views/Home/Home.js';

//images
import background from './images/background.jpg';
import profile from './images/profile.jpg';
import bitclock from './images/bitclock.png';


const App = () => {
    return (
        <div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
            </Switch>

            <div className="cf index" id="top">

                <header className="header-container">
                    <img src={background} id="background" alt="background" />
                    <div className="default" id="header">
                        <div className="container container-top">

                            <div className="brand">
                                <div className="info">
                                    <div className="name">ERIC IZANT</div>
                                    <div className="title">FULL-STACK WEB DEVELOPER</div>
                                </div>
                            </div>

                            <div className="pull-right">
                                <nav id="nav">
                                    <ul className="nav-default">
                                        <li>
                                            <a href="#top" className="active">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#projects" className="">PROJECTS</a>
                                        </li>
                                        <li>
                                            <a href="#contact">CONTACT</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </header>

            </div>

            <div id="row-hero">
                <div className="container">
                    <div className="buffer-top" id="hero">
                        <h1 className="fadein-fast">Front-end Web Developer.</h1>
                        <p className="fadein-fast">
                            Based out of Salt Lake City, UT. Specializing in both front and back-end web development. If you are a business seeking a
                            web presence or an employer looking to hire, you can get in touch with me
                            <a href="#contact">here</a>.
                        </p>
                        <div className="callToAction">
                            <a href="http://goo.gl/forms/gYi9a11a7U" className="btn btn-freelance">
                                I need a website
                                <span className="icon-chevron-right"></span>
                            </a>
                            <a href="#contact" className="btn btn-hire">
                                I'm looking to hire
                                <span className="icon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="projects">
                <div className="row">
                    <div className="container">
                        <div className="cf portfolio-item">
                            <div className="portfolio-col screenshot">
                                <img alt="V School" src="img/hal-con.jpg" />
                            </div>
                            <div className="portfolio-col description-container">
                                <h3>
                                    <a href="http://vschool.io/">V School</a>
                                </h3>
                                <p className="description">V School is one of the world's leading coding bootcamps.</p>
                                <ul className="skills">
                                    <li>Full-Stack Web Development</li>
                                    <li>Coding Bootcamps</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                </div>
            </div>

            <div id="projects">
                <div className="row">
                    <div className="container">
                        <div className="cf portfolio-item">
                            <div className="portfolio-col screenshot">
                                <img src={bitclock} alt="BitClock" />
                            </div>
                            <div className="portfolio-col description-container">
                                <h3>
                                    <a href="https://bitclock.herokuapp.com/">BitClock</a>
                                </h3>
                                <p className="description">A simple mobile app for tracking realtime pricing updates on Bitcoin, Ethereum, and LiteCoin.</p>
                                <ul className="skills">
                                    <li>React</li>
                                    <li>Crypto</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                </div>
            </div>

            <div className="row" id="contactMap">
                <div className="map-offset">
                    <div id="map-canvas">
                        <div className="gm-style"></div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="row">
                    <div className="container">

                        <div className="center span4">
                            <img src={profile} id="profile" alt="profile" />
                            <div className="details">
                                <a href="tel:9027197079" className="details-small">+1 (902) 719-7079</a>
                            </div>
                            <div id="social">
                                <a href="http://github.com/ericizant">
                                    <span className="icon-github">
                                    </span>
                                </a>
                                <a href="skype:ericizant?chat">
                                    <span className="icon-skype">
                                    </span>
                                </a>
                                <a href="http://linkedin.com/in/ericizant">
                                    <span className="icon-linkedin">
                                    </span>
                                </a>
                                <a href="mailto:ericizant@gmail.com">
                                    <span className="icon-email">
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="span8" id="contact">
                            <form action="mailer.php" id="contact-form" method="post" name="contact-form">
                                <div className="buffer-bottom">
                                    <input type="text" name="name" placeholder="Name" required="" id="field1" />
                                    <input type="email" name="email" placeholder="Email" required="" />
                                    <input type="text" name="phone" placeholder="Phone" required="" />
                                </div>
                                <div className="buffer-bottom">
                                    <textarea className="message" name="message" placeholder="Message" required="" rows="6"></textarea>
                                </div>
                                <span id="submit-response"></span>
                                <div className="pull-right">
                                    <input type="submit" className="button" value="send" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="center" id="links">
                <ul>
                    <li>© ericizant@gmail.com 2018 </li>
                    <li>
                        <a href="http://github.com/ericizant">GITHUB</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default App;
