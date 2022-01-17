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
} from "@material-ui/core";
import { profileImg1 } from "../../assets/index";

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
}));

const WhiteCard = ({ label }) => {
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
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            className={styles.TextFields}
          />
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
const MainComponent = ({ label }) => {
  const styles = useStyles();
  return (
    <>
      <WhiteCardProfileImg label={"Name"} profileImg={profileImg1} />
      <WhiteCard label={"Full Name"} />
      <WhiteCard label={"Email"} />
      <WhiteCard label={"Username"} />
      <WhiteCard label={"Country"} />
      <WhiteCard label={"Password"} />
      <WhiteCard label={"University"} />
      <WhiteCard label={"Course"} />
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
          Edit
        </Button>
      </Box>
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
