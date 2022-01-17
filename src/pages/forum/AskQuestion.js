import React, { useState } from "react";
import SchoolIcon from "@material-ui/icons/School";
import { makeStyles } from "@material-ui/core/styles";
import { Fonts, BgColor, Color } from "../../theme/index";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { studentIcon, TeacherIcon } from "../../assets/images/index";
import CloseIcon from "@material-ui/icons/Close";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import ListIcon from "@material-ui/icons/List";
import ImageIcon from "@material-ui/icons/Image";
import TheatersIcon from "@material-ui/icons/Theaters";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import {
  Grid,
  Box,
  TextField,
  Button,
  Card,
  Container,
  CardContent,
  Typography,
} from "@material-ui/core";

const teacher = true;

const useStyles = makeStyles({
  root: {
    padding: "10px",
    borderRadius: "10px",
    marginTop: "10px",
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
  info: {
    color: "#2B65EC",
    textTransform: "initial",
    fontFamily: Fonts.Regular,
  },
  LightText: {
    color: BgColor.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: 0.25,
  },
  regularFont: {
    fontFamily: Fonts.Regular,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
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
  smallestBlueTitle: {
    color: Color.textBlue,
    fontSize: "13px",
    fontFamily: Fonts.Regular,
  },
  smallText: {
    color: BgColor.myBlack,
    fontSize: "16px",
    fontFamily: Fonts.Regular,
  },
  LightText: {
    color: BgColor.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: 0.25,
  },
  blueNumbersText: {
    color: Color.textBlue,
    fontSize: "25px",
    fontFamily: Fonts.Regular,
    transition: "all .3s ease",
  },
  icons: {
    padding: "10px",
    "&:hover": {
      opacity: ".7",
    },
  },
  toggleTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
    minHeight: "40px",
    backgroundColor: "#F2F8FD",
    padding: "10px 0",
    "&:hover": {
      backgroundColor: "#DBECF8",
    },
  },
  toggleTabText: {
    color: "#7BBEE8",
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    // opacity: 0.4,
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
  smallestGrayTitleLight: {
    color: "rgba(0,0,0,0.3)",
    fontSize: "12px",
    fontFamily: Fonts.Regular,
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
      backgroundColor: "#fff",
    },
  },
});

const MyCard = ({ toggleAskQuestion }) => {
  const classes = useStyles();
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(true);
  const toggleTabButton = (category) => {
    if (category == "student") {
      setStudent(true);
      setTeacher(false);
    } else {
      setStudent(false);
      setTeacher(true);
    }
  };
  const [normalQuestion, setNormalQuestion] = useState(false);
  const [academicQuestion, setAcademicQuestion] = useState(true);
  const toggleTabQuestionType = (type) => {
    if (type == "normal") {
      setNormalQuestion(true);
      setAcademicQuestion(false);
    } else {
      setNormalQuestion(false);
      setAcademicQuestion(true);
    }
  };

  return (
    <>
      <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography
            variant="h5"
            component="h5"
            className={classes.mainHeading}
          >
            Category
          </Typography>
          <CloseIcon
            style={{ color: Color.textBlue, cursor: "pointer" }}
            onClick={toggleAskQuestion}
          />
        </Box>

        <Card className={classes.root}>
          <CardContent style={{ padding: "5px" }}>
            <Typography
              className={classes.LightText}
              style={{ textAlign: "center", paddingBottom: "10px" }}
            >
              Ask Who
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <Box
                className={classes.toggleTab}
                style={{
                  borderRight: "3px solid rgba(0,0,0,0.05)",
                  padding: "30px 0",
                  backgroundColor: student ? "#DBECF8" : "",
                }}
                // backgroundColor: "#F2F8FD",
                // backgroundColor: "#DBECF8",

                onClick={() => toggleTabButton("student")}
              >
                {/* <img src={studentIcon} /> */}
                <SchoolIcon style={{ color: "#7BBEE8", fontSize: "35px" }} />
                <Box className={classes.toggleTabText}>Student</Box>
              </Box>

              <Box
                className={classes.toggleTab}
                style={{
                  padding: "30px 0",
                  backgroundColor: teacher ? "#DBECF8" : "",
                }}
                onClick={() => toggleTabButton("teacher")}
              >
                {/* <img src={teacherIcon} /> */}
                <PermIdentityIcon
                  style={{ color: "#7BBEE8", fontSize: "35px" }}
                />
                <Box className={classes.toggleTabText}>Teacher</Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent style={{ padding: "5px" }}>
            <Typography
              className={classes.LightText}
              style={{ textAlign: "center", paddingBottom: "10px" }}
            >
              Type of question
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <Box
                className={classes.toggleTab}
                style={{
                  borderRight: "3px solid rgba(0,0,0,0.05)",
                  backgroundColor: normalQuestion ? "#DBECF8" : "",
                }}
                onClick={() => toggleTabQuestionType("normal")}
              >
                <Box className={classes.toggleTabText}>Normal Question</Box>
              </Box>

              <Box
                className={classes.toggleTab}
                style={{
                  backgroundColor: academicQuestion ? "#DBECF8" : "",
                }}
                onClick={() => toggleTabQuestionType("academic")}
              >
                <Box className={classes.toggleTabText}>Academic English</Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

const TimeAndPriceCard = ({
  dropdown,
  label,
  textArea,
  // showQuestionType,
  toggleShowLength,
  showQuestionTypeList,
  showPriceList,
}) => {
  const styles = useStyles();
  return (
    <>
      <Box
        flexWrap="wrap"
        p={2}
        m={0}
        bgcolor="background.paper"
        style={{ marginTop: "-15px" }}
      >
        <Card
          onClick={showQuestionTypeList}
          className={styles.root}
          style={{ marginTop: "0" }}
        >
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Box style={{ flex: "1", padding: "5px" }}>
              <Box className={styles.smallestBlueTitle}>Time LIMIT</Box>

              <TextField
                id="standard-size-small"
                // defaultValue="2 hrs"
                placeholder="2 hrs"
                size="small"
              />
            </Box>

            <Box style={{ flex: "3", padding: "5px" }}>
              <Box className={styles.smallestBlueTitle}>price</Box>
              <TextField
                id="standard-size-small"
                // defaultValue="text"
                placeholder="enter price"
                size="small"
              />
            </Box>
            <Box style={{ flex: ".2", padding: "5px" }}>
              <HelpOutlineIcon
                style={{ color: Color.textBlue }}
                onClick={showPriceList}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

const WhiteCardSelectCategory = ({
  dropdown,
  label,
  textArea,
  // showQuestionType,
  toggleShowLength,
  showQuestionTypeList,
  showFinalQuestionView,
}) => {
  const styles = useStyles();
  return (
    <>
      <Box
        flexWrap="wrap"
        p={2}
        m={0}
        bgcolor="background.paper"
        style={{ marginTop: "-15px" }}
      >
        <Card
          onClick={showQuestionTypeList}
          className={styles.root}
          style={{ marginTop: "0" }}
        >
          <Box style={{ padding: "5px" }}>
            {/* <Box className={styles.smallestBlueTitle}>{heading}</Box> */}
            {/* <Box className={styles.smallText} style={{color:Color.textBlue}}>{textContent}asdf</Box> */}
            {dropdown ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // onClick={func}
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
        <Button
          className={styles.blueButton}
          style={{ marginTop: "20px", width: "100%" }}
          onClick={showFinalQuestionView}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

const WhiteCard = ({
  dropdown,
  label,
  textArea,
  showQuestionType,
  toggleShowLength,
}) => {
  const styles = useStyles();
  return (
    <>
      <Box
        flexWrap="wrap"
        p={2}
        m={0}
        bgcolor="background.paper"
        style={{ marginTop: "-15px" }}
      >
        <Card
          onClick={showQuestionType}
          className={styles.root}
          style={{ marginTop: "0" }}
        >
          <Box style={{ padding: "5px" }}>
            {/* <Box className={styles.smallestBlueTitle}>{heading}</Box> */}
            {/* <Box className={styles.smallText} style={{color:Color.textBlue}}>{textContent}asdf</Box> */}
            {dropdown ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // onClick={func}
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
        <Button
          className={styles.blueButton}
          style={{ marginTop: "20px", width: "100%" }}
          onClick={toggleShowLength}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

const QuestionTypeListOverlay = ({
  showQuestionTypeList,
  questionTypeList,
}) => {
  const styles = useStyles();
  return (
    <>
      {questionTypeList ? (
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
                  Question Type
                </Box>
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={showQuestionTypeList}
                />
              </Box>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionTypeList}
              >
                IELTS
              </Button>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionTypeList}
              >
                TOEFL
              </Button>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionTypeList}
              >
                cet 4
              </Button>

              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionTypeList}
              >
                cet 6
              </Button>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionTypeList}
              >
                Tem 4
              </Button>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionTypeList}
              >
                Tem 8
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

const QuestionTypeOverlay = ({ showQuestionType, questionType }) => {
  const styles = useStyles();
  return (
    <>
      {questionType ? (
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
                  What do you need?
                </Box>
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={showQuestionType}
                />
              </Box>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionType}
              >
                Ask a questino
              </Button>
              <Button
                className={styles.whiteOutlinedButton}
                onClick={showQuestionType}
              >
                Writing feedback
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

const PriceList = ({ showPriceList, priceList }) => {
  const styles = useStyles();
  return (
    <>
      {priceList ? (
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
                  Price list
                </Box>
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={showPriceList}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  mb={"15px"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Box
                    className={styles.smallText}
                    style={{ color: Color.textBlue }}
                  >
                    For Students Questions:
                  </Box>

                  <Box className={styles.LightText}>
                    Small Question = 0.5 - 3 rmb,
                  </Box>
                  <Box className={styles.LightText}>
                    Long Question = 3 - 15 rmb
                  </Box>
                </Box>
                <Box
                  mb={"15px"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Box
                    className={styles.smallText}
                    style={{ color: Color.textBlue }}
                  >
                    For Teachers Questions:
                  </Box>

                  <Box className={styles.LightText}>
                    Small Question = 5 - 25 rmb,
                  </Box>
                  <Box className={styles.LightText}>
                    Long Question = 25 - 75 rmb
                  </Box>
                </Box>
                <Box
                  mb={"15px"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Box
                    className={styles.smallText}
                    style={{ color: Color.textBlue }}
                  >
                    Academic English:
                  </Box>

                  <Box className={styles.LightText}>
                    CET 4 and TEM 4 = 25 rmb,
                  </Box>
                  <Box className={styles.LightText}>
                    CET 6 and TEM 8 = 25 rmb,
                  </Box>
                  <Box className={styles.LightText}>
                    IELTS and TOEFEL = 50 rmb,
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

const MyCardForSelectCategory = ({ toggleAskQuestion, toggleShowLength }) => {
  const classes = useStyles();
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(true);
  const toggleTabButton = (category) => {
    if (category == "student") {
      setStudent(true);
      setTeacher(false);
    } else {
      setStudent(false);
      setTeacher(true);
    }
  };
  const [normalQuestion, setNormalQuestion] = useState(false);
  const [academicQuestion, setAcademicQuestion] = useState(true);
  const toggleTabQuestionType = (type) => {
    if (type == "normal") {
      setNormalQuestion(true);
      setAcademicQuestion(false);
    } else {
      setNormalQuestion(false);
      setAcademicQuestion(true);
    }
  };

  return (
    <>
      <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography
            variant="h5"
            component="h5"
            className={classes.mainHeading}
          >
            Category
          </Typography>
          <CloseIcon
            style={{ color: Color.textBlue, cursor: "pointer" }}
            onClick={toggleShowLength}
          />
        </Box>

        <Card className={classes.root}>
          <CardContent style={{ padding: "5px" }}>
            <Typography
              className={classes.LightText}
              style={{ textAlign: "center", paddingBottom: "10px" }}
            >
              Ask Who
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <Box
                className={classes.toggleTab}
                style={{
                  borderRight: "3px solid rgba(0,0,0,0.05)",
                  padding: "30px 0",
                  backgroundColor: student ? "#DBECF8" : "",
                }}
                // backgroundColor: "#F2F8FD",
                // backgroundColor: "#DBECF8",

                onClick={() => toggleTabButton("student")}
              >
                {/* <img src={studentIcon} /> */}
                {/* <SchoolIcon style={{ color: "#7BBEE8", fontSize: "35px" }} /> */}
                <SubjectIcon style={{ color: "#7BBEE8", fontSize: "35px" }} />
                <Box className={classes.toggleTabText}>Short Question</Box>
              </Box>

              <Box
                className={classes.toggleTab}
                style={{
                  padding: "30px 0",
                  backgroundColor: teacher ? "#DBECF8" : "",
                }}
                onClick={() => toggleTabButton("teacher")}
              >
                {/* <img src={teacherIcon} /> */}
                {/* <PermIdentityIcon
                  style={{ color: "#7BBEE8", fontSize: "35px" }}
                /> */}
                <ShortTextIcon style={{ color: "#7BBEE8", fontSize: "35px" }} />
                <Box className={classes.toggleTabText}>Long Question</Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

const FinalQuestionComponent = ({ heading, textContent, bottomBar }) => {
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
          {bottomBar ? <BottomBar /> : ""}
        </CardContent>
      </Card>
    </>
  );
};

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
          marginTop: "30px",
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

const SelectCategory = ({
  toggleAskQuestion,
  showQuestionType,
  toggleShowLength,
}) => {
  return (
    <>
      <MyCard
        pointsForStudents={"50 points for student"}
        pointsForTeachers={"50 points for teacher"}
        title={"Invite Teacher & Students"}
        description={
          "Remember the more teachers and students on the platform, the more chances you have of making money and points."
        }
        toggleAskQuestion={toggleAskQuestion}
      />

      <WhiteCard
        label={"What Do You Need"}
        dropdown={true}
        showQuestionType={showQuestionType}
        toggleShowLength={toggleShowLength}
      />
    </>
  );
};

const SelectLength = ({
  toggleAskQuestion,
  showQuestionTypeList,
  showFinalQuestionView,
  toggleShowLength,
}) => {
  const [priceList, setPriceList] = useState(false);
  const showPriceList = () => {
    setPriceList(!priceList);
  };
  return (
    <>
      <MyCardForSelectCategory
        pointsForStudents={"50 points for student"}
        pointsForTeachers={"50 points for teacher"}
        title={"Invite Teacher & Students"}
        description={
          "Remember the more teachers and students on the platform, the more chances you have of making money and points."
        }
        toggleAskQuestion={toggleAskQuestion}
        toggleShowLength={toggleShowLength}
      />
      <TimeAndPriceCard showPriceList={showPriceList} />

      <WhiteCardSelectCategory
        label={"Question Type"}
        dropdown={true}
        showQuestionTypeList={showQuestionTypeList}
        showFinalQuestionView={showFinalQuestionView}
      />

      {priceList ? (
        <PriceList priceList={priceList} showPriceList={showPriceList} />
      ) : (
        ""
      )}
    </>
  );
};

const FinalQuestionView = ({ showFinalQuestionView, toggleAskQuestion }) => {
  const classes = useStyles();
  return (
    <>
      <Box flexWrap="wrap" p={2} m={0} bgcolor="background.paper">
        <Box>
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
              Question
            </Typography>
            <CloseIcon
              style={{ color: Color.textBlue, cursor: "pointer" }}
              onClick={showFinalQuestionView}
            />
          </Box>

          <FinalQuestionComponent
            heading={"Title"}
            textContent={"Vivamus eget aliquam dui. Ineger"}
          />
          <FinalQuestionComponent
            heading={"Description"}
            textContent={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lor"
            }
            bottomBar={true}
          />

          <Button
            className={classes.blueButton}
            style={{ marginTop: "20px", width: "100%" }}
            onClick={toggleAskQuestion}
          >
            Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  const [questionType, setQuestionType] = useState(false);
  const showQuestionType = () => {
    setQuestionType(!questionType);
  };
  const [length, setLength] = useState(false);
  const toggleShowLength = () => {
    setLength(!length);
  };
  const [questionTypeList, setQuestionTypeList] = useState(false);
  const showQuestionTypeList = () => {
    setQuestionTypeList(!questionTypeList);
  };
  const [finalQuestionView, setFinalQuestionView] = useState(false);
  const showFinalQuestionView = () => {
    setFinalQuestionView(!finalQuestionView);
  };

  return (
    <>
      <Grid
        style={{ marginRight: 0, marginTop: 15 }}
        item
        xs={12}
        md={8}
        lg={5}
      >
        {!length ? (
          <SelectCategory
            showQuestionType={showQuestionType}
            toggleAskQuestion={props.toggleAskQuestion}
            toggleShowLength={toggleShowLength}
          />
        ) : (
          <>
            {!finalQuestionView ? (
              <SelectLength
                showQuestionTypeList={showQuestionTypeList}
                showFinalQuestionView={showFinalQuestionView}
                toggleShowLength={toggleShowLength}
              />
            ) : (
              <FinalQuestionView
                showFinalQuestionView={showFinalQuestionView}
                toggleAskQuestion={props.toggleAskQuestion}
              />
            )}
          </>
        )}
      </Grid>
      <QuestionTypeOverlay
        questionType={questionType}
        showQuestionType={showQuestionType}
      />
      <QuestionTypeListOverlay
        questionTypeList={questionTypeList}
        showQuestionTypeList={showQuestionTypeList}
      />
    </>
  );
});
export default TeamCardDemo;
