import React from "react";
import "fontsource-roboto";
import { fade, withStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import "../contact/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import "react-multi-carousel/lib/styles.css";
import { Fonts, BgColor, Color } from "../../theme/index";
import NotificationBox from "./NotificatinosBox";

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
  mainHeading: {
    fontSize: "20px",
    fontFamily: Fonts.Medium,
  },
  overlayWrapper: {
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    zIndex: "2000",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        {/* <Container maxWidth="xl" className={classes.overlayWrapper}>
          <FormCard />
        </Container> */}
        <Container maxWidth="xl" className={classes.container}>
          <>
            <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
              <Typography className={classes.mainHeading}>
                Notifications
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                paddingTop={0}
                bgcolor="background.paper"
              >
                <NotificationBox />
              </Box>
            </Box>
          </>
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Notifications);
