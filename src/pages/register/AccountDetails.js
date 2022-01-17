import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { BgColor, Color, Fonts } from "../../theme/index";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

import {
  Box,
  TextField,
  Button,
  Card,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { profileImg1, logo } from "../../assets/index";

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
  profileImg: {
    width: "100px",
    height: "100px",
    borderRadius: "100px",
    border: "none",
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
}));

const Position = ({ position }) => {
  const styles = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
          <Box className={styles.smallestBlueTitle}>Your are a :</Box>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Your are a :</FormLabel> */}
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="teacher"
                control={<Radio color="success" />}
                label="Teacher"
              />
              <FormControlLabel
                value="student"
                control={<Radio color="success" />}
                label="Student"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Card>
    </>
  );
};
const WhiteCard = ({ label, dropdown, showList }) => {
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
              onClick={showList}
            >
              <Box className={styles.smallestBlueTitle}>{label}</Box>
              <ArrowDropDownIcon style={{ color: Color.textBlue }} />
            </Box>
          ) : (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              className={styles.TextFields}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

const WhiteCardProfileImg = ({ label, profileImg }) => {
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
        <Box
          style={{ padding: "26px" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flex
        >
          <Box
            style={{ padding: "0px" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={profileImg} className={styles.profileImg} />
            <Box className={styles.smallText} ml="15px">
              {label}
            </Box>
          </Box>
          <Box style={{ marginTop: "20px" }}>
            <ImageOutlinedIcon
              className={styles.textBoxIcons}
              style={{
                color: Color.textBlue,
                fontSize: "35px",
                margin: "10px",
              }}
            />

            <CameraAltOutlinedIcon
              className={styles.textBoxIcons}
              style={{
                color: Color.textBlue,
                fontSize: "35px",
                margin: "10px",
              }}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

const TopPortion = ({ label, profileImg }) => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      p={"30px"}
    >
      <img src={logo} />
      <Box>
        <Typography
          variant="caption"
          color="primary"
          className={styles.smallGrayTitle}
        >
          Welcome to our application
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className={styles.bigHeading}
          style={{ marginBottom: "-5px" }}
        >
          Register here to get access
        </Typography>
      </Box>
    </Box>
  );
};
const MainComponent = ({ label }) => {
  const styles = useStyles();
  const [openUniversityList, setOpenUniversityList] = useState(false);
  const ShowUniversityList = () => {
    setOpenUniversityList(!openUniversityList);
  };
  const [openCourseList, setOpenCourseList] = useState(false);
  const ShowCourseList = () => {
    setOpenCourseList(!openCourseList);
  };
  return (
    <>
      <TopPortion />
      <Position position={"teacher"} />
      {/* <WhiteCardProfileImg label={"Name"} profileImg={profileImg1} /> */}
      <WhiteCard label={"Enter Full Name"} />
      <WhiteCard label={"Enter Username"} />
      <WhiteCard label={"Enter Email ID"} />
      <WhiteCard label={"Enter Password"} />
      <WhiteCard
        label={"Select Your University"}
        dropdown={true}
        showList={ShowUniversityList}
      />
      <WhiteCard
        label={"Select Your Course"}
        dropdown={true}
        showList={ShowCourseList}
      />
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
          Register
        </Button>
      </Box>

      {openUniversityList ? (
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
                  Select University
                </Box>
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={ShowUniversityList}
                />
              </Box>

              <Button className={styles.whiteOutlinedButton}>
                University Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                University Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                University Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                University Name
              </Button>
              <Button className={styles.whiteOutlinedButton}>
                University Name
              </Button>
            </Box>
          </Card>
        </Container>
      ) : (
        ""
      )}
      {openCourseList ? (
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
                  Select Course
                </Box>
                <CloseIcon
                  style={{ color: Color.textBlue, cursor: "pointer" }}
                  onClick={ShowCourseList}
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
    <>
      <MainComponent />
    </>
  );
});
export default TeamCardDemo;
