import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { BgColor, Color, Fonts } from "../../theme/index";
import CardContent from "@material-ui/core/CardContent";
import { Card, Grid, Box, Button, Paper, Typography } from "@material-ui/core";
import { profileImg3 } from "../../assets/index";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import ListIcon from "@material-ui/icons/List";
import ImageIcon from "@material-ui/icons/Image";
import TheatersIcon from "@material-ui/icons/Theaters";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";

const teacher = true;
const assignmenChecked = true;

const useStyles = makeStyles(() => ({
  card: {
    // width: "550px",
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
    paddingRight: "0",

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
  blueCard: {
    backgroundColor: BgColor.myBlue,
    padding: "12px 20px",
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
  blueCardWrapper: {
    // width: "550px",
    maxWidth: "600px",
    zIndex: 1,
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    backgroundColor: BgColor.myBlue,
    padding: "12px 20px",
    marginTop: "10px",
    transition: "0.3s",
  },
  submissionText: {
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: ".6",
    padding: "15px 0",
    margin: "0",
  },
  profileImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50px",
    marginRight: "7px",
  },
  docImg: {
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    backgroundColor: "#95B2F5",
    marginRight: "15px",
  },
  profileName: {
    fontSize: "17px",
    fontFamily: Fonts.Regular,
    // opacity: ".6",
    // padding: "15px 0",
    margin: "0 0 -3px 0",
  },
  gradePercentage: {
    color: Color.textBlue,
    fontSize: "35px",
    fontFamily: Fonts.Regular,
    opacity: 0.5,
    margin: "0 0 -3px 0",
  },
  profileId: {
    fontSize: "11px",
    fontFamily: Fonts.Medium,
    // opacity: ".6",
    // padding: "15px 0",
    margin: "0",
  },
  blueLink: {
    color: Color.textBlue,
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    cursor: "pointer",
    // padding: "15px 0",
    margin: "0",
    transition: "all .3s ease",
    "&:hover": {
      opacity: ".7",
    },
  },
  blueButtonSm: {
    color: "#fff",
    fontSize: "12px",
    lineHeight: "17px",
    height: "30px",
    borderRadius: "5px",
    backgroundColor: BgColor.myBlue,
    padding: "0 12px",
    "&:hover": {
      color: Color.textBlue,
      border: "1px solid" + Color.textBlue,
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    color: "red",
  },
  blueButton2: {
    color: "#fff",
    height: "40px",
    lineHeight: "40px",
    borderRadius: "5px",
    fontFamily: Fonts.Medium,
    cursor: "pointer",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: BgColor.myBlue,
    border: "1px solid transparent",
    padding: "0 20px",
    "&:hover": {
      color: Color.textBlue,
      border: "1px solid" + Color.textBlue,
      backgroundColor: "unset",
    },
  },
  subTitle: {
    color: "rgba(0,0,0,0.7)",
    fontSize: "12px",
    fontFamily: Fonts.Regular,
  },
}));
const BottomBar = ({}) => {
  const styles = useStyles();

  return (
    <>
      <Card
        style={{
          maxWidth: "600px",
          // width: "550px",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormatBoldIcon style={{ margin: "0 5px" }} />
            <FormatItalicIcon style={{ margin: "0 5px" }} />
            <FormatUnderlinedIcon style={{ margin: "0 5px" }} />
            <ListIcon style={{ margin: "0 5px" }} />
            <ImageIcon style={{ margin: "0 5px" }} />
            <TheatersIcon style={{ margin: "0 5px" }} />
            <StrikethroughSIcon style={{ margin: "0 5px" }} />
          </Box>
          <Box className={styles.blueButton2}>Save</Box>
        </Box>
      </Card>
    </>
  );
};

const WhiteCard = ({ heading, textContent }) => {
  const styles = useStyles();

  return (
    <>
      <Card
        style={{
          maxWidth: "600px",
          // width: "550px",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <CardContent>
          <Box>
            <Box className={styles.smallestBlueTitle}>{heading}</Box>
            <Box className={styles.smallText}>{textContent}</Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
const AssignmentCard = ({ grade, textContent, setOpenAssignment }) => {
  const styles = useStyles();

  return (
    <>
      <Card
        style={{
          maxWidth: "600px",
          // width: "550px",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <CardContent>
          <Box>
            {/* <Box className={styles.smallestBlueTitle}>{heading}</Box> */}
            <Box className={styles.smallText}>{textContent}</Box>
            <Typography
              className={styles.profileName}
              style={{ marginTop: "60px" }}
            >
              Grade:
            </Typography>
            <Typography className={styles.gradePercentage}>{grade}%</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            pt={"10px"}
          >
            <Button
              className={styles.blueButtonSm}
              setOpenAssignment={setOpenAssignment}
            >
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

const BlueCard = ({ dueDate, daysLeft, submissions }) => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.blueCardWrapper} style={{ padding: "0 10px" }}>
        <Box className={styles.blueCard}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Box>
                <p className={styles.dueDate}>Due date {dueDate}</p>
              </Box>
              <Box>
                <p className={styles.daysLeft}>{daysLeft} days left</p>
              </Box>
            </Box>
            <Box>
              <p className={styles.submissionText} style={{ color: "#fff" }}>
                <span>{submissions}</span> / <span>22</span> Submissions
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const MainHeading = ({ heading, subTitle }) => {
  const styles = useStyles();
  return (
    <>
      <Typography className={styles.mainHeading} style={{ margin: "15px 0" }}>
        {heading} <span className={styles.subTitle}>({subTitle})</span>
      </Typography>
    </>
  );
};

const SubmitStudentDiv = ({ name, id, grade, fileName, setOpenAssignment }) => {
  const styles = useStyles();

  return (
    <>
      <Card
        style={{
          maxWidth: "600px",
          // width: "550px",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
        onClick={setOpenAssignment}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <img src={profileImg3} className={styles.profileImg} />
              <Box>
                <Box className={styles.profileName}>{name}</Box>
                <Box className={styles.profileId}>ID{id}</Box>
              </Box>
            </Box>

            {assignmenChecked ? (
              <Box className={styles.profileName}>
                <span>(tk) </span>
                Grade : <span>{grade}</span>
              </Box>
            ) : (
              ""
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: "20px" }}
          >
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Box className={styles.docImg}></Box>
              <Box>
                <Box className={styles.profileName}>{fileName}</Box>
                <Box className={styles.blueLink}>READ</Box>
              </Box>
            </Box>
            <Button className={styles.blueButtonSm}>
              {assignmenChecked ? "Grade" : "View"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  console.log("gh props", props.openAssignment);

  return (
    <>
      <Grid container>
        <Grid xs={12} md={6} lg={6}>
          <Box
            style={{ maxWidth: "600px" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <MainHeading heading={"Homework"} subTitle={"Submission"} />
            <CloseIcon
              style={{ color: Color.textBlue, cursor: "pointer" }}
              onClick={props.openSubmitHomework}
            />
          </Box>
          <WhiteCard
            heading={"Title"}
            textContent={"Vivamus eget aliquam dui. Ineger"}
          />
          <WhiteCard
            heading={"Description"}
            textContent={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lor"
            }
          />
          <WhiteCard
            // heading={"Description"}
            textContent={
              "The established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages reader will be distracted by the  publishing packages and web page editors now use and web page editors now use readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use and web page editors now use Lor the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages reader will be distracted by the  publishing packages and web page editors now use and web page editors now use readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use to do."
            }
          />
          <BottomBar />
        </Grid>
        <Grid xs={12} md={6} lg={6}></Grid>
      </Grid>
    </>
  );
});
export default TeamCardDemo;
