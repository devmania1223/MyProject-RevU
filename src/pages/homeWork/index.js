import React from "react";
import "fontsource-roboto";
import { fade, withStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ClassJoinCard from "./ClassJoinCard";
import HomeWorkCard from "./HomeWorkCard";
import { Fonts, BgColor, Color } from "../../theme/index";

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

class HomeWork extends React.Component {
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
            <Typography className={classes.mainHeading}>Homework</Typography>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              paddingTop={0}
              bgcolor="background.paper"
            >
              <HomeWorkCard />
              <HomeWorkCard />
              <HomeWorkCard />
              <HomeWorkCard />
              <HomeWorkCard />
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HomeWork);
