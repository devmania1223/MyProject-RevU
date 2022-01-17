import React, { Component } from "react";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import logo1 from "../../assets/images/logo/favicon.png";
import university from "../../assets/images/university.jpg";
import student from "../../assets/images/student.jpg";
import teacher from "../../assets/images/teacher.jpg";
import testimonal from "../../assets/css/images/testimon.png";
import { Fade, Flip, Zoom } from "react-reveal";
import fivePerson from "../../assets/images/slider-images/5person.jpg";
import {
  Container,
  Button,
  TextField,
  Box,
  Grid,
  Card,
  Typography,
  Input,
  Menu,
  MenuItem,
} from "@material-ui/core";

export default class MainPage2 extends Component {
  constructor() {
    super();
    this.state = {
      menuForMob: false,
      openLangOptions: true,
      menuForSmall: false,
    };
  }

  handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  handleClose = () => {
    // setAnchorEl(null);
  };
  toggleMenuForMob = () => {
    this.setState({ menuForMob: !this.state.menuForMob });
  };
  toggleThis = (toggleThis) => {
    this.setState({ [toggleThis]: !this.state[toggleThis] });
  };
  openLangOptions = () => {
    this.setState({ openLangOptions: !this.state.openLangOptions });
  };
  render() {
    const state = this.state;
    return (
      <body id="home_page" className="home_page">
        {/* <!-- header --> */}
        <header className="header">
          <div className="header_top_section">
            <div className="header-container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="full">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo1} alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 site_information">
                  <div className="full">
                    <div className="main_menu">
                      <nav className="navbar navbar-inverse navbar-toggleable-md">
                        <button
                          className="navbar-toggler"
                          type="button"
                          onClick={() => this.toggleThis("menuForSmall")}
                        >
                          <i className="fa fa-bars"></i>
                          <i className="fa fa-close"></i>
                        </button>

                        <div
                          className=" navbar-collapse justify-content-md-center"
                          id="cloapediamenu"
                          style={{
                            display: state.menuForSmall ? "block" : "none",
                          }}
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item active">
                              <a className="nav-link" href="index.html">
                                BEIJING BLUE CUBE TECHNOLOGY
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link color-aqua-hover"
                                href="about.html"
                              >
                                HOME
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link color-aqua-hover"
                                href="coaching.html"
                              >
                                ENGLISH TUTORING
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link color-grey-hover"
                                href="time.html"
                              >
                                ABOUT
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link color-grey-hover"
                                href="contact.html"
                              >
                                CONTACT US
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link color-grey-hover"
                                href="contact.html"
                              >
                                REGISTER
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link color-grey-hover"
                                href="contact.html"
                              >
                                Login
                              </a>
                            </li>
                            <li>
                              <div style={{ width: "90px", margin: "0 auto" }}>
                                <Button
                                  aria-controls="simple-menu"
                                  aria-haspopup="true"
                                  // className={styles.fontRegular}
                                  style={{
                                    color: "#fff",
                                    borderRadius: "5px",
                                    border: "1px solid #fff",
                                  }}
                                  onClick={this.openLangOptions}
                                >
                                  Language
                                </Button>

                                {!state.openLangOptions ? (
                                  <div className="dropdownDiv">
                                    <ul>
                                      <li>
                                        <a href="#">Chinese</a>
                                      </li>
                                      <li>
                                        <a href="#">English</a>
                                      </li>
                                    </ul>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- end header --> */}

        {/* <!-- section --> */}
        <section className="main_full banner_section_top">
          <div className="container-fluid">
            <div className="row">
              <div className="full">
                <div className="slider_banner">
                  <img className="img-responsive" src={fivePerson} alt="#" />
                  <div className="slide_cont">
                    <div className="slider_cont_inner">
                      <Fade top duration={2000}>
                        <h3>
                          Welcome To{" "}
                          <span className="text-my-blue">i-revu</span>
                        </h3>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end section --> */}

        {/* <!-- about section --> */}
        <section className="layout_padding section about_dottat">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text_align_center">
                <div className="full heading_s1">
                  <Flip top duration={2000}>
                    <h2>Features</h2>
                  </Flip>
                </div>
                <div className="full">
                  <Fade bottom duration={2000}>
                    <p className="large">
                      Perfect Homework (i-Rervu) is a website and application
                      where teachers can solve the problems of assigning and
                      correcting students' homework in one stop. At the same
                      time, it also provides students with opportunities to
                      communicate and discuss with teachers and classmates to
                      help them solve academic problems together.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>

            <div className="row pb-4 uni-teacher-student">
              <div className="col-md-4">
                <div className="cours">
                  <Zoom duration={2000}>
                    <img
                      className="img-responsive threePictures"
                      src={university}
                      alt="#"
                    />
                  </Zoom>
                </div>
                <Fade left duration={2000}>
                  <h3>University</h3>
                  <ul
                  // style={{ padding: "0 15px" }}
                  >
                    <li>
                      Provide teachers with tools for efficient management of
                      schoolwork, improve academic and teaching efficiency,
                      thereby saving time and money.
                    </li>
                    <li>
                      Eliminate trivial matters (such as management homework,
                      etc.) to improve teachers' teaching enthusiasm.
                    </li>
                    <li>
                      Teachers don’t need to explain to students about
                      performance evaluation and homework management. A small
                      subscription fee can save a lot of time and money.
                    </li>
                    <li>
                      Faculty and staff can focus more on important research
                      work, and the academic research capabilities of
                      universities will be greatly improved.
                    </li>
                    <li>
                      Automated return of homework, teachers do not need to send
                      separate e-mails to each student, and do not need to
                      manage homework (83% of the faculty interviewed said that
                      this tool is urgently needed).
                    </li>
                    <li>
                      The professors' time is extremely valuable, especially
                      during their participation in major projects. They deal
                      with a large number of complicated tasks and cause the
                      school to lose more than 1,000 hours each year (time is
                      money) that could be used for academic research. If there
                      are 50,000 professors in China who spend 1 hour each month
                      on organizing and managing homework and other matters, the
                      entire teacher group will lose 50,000 hours per month (5
                      years), 20 million (assuming an hourly salary of 200 yuan)
                      .
                    </li>
                    <li>
                      <a href="#">
                        <strong>Contact us for</strong>
                      </a>
                      consultation...
                    </li>
                  </ul>
                </Fade>
              </div>

              <div className="col-md-4 text_align_center">
                <div className="cours">
                  <Zoom duration={2000}>
                    <img
                      className="img-responsive threePictures"
                      src={student}
                      alt="#"
                    />
                  </Zoom>
                </div>
                <Fade top duration={2000}>
                  <h3>Teacher</h3>
                  <ul>
                    <li>
                      It is very convenient to send and receive homework or
                      reports, saving the time and paper consumption of sending
                      and receiving homework.
                    </li>
                    <li>
                      Efficiently collect students’ homework and assign them to
                      relevant teachers (no need to manually collect homework or
                      cause homework to be lost).
                    </li>
                    <li>
                      Provide teachers with tools for management and correction
                      of homework, and provide guarantee for work convenience
                      and efficiency.
                    </li>
                    <li>
                      Automated return of homework, teachers do not need to send
                      separate emails to each student, nor do they need to
                      manage homework (83% of the faculty interviewed said that
                      this tool is urgently needed)
                    </li>
                    <li>
                      Teachers can get extra pay for answering questions for
                      students.
                    </li>
                    <li>Improve the quality of life.</li>
                    <li>
                      <a href="#">
                        <strong>Sign up </strong>
                      </a>
                      for more information
                    </li>
                  </ul>
                </Fade>
              </div>

              <div className="col-md-4 text_align_center">
                <div className="cours">
                  <Zoom duration={2000}>
                    <img
                      className="img-responsive threePictures"
                      src={teacher}
                      alt="#"
                    />
                  </Zoom>
                </div>
                <Fade right duration={2000}>
                  <h3>Student</h3>
                  <ul>
                    <li>
                      The winner of the highest monthly score will win a cash
                      prize.
                    </li>
                    <li>Answer the questions to get points and rewards.</li>
                    <li>
                      Provide students with a platform for sharing knowledge
                      between students and students, teachers and students, and
                      enhancing academic ability.
                    </li>
                    <li>
                      Provide a high-quality, inexpensive, flexible and
                      real-time solution to meet the needs of students.
                    </li>
                    <li>
                      Professional English learning platform, such as IELTS,
                      TOEFL, English professional test, level 4 and 6 etc.
                    </li>
                    <li>
                      Scientific research shows that teaching others knowledge
                      is the best way to learn and enhance long-term memory.
                    </li>
                    <li>
                      Encourage students to share resources and continuously
                      improve themselves instead of comparing themselves with
                      others. Scientific research shows that helping others can
                      increase self-confidence and motivation.
                    </li>
                    <li>More features...</li>
                    <li>
                      <a href="#">
                        <strong>Sign up </strong>
                      </a>
                      for more information
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>

            <div className="row pt-4">
              {/* <div className="col-lg-12 text_align_center">
                <div className="full heading_s1">
                  <h2>Our Success Stories</h2>
                </div>
                <div className="full">
                  <p className="large">
                    In ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo
                    <br />
                    consequat. Duis aute irure dolor in re
                  </p>
                </div>
              </div> */}
              <div className="col-md-12 testimonial">
                {/* <div className="full text_align_center">
                  <img src={testimonal} alt="#" />
                  <h3>
                    <span className="theme_color_text">koluda</span>
                    <br />
                    <small>Student</small>
                  </h3>
                </div> */}
                <div className="full margin_top_30 text_align_center other-benefits">
                  <Flip top duration={2000}>
                    <h4>Other Benefits</h4>
                  </Flip>
                  <Flip left duration={2000}>
                    <ul>
                      <li>
                        In addition, our platform can vigorously promote the
                        digital management of university archives, such as
                        exam/course archives, thereby saving a lot of paper,
                        space, money, and time.
                      </li>
                      <li>
                        Students will get better development, get better grades
                        and education, and ultimately promote economic and
                        social development.
                      </li>
                      <li>Promote environmental protection.</li>
                      <li>
                        Social responsibility-10% of net profit will be used for
                        charity (determined by members' vote).
                      </li>
                    </ul>
                  </Flip>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end section --> */}

        {/* <!-- footer --> */}
        <footer className="footer layout_padding" duration={2000}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <a href="index.html">
                  <img className="img-responsive" src={logo1} alt="#" />
                </a>
                <div className="footer_menu margin_top_30">
                  <ul style={{ textAlign: "center" }}>
                    <li>Beijing Blue Cube Technology Co., Ltd.</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="footer_link_heading">
                      <h3>Table of Content</h3>
                    </div>
                    <div className="footer_menu">
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">English Tutoring</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Agreement Terms</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="footer_link_heading">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="footer_menu">
                      <ul>
                        <li> enquiries@irevu.org</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cpy">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Copyright @ 2019, i-revu. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end footer --> */}
      </body>
    );
  }
}
