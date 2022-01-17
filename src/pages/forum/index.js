import React from "react";
import "fontsource-roboto";
import { fade, withStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import { BgColor, Color, Fonts } from "../../theme/index";
import { withRouter } from "react-router-dom";
// import { Carousel } from 'react-responsive-carousel';
// import "../contact/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import QuestionCard from "./QuestionCard";
import AskQuestion from "./AskQuestion";

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
    opacity: ".8",
  },
  blueButton: {
    color: "#fff",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: BgColor.myBlue,
    border: "1px solid transparent",
    padding: "0 20px",
    "&:hover": {
      color: Color.textBlue,
      border: "1px solid" + Color.textBlue,
    },
  },
});

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myQuestions: [
        {
          avatar: "R",
          name: "Shrimp and Chorizo Paella",
          date: "August 20, 2017",
          question:
            "Why does impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.?",
        },
        {
          avatar: "S",
          name: "Chorizo and Shrimp",
          date: "September 14, 2016",
          question:
            "Why does cook together with your guests. Add 1 cup of frozen peas along with the mussels, impressive paella is a perfect party dish and a fun meal to be ?",
        },
        {
          avatar: "R",
          name: "Shrimp and Chorizo Paella",
          date: "August 20, 2017",
          question:
            "Why does impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.?",
        },
        {
          avatar: "S",
          name: "Chorizo and Shrimp",
          date: "September 14, 2016",
          question:
            "Why does cook together with your guests. Add 1 cup of frozen peas along with the mussels, impressive paella is a perfect party dish and a fun meal to be ?",
        },
      ],
      newQuestions: [
        {
          avatar: "R",
          name: "Shrimp and Chorizo Paella",
          date: "August 20, 2017",
          question:
            "Why does impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.?",
        },
        {
          avatar: "S",
          name: "Chorizo and Shrimp",
          date: "September 14, 2016",
          question:
            "Why does cook together with your guests. Add 1 cup of frozen peas along with the mussels, impressive paella is a perfect party dish and a fun meal to be ?",
        },
      ],
      currentQuestions: [
        {
          avatar: "R",
          name: "Shrimp and Chorizo Paella",
          date: "August 20, 2017",
          question:
            "Why does impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.?",
        },
      ],
      askQuestion: false,
    };
  }
  toggleAskQuestion = () => {
    this.setState({ askQuestion: !this.state.askQuestion });
  };

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
          {!state.askQuestion ? (
            <>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="h5"
                    component="h5"
                    className={classes.mainHeading}
                  >
                    Current
                  </Typography>
                  <Button
                    className={classes.blueButton}
                    onClick={this.toggleAskQuestion}
                  >
                    Ask a Question
                  </Button>
                </Box>

                <Carousel responsive={responsive}>
                  {state.currentQuestions.map((index, value) => {
                    return <QuestionCard data={value} />;
                  })}
                </Carousel>
              </Box>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.mainHeading}
                >
                  New
                </Typography>
                <Carousel responsive={responsive}>
                  {state.newQuestions.map((index, value) => {
                    return <QuestionCard data={value} />;
                  })}
                </Carousel>
              </Box>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.mainHeading}
                >
                  My Questions
                </Typography>
                <Carousel responsive={responsive}>
                  {state.myQuestions.map((index, value) => {
                    return <QuestionCard data={value} />;
                  })}
                </Carousel>
              </Box>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.mainHeading}
                >
                  Unanswered
                </Typography>
                <Carousel responsive={responsive}>
                  {state.myQuestions.map((index, value) => {
                    return <QuestionCard data={value} />;
                  })}
                </Carousel>
              </Box>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.mainHeading}
                >
                  Answered
                </Typography>
                <Carousel responsive={responsive}>
                  {state.myQuestions.map((index, value) => {
                    return <QuestionCard data={value} />;
                  })}
                </Carousel>
              </Box>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Typography
                  variant="h5"
                  component="h5"
                  className={classes.mainHeading}
                >
                  Forum Questions
                </Typography>
                <Carousel responsive={responsive}>
                  {/* <Box
                  display="flex"
                  flexWrap="wrap"
                  p={0}
                  m={0}
                  bgcolor="background.paper"
                > */}
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  <QuestionCard />
                  {/* </Box> */}
                </Carousel>
              </Box>
            </>
          ) : (
            <AskQuestion toggleAskQuestion={this.toggleAskQuestion} />
          )}
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Forum);
