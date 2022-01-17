import React from "react";
import "fontsource-roboto";
import Box from "@material-ui/core/Box";
import { Header } from "../../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import ReferralLinkDiv from "./ReferralLinkDiv";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Fonts, BgColor, Color } from "../../theme/index";
import { fade, withStyles } from "@material-ui/core/styles";
// import "../contact/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const styles = (theme) => ({
  container: {
    alignSelf: "flex-end",
    paddingLeft: 250,
    paddingTop: 70,
    paddingBottom: 20,
  },
  root: {
    maxWidth: 345,
    marginTop: 10,
    marginRight: 10,
  },
  media: {
    height: 140,
  },
  mainHeading: {
    fontSize: "20px",
    fontFamily: Fonts.Medium,
  },
});

class ReferralLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LessonPlansByOthers: [
        {
          standard: "pre-intermediate",
          title: "Fundamental of Programming",
          description:
            "Write an essay on Earchquake for 560 five hundred and sixtywords.",
          ownLessonPlan: true,
          price: "110",
        },
        {
          standard: "post-graduate",
          title: "Data Analysis",
          description:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
          ownLessonPlan: true,
          price: "95",
        },
        {
          standard: "under-graduate",
          title: "Statistics",
          description:
            "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..",
          ownLessonPlan: false,
          price: "50",
        },
        {
          standard: "pre-intermediate",
          title: "Fundamental of Programming",
          description:
            "Write an essay on Earchquake for 560 five hundred and sixtywords.",
          ownLessonPlan: true,
          price: "110",
        },
        {
          standard: "post-graduate",
          title: "Data Analysis",
          description:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
          ownLessonPlan: true,
          price: "95",
        },
        {
          standard: "under-graduate",
          title: "Statistics",
          description:
            "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..",
          ownLessonPlan: false,
          price: "50",
        },
      ],
      openLessonPlan: false,
    };
  }

  render() {
    const { classes } = this.props;
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
        <Header history={this.props.history} />
        <Container maxWidth="xl" className={classes.container}>
          <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
            <ReferralLinkDiv />
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ReferralLink);
