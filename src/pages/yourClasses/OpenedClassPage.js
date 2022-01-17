import React from "react";
import "fontsource-roboto";
import { Fonts, BgColor, Color } from "../../theme/index";
import { fade, withStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";
// import "../contact/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import ClassJoinCard from "./ClassJoinCard";
import CurrentlyEnrolledCard from "./CurrentlyEnrolledCard";
import CurrentHomeWorkSection from "./CurrentHomeWorkSection";
import HomeWorkSection from "./HomeWorkSection";
import { makeStyles } from "@material-ui/core/styles";
import { profileImg1, profileImg2, profileImg3 } from "../../assets/index";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    transition: "0.3s",
    position: "relative",
    border: "4px solid green",
    // "&:before": {
    //   transition: "0.2s",
    //   position: "absolute",
    //   width: "100%",
    //   height: "100%",
    //   content: '""',
    //   display: "block",
    //   backgroundColor: "#d9daf1",
    //   borderRadius: "1rem",
    //   zIndex: 0,
    //   bottom: 0,
    // },
    "&:hover": {
      // "&:before": {
      //   bottom: -6,
      // },
      // "& $card": {
      //   boxShadow: "-12px 12px 64px 0 #bcc3d6",
      // },
    },
  },
  card: {
    zIndex: 1,
    position: "relative",
    borderRadius: "10px",
    // boxShadow: "0 6px 20px 0 #dbdbe8",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    transition: "0.3s",
    // height: "100%",
    padding: "16px",

    "&:hover": {
      // boxShadow: "none !important",
      // border: "0 !important",
    },
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: "0.75rem",
  },
  avatar: {
    fontSize: "0.875rem",
    backgroundColor: "#6d7efc",
  },
  join: {
    color: "#fff",
    borderRadius: "50px",
    // backgroundColor: "#a4c4f9",
    backgroundColor: BgColor.myBlue,
    // background: "linear-gradient(to top, #638ef0, #82e7fe)",
    "& > *": {
      textTransform: "none !important",
    },
    "&:hover": {
      backgroundColor: "#689CF2",
    },
  },
  danger: {
    color: "#fff",
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    borderRadius: "50px",
    backgroundColor: "#F48FB1",
    "& > *": {
      textTransform: "none !important",
    },
    "&:hover": {
      backgroundColor: "#ff266f",
    },
  },
  profileImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
  },
  table: {
    maxWidth: "600px",
    fontFamily: Fonts.Regular,
    "& tr th": {
      fontSize: "18px",
      padding: "20px 0",
    },
    "& tr td": {
      fontSize: "14px",
      opacity: ".8",
    },
    marginTop: "20px",
    textAlign: "left",
  },
  LightText: {
    color: BgColor.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: 0.25,
  },
  mainHeading: {
    fontSize: "20px",
    fontFamily: Fonts.Medium,
    opacity: ".8",
  },
  currentHomeWorkDiv: {
    width: "100%",
    maxWidth: "600px",
    zIndex: 1,
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    transition: "0.3s",
    "& .header": {
      backgroundColor: BgColor.myBlue,
      padding: "12px 20px",
    },
    "& .body": {
      padding: "12px 20px",
    },
  },
  dateTitle: {
    color: Color.textBlack,
    fontSize: "12px",
    fontFamily: Fonts.Regular,
    textAlign: "center",
    opacity: ".6",
    padding: "0",
    margin: "0",
    marginBottom: "3px",
  },
  dueDate: {
    color: "#fff",
    fontFamily: Fonts.Regular,
    opacity: ".8",
    padding: "0",
    margin: "0",
    marginBottom: "-5px",
  },
  daysLeft: {
    color: "#fff",
    fontFamily: Fonts.Regular,
    opacity: "1",
    padding: "0",
    margin: "0",
  },
  smallerTitle: {
    fontSize: "12px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    opacity: ".6",
    padding: "5px 0 0 0",
    margin: "0",
  },
  normalText: {
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    padding: "0 0 5px 0",
    margin: "0",
  },
  submissionText: {
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: ".6",
    padding: "15px 0",
    margin: "0",
  },
  bluLink: {
    color: Color.textBlue,
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "15px 0",
    margin: "0",
    transition: "all .3s ease",
    "&:hover": {
      opacity: ".7",
    },
  },
  blueButton: {
    color: "#fff",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: BgColor.myBlue,
    padding: "0 20px",
    "&:hover": {
      color: Color.textBlue,
      border: "1px solid" + Color.textBlue,
    },
  },
}));

class YourClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "Khursheed",
          profilePicture: profileImg1,
        },
        {
          name: "Noshad",
          profilePicture: profileImg2,
        },
        {
          name: "Ikram",
          profilePicture: profileImg3,
        },
        {
          name: "Faraz",
          profilePicture: profileImg1,
        },
        {
          name: "Shahid",
          profilePicture: profileImg2,
        },
        {
          name: "Khursheed",
          profilePicture: profileImg3,
        },
        {
          name: "Noshad",
          profilePicture: profileImg1,
        },
      ],
    };
  }

  render() {
    const { classese } = this.props;
    const state = this.state;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            transition: "0.3s",
            position: "relative",
            padding: "10px  0",
            marginTop: "10px",
          }}
        >
          <CurrentlyEnrolledCard students={state.students} />
          <CurrentHomeWorkSection
            openCreateHomeWorkPage={this.props.openCreateHomeWorkPage}
            openHomework={this.props.openHomework}
            openSubmitHomework={this.props.openSubmitHomework}
          />
          <HomeWorkSection openHomework={this.props.openHomework} />
        </div>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(YourClasses);
