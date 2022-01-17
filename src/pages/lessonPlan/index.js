import React from "react";
import FormCard from "./FormCard";
import NewLessonPlan from "./NewLessonPlan";
import PayCard from "./PayCard";
import ReceiptCard from "./ReceiptCard";
import Box from "@material-ui/core/Box";
import { Header } from "../../components";
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import LessonPlanCard from "./LessonPlanCard";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LessonPlanCardView from "./LessonPlanCardView";
import { Fonts, BgColor, Color } from "../../theme/index";
import { withStyles } from "@material-ui/core/styles";
// import "../contact/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const teacher = true;
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

class LessonPlan extends React.Component {
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
      addingNewLessonPlan: false,
      addingNewResource: false,
      payCard: false,
      receiptCard: false,
      confirmationOverlay: false,
    };
  }
  open = (toBeOpened) => {
    this.setState({
      [toBeOpened]: !this.state[toBeOpened],
    });
  };
  closeAddingNewLessonPlan = () => {
    this.setState({
      addingNewLessonPlan: !this.state.addingNewLessonPlan,
    });
  };
  closeAddingNewResource = () => {
    this.setState({
      addingNewResource: !this.state.addingNewResource,
    });
  };
  openLessonPlan = () => {
    this.setState({
      openLessonPlan: !this.state.openLessonPlan,
    });
  };
  openPayCard = () => {
    this.setState({
      payCard: !this.state.payCard,
    });
  };
  openReceiptCard = () => {
    this.setState({
      receiptCard: !this.state.receiptCard,
    });
  };
  openConfirmationOverlay = () => {
    this.setState({
      confirmationOverlay: !this.state.confirmationOverlay,
    });
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

        {state.payCard ? (
          <Container maxWidth="xl" className={classes.overlayWrapper}>
            <PayCard
              openPayCard={this.openPayCard}
              openReceiptCard={this.openReceiptCard}
            />
          </Container>
        ) : (
          ""
        )}
        {state.receiptCard ? (
          <Container maxWidth="xl" className={classes.overlayWrapper}>
            <ReceiptCard openReceiptCard={this.openReceiptCard} />
          </Container>
        ) : (
          ""
        )}

        {state.addingNewLessonPlan ? (
          <Container maxWidth="xl" className={classes.overlayWrapper}>
            <FormCard
              closeAddingNewLessonPlan={this.closeAddingNewLessonPlan}
            />
          </Container>
        ) : (
          ""
        )}
        {state.addingNewResource ? (
          <Container maxWidth="xl" className={classes.overlayWrapper}>
            <NewLessonPlan
              closeAddingNewResource={this.closeAddingNewResource}
            />
          </Container>
        ) : (
          ""
        )}

        <Container maxWidth="xl" className={classes.container}>
          {state.openLessonPlan ? (
            <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
              <LessonPlanCardView
                openPayCard={this.openPayCard}
                openLessonPlan={this.openLessonPlan}
              />
            </Box>
          ) : (
            <>
              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Typography className={classes.mainHeading}>
                    {teacher ? "My Lesson Plans" : "My Resources"}
                  </Typography>
                  <Button
                    className={classes.blueButton}
                    onClick={() =>
                      this.open(
                        teacher ? "addingNewLessonPlan" : "addingNewResource"
                      )
                    }
                  >
                    {teacher ? " ADD LESSON PLAN" : " ADD Resource"}
                  </Button>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  paddingTop={0}
                  bgcolor="background.paper"
                >
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                    confirmationOverlay={state.confirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                </Box>
              </Box>

              <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
                <Typography className={classes.mainHeading}>
                  {teacher ? "Lesson Plans By Others" : "Resources By Others"}
                </Typography>

                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  paddingTop={0}
                  bgcolor="background.paper"
                >
                  {/* {state.LessonPlansByOthers.map((value, index) => {
                    return <LessonPlanCard key={index} data={value} />;
                  })} */}
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                  <LessonPlanCard
                    openLessonPlan={this.openLessonPlan}
                    openConfirmationOverlay={this.openConfirmationOverlay}
                  />
                </Box>
              </Box>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LessonPlan);
