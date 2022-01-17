import React from "react";
import "fontsource-roboto";
import { fade, withStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TopCard from "./topCards";
import GraphCards from "./graphCards";
import ClassJoinCard from "../yourClasses/ClassJoinCard";
import ResourceCard from "./ResourceCard";
import { Fonts, Color } from "../../theme/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  bigHeading: {
    fontSize: "1.5rem",
    fontFamily: Fonts.Medium,
    opacity: ".8",
  },
  smallGrayTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: "12px",
    fontFamily: Fonts.Medium,
    opacity: "0.5",
  },
  smallerTitle: {
    fontSize: "12px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    // opacity: ".6",
    padding: "5px 0 0 0",
    margin: "0",
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
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    // console.log("this.props.history from dashboard",this.props.history);
    return (
      <>
        <Header history={this.props.history} />
        <Container maxWidth="xl" className={classes.container}>
          <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
            <Typography
              variant="h5"
              component="h5"
              className={classes.bigHeading}
              style={{ marginBottom: "-5px" }}
            >
              Good Morning, Fawad Mahmood Siddiqui.{" "}
            </Typography>
            <Typography
              variant="caption"
              color="primary"
              className={classes.smallGrayTitle}
            >
              Firday, 21 July 2019, Hope you have a great day.
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              paddingTop={0}
              bgcolor="background.paper"
            >
              <GraphCards />
              <GraphCards />
              <GraphCards />
              <GraphCards />
            </Box>

            <Box paddingTop={1} bgcolor="background.paper">
              <Typography
                variant="h5"
                component="h5"
                className={classes.mainHeading}
                style={{ marginBottom: "-5px" }}
              >
                Top Performant Teachers
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                className={classes.smallGrayTitle}
              >
                Teachers Provided Best Support
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                paddingTop={0}
                bgcolor="background.paper"
              >
                {/* <TopCard /> */}
                <TopCard />
                <TopCard />
                <TopCard />
                <TopCard />
                <TopCard />
              </Box>
            </Box>

            <Box paddingTop={1} bgcolor="background.paper">
              <Typography
                variant="h5"
                component="h5"
                className={classes.mainHeading}
                style={{ marginBottom: "-5px" }}
              >
                Top Performant Students
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                className={classes.smallGrayTitle}
              >
                Hiring Students can save upto 20%
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                paddingTop={0}
                bgcolor="background.paper"
              >
                {/* <TopCard /> */}
                <TopCard />
                <TopCard />
                <TopCard />
                <TopCard />
              </Box>
            </Box>

            <Box paddingTop={2} bgcolor="background.paper">
              <Typography
                variant="h5"
                component="h5"
                className={classes.mainHeading}
                style={{ marginBottom: "-5px" }}
              >
                Class Join Invitations
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                className={classes.smallGrayTitle}
              >
                Respond so you can track of your assignments.
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                paddingTop={0}
                bgcolor="background.paper"
              >
                <ClassJoinCard />
                <ClassJoinCard
                // openClass={this.openClass}
                />
              </Box>
            </Box>

            <Box paddingTop={4} bgcolor="background.paper">
              <Typography
                variant="h5"
                component="h5"
                className={classes.mainHeading}
                style={{ marginBottom: "-5px" }}
              >
                New Resouces Uploaded
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                className={classes.smallGrayTitle}
              >
                Respond so you can track of your assignments.
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                paddingTop={0}
                bgcolor="background.paper"
              >
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
              </Box>
            </Box>
          </Box>
        </Container>
      </>
      //    <Grid container spacing={3}>
      //         {/* */}
      //         <Grid className={classes.paper} item xs={12}>

      //         </Grid>
      //    </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
