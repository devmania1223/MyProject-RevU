import React, { Fragment, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { BgColor, Color, Fonts } from "../../theme/index";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  Grid,
  Box,
  TextField,
  Button,
  Card,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainHeading: {
    fontSize: "20px",
    fontFamily: Fonts.Medium,
    opacity: ".8",
  },
  smallestBlueTitle: {
    color: Color.textBlue,
    fontSize: "13px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
  },
  smallText: {
    color: BgColor.myBlack,
    fontSize: "16px",
    fontFamily: Fonts.Regular,
  },
  overlayWrapper: {
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    zIndex: "2000",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainHeading2: {
    fontSize: "25px",
    fontFamily: Fonts.Medium,
  },
  shareCodeText: {
    color: Color.myBlack,
    fontSize: "18px",
    fontFamily: Fonts.Medium,
    textTransform: "uppercase",
    textAlign: "center",
  },
  whiteOutlinedButton: {
    width: "100%",
    height: "40px",
    color: Color.textBlue,
    fontFamily: Fonts.Medium,
    borderRadius: "5px",
    backgroundColor: "#fff",
    border: "2px solid " + BgColor.myBlue,
    padding: "0 20px",
    margin: "5px 0",
  },
  TextFields: {
    width: "100%",
  },
  blueButton: {
    color: "#fff",
    height: "40px",
    lineHeight: "48px",
    borderRadius: "5px",
    fontFamily: Fonts.Medium,
    cursor: "pointer",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: BgColor.myBlue,
    padding: "0 20px",
    "&:hover": {
      color: Color.textBlue,
      border: "1px solid" + Color.textBlue,
    },
  },
}));

const WhiteCard = ({ dropdown, label, textArea, func }) => {
  const styles = useStyles();
  return (
    <>
      <Card
        style={{
          maxWidth: "600px",
          width: "600px",
          borderRadius: "10px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        <Box style={{ padding: "26px" }}>
          {/* <Box className={styles.smallestBlueTitle}>{heading}</Box> */}
          {/* <Box className={styles.smallText}>{textContent}asdf</Box> */}
          {dropdown ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={func}
            >
              <Box className={styles.smallestBlueTitle}>{label}</Box>
              <ArrowDropDownIcon style={{ color: Color.textBlue }} />
            </Box>
          ) : (
            <>
              {!textArea ? (
                <TextField
                  id="outlined-basic"
                  label={label}
                  variant="outlined"
                  className={styles.TextFields}
                />
              ) : (
                <TextField
                  id="outlined-multiline-static"
                  label={label}
                  multiline
                  rows={4}
                  // defaultValue="Lesson Plan Text"
                  variant="outlined"
                  className={styles.TextFields}
                />
              )}
            </>
          )}
        </Box>
      </Card>
    </>
  );
};

const WhitBox = ({ openCreateHomeWorkPage }) => {
  const styles = useStyles();
  const [addCourseID, setAddCourseID] = useState(false);
  const [deadLineDiv, setDeadLineDiv] = useState(false);
  const showCourseIDdiv = () => {
    setAddCourseID(!addCourseID);
  };
  const showDeadLineDiv = () => {
    setDeadLineDiv(!deadLineDiv);
  };

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            className={styles.mainHeading}
            style={{ margin: "15px 0" }}
          >
            Create a Homework
          </Typography>
          <CloseIcon
            style={{ color: Color.textBlue, cursor: "pointer" }}
            onClick={openCreateHomeWorkPage}
          />
        </Box>
        <WhiteCard label={"Title"} />
        <WhiteCard label={"Description"} textArea={true} />
        <WhiteCard label={"Course ID"} dropdown={true} func={showCourseIDdiv} />
        <WhiteCard
          label={"Deadline Date"}
          dropdown={true}
          func={showDeadLineDiv}
        />
        <WhiteCard label={"Deadline Date"} />
        <WhiteCard label={"Deadline Time"} />
        <WhiteCard label={"Overtime"} />

        <Box
          style={{
            maxWidth: "600px",
            width: "600px",
            marginTop: "10px",
          }}
        >
          <Button
            style={{
              padding: "20px",
              marginTop: "50px",
            }}
            className={styles.blueButton}
            style={{ width: "100%", height: "unset" }}
          >
            + Enroll student
          </Button>
        </Box>
      </Box>
      {deadLineDiv ? (
        <Container maxWidth="xl" className={styles.overlayWrapper}>
          <CloseIcon
            style={{ color: Color.textBlue, cursor: "pointer" }}
            onClick={showDeadLineDiv}
          />
          calender
        </Container>
      ) : (
        ""
      )}
      {addCourseID ? (
        <Container maxWidth="xl" className={styles.overlayWrapper}>
          <Card
            style={{
              maxWidth: "600px",
              width: "600px",
              // padding: "20px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <Box
              style={{
                padding: "15px 20px 20px 20px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box></Box>
                <Box
                  className={styles.mainHeading2}
                  style={{ textAlign: "center", paddingBottom: "10px" }}
                >
                  Select your Course
                </Box>
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={showCourseIDdiv}
                />
              </Box>

              <Button className={styles.whiteOutlinedButton}>
                Course Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                Course Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                Course Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                Course Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                Course Name
              </Button>
            </Box>
          </Card>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  return (
    <WhitBox
      heading={"Instructions"}
      openCreateHomeWorkPage={props.openCreateHomeWorkPage}
    />
  );
});
export default TeamCardDemo;
