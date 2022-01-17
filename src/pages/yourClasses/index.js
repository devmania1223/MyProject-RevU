import React from "react";
import Box from "@material-ui/core/Box";
import { Header } from "../../components";
import ClassJoinCard from "./ClassJoinCard";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import OpenedHomeWork from "./OpenedHomeWork";
import SubmitHomework from "./SubmitHomework";
import UnCheckedGradedHomeWork from "./UnCheckedGradedHomeWork";
import OpenedClassPage from "./OpenedClassPage";
import CloseIcon from "@material-ui/icons/Close";
import Container from "@material-ui/core/Container";
import CreateHomeWorkPage from "./CreateHomeWorkPage";
import AddClass from "./AddClass";
import Typography from "@material-ui/core/Typography";
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

class YourClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myClasses: [
        {
          title: "Introduction to Information & Technology",
          description:
            "<b>Science and Medical</b> and 3 others are already members of this group.",
          joined: true,
        },
        {
          title: "Introduction to Information & Technology",
          description:
            "<b>Science and Medical</b> and 3 others are already members of this group.",
          joined: true,
        },
        {
          title: "Introduction to Information & Technology",
          description:
            "<b>Science and Medical</b> and 3 others are already members of this group.",
          joined: true,
        },
      ],
      openedClassPage: false,
      createHomeWorkPage: false,
      openHomework: false,
      submitHomework: false,
      unCheckedGradedHomeWork: false,
      openAssignment: false,
      addClass: false,
    };
  }
  addingClass = () => {
    this.setState({ addClass: !this.state.addClass });
  };
  openClass = () => {
    this.setState({ openedClassPage: !this.state.openedClassPage });
  };

  openCreateHomeWorkPage = () => {
    this.setState({
      createHomeWorkPage: !this.state.createHomeWorkPage,
      openedClassPage: !this.state.openedClassPage,
    });
  };
  openHomework = () => {
    this.setState({
      createHomeWorkPage: false,
      openedClassPage: false,
      openHomework: !this.state.openHomework,
    });
  };
  openSubmitHomework = () => {
    this.setState({
      createHomeWorkPage: false,
      openedClassPage: false,
      openHomework: false,
      submitHomework: !this.state.submitHomework,
    });
  };
  openUnCheckedGradedHomeWork = () => {
    this.setState({
      // createHomeWorkPage: false,
      // openedClassPage: false,
      // openHomework: !this.state.openHomework,
      unCheckedGradedHomeWork: !this.unCheckedGradedHomeWork,
    });
  };
  setOpenAssignment = () => {
    console.log("ghon");
    this.setState({
      openAssignment: !this.openAssignment,
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
    console.log("gh index me", this.state.openAssignment);
    return (
      <>
        <Header history={this.props.history} />
        <Container maxWidth="xl" className={classes.container}>
          <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              {!state.createHomeWorkPage ? (
                <>
                  {!state.openHomework && !state.submitHomework ? (
                    <>
                      {!state.unCheckedGradedHomeWork ? (
                        <Typography className={classes.mainHeading}>
                          My Classes
                        </Typography>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
              {state.openedClassPage && !state.createHomeWorkPage ? (
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={this.openClass}
                />
              ) : (
                ""
              )}
              {!state.openedClassPage && !state.createHomeWorkPage ? (
                <>
                  {!state.openHomework && !state.submitHomework ? (
                    <>
                      {!state.unCheckedGradedHomeWork ? (
                        <Button
                          className={classes.blueButton}
                          onClick={this.addingClass}
                        >
                          ADD CLASS
                        </Button>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </Box>
            {!state.openedClassPage &&
            !state.openHomework &&
            !state.unCheckedGradedHomeWork &&
            !state.submitHomework ? (
              <>
                {!state.createHomeWorkPage ? (
                  <Box
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    paddingTop={0}
                    bgcolor="background.paper"
                  >
                    {this.state.myClasses.map((v, i) => {
                      return (
                        <ClassJoinCard
                          data={v}
                          key={i}
                          openClass={this.openClass}
                        />
                      );
                    })}
                  </Box>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
            {state.openedClassPage ? (
              <OpenedClassPage
                openCreateHomeWorkPage={this.openCreateHomeWorkPage}
                openHomework={this.openHomework}
                openSubmitHomework={this.openSubmitHomework}
              />
            ) : (
              ""
            )}
            {state.openHomework ? (
              <OpenedHomeWork
                openHomework={this.openHomework}
                setOpenAssignment={this.setOpenAssignment}
                openAssignment={state.openAssignment}
              />
            ) : (
              ""
            )}
            {state.submitHomework ? (
              <SubmitHomework openSubmitHomework={this.openSubmitHomework} />
            ) : (
              ""
            )}

            {state.unCheckedGradedHomeWork ? (
              <UnCheckedGradedHomeWork
              // openUnCheckedGradedHomeWork={this.openUnCheckedGradedHomeWork}
              />
            ) : (
              ""
            )}
            {/* <GradedHomeWork /> */}
            {state.createHomeWorkPage ? (
              <>
                <CreateHomeWorkPage
                  openCreateHomeWorkPage={this.openCreateHomeWorkPage}
                />
              </>
            ) : (
              ""
            )}
          </Box>
          {state.addClass ? <AddClass addingClass={this.addingClass} /> : ""}
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(YourClasses);
