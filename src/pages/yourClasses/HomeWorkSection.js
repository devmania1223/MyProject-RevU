import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { BgColor, Color, Fonts } from "../../theme/index";
import { useGraphicBtnStyles } from "@mui-treasury/styles/button/graphic";

const teacher = true;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    transition: "0.3s",
    position: "relative",
    // border: "4px solid green",
    // "&:before": {
    //   transition: "0.2s",
    //   position: "absolute",
    //   width: "100%",
    //   height: "100%",
    //   content: '""',
    //   display: "block",
    //   backgroundColor: "#d9daf1",
    //   borderRadius: "1rem",
    //   zIndex: 0,
    //   bottom: 0,
    // },
    "&:hover": {
      // "&:before": {
      //   bottom: -6,
      // },
      // "& $card": {
      //   boxShadow: "-12px 12px 64px 0 #bcc3d6",
      // },
    },
  },
  card: {
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
  profileImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
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
  currentHomeWorkDiv: {
    width: "100%",
    maxWidth: "600px",
    zIndex: 1,
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    backgroundColor: "#fff",
    transition: "0.3s",
    "& .header": {
      backgroundColor: BgColor.myBlue,
      padding: "12px 20px",
    },
    "& .body": {
      padding: "12px 20px",
    },
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
  smallerTitle: {
    fontSize: "12px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    opacity: ".6",
    padding: "5px 0 0 0",
    margin: "0",
  },
  normalText: {
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    padding: "0 0 5px 0",
    margin: "0",
  },
  submissionText: {
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: ".6",
    padding: "15px 0",
    margin: "0",
  },
  bluLink: {
    color: Color.textBlue,
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "15px 0",
    margin: "0",
    transition: "all .3s ease",
    "&:hover": {
      opacity: ".7",
    },
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
}));

const CustomCard = ({ openHomework }) => {
  const styles = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
    <section>
      <Box display="flex" justifyContent="space-between">
        <Box
          className={styles.mainHeading}
          lineHeight={"15px"}
          p={"30px 0px 20px 0"}
          mt={"20px"}
        >
          Homework
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
        <Box pb="20px" mr="10px">
          <Box>
            <p className={styles.dateTitle}> 05/03/2020</p>
          </Box>
          <Box className={styles.currentHomeWorkDiv}>
            <Box
              className="header"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <p className={styles.dueDate}>Closed</p>
              </Box>
              <Box>
                <p
                  className={styles.daysLeft}
                  style={{ textTransform: "uppercase", opacity: ".8" }}
                >
                  Result
                </p>
              </Box>
            </Box>
            <Box className="body">
              <Box>
                <p className={styles.smallerTitle}>TITLE</p>
              </Box>
              <Box>
                <p className={styles.normalText}>Content Here Content Here</p>
              </Box>
              <Box>
                <p className={styles.smallerTitle}>DESCRiption</p>
              </Box>
              <Box>
                <p className={styles.normalText}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lor
                </p>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <p className={styles.submissionText}>
                    <span>21</span> / <span>22</span> Submissions - Closed
                  </p>
                </Box>
                <Box>
                  <p className={styles.bluLink} onClick={openHomework}>
                    View
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box pb="20px" mr="10px">
          <Box>
            <p className={styles.dateTitle}> 10/02/2020</p>
          </Box>
          <Box className={styles.currentHomeWorkDiv}>
            <Box
              className="header"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <p className={styles.dueDate}>Closed</p>
              </Box>
              <Box>
                <p
                  className={styles.daysLeft}
                  style={{ textTransform: "uppercase", opacity: ".8" }}
                >
                  Result
                </p>
              </Box>
            </Box>
            <Box className="body">
              <Box>
                <p className={styles.smallerTitle}>TITLE</p>
              </Box>
              <Box>
                <p className={styles.normalText}>Content Here Content Here</p>
              </Box>
              <Box>
                <p className={styles.smallerTitle}>DESCRiption</p>
              </Box>
              <Box>
                <p className={styles.normalText}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lor
                </p>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <p className={styles.submissionText}>
                    <span>21</span> / <span>22</span> Submissions - Closed
                  </p>
                </Box>
                <Box>
                  <p className={styles.bluLink} onClick={openHomework}>
                    View
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box pb="20px" mr="10px">
          <Box>
            <p className={styles.dateTitle}> 20/01/2020</p>
          </Box>
          <Box className={styles.currentHomeWorkDiv}>
            <Box
              className="header"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <p className={styles.dueDate}>Closed</p>
              </Box>
              <Box>
                <p
                  className={styles.daysLeft}
                  style={{ textTransform: "uppercase", opacity: ".8" }}
                >
                  Result
                </p>
              </Box>
            </Box>
            <Box className="body">
              <Box>
                <p className={styles.smallerTitle}>TITLE</p>
              </Box>
              <Box>
                <p className={styles.normalText}>Content Here Content Here</p>
              </Box>
              <Box>
                <p className={styles.smallerTitle}>DESCRiption</p>
              </Box>
              <Box>
                <p className={styles.normalText}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lor
                </p>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <p className={styles.submissionText}>
                    <span>21</span> / <span>22</span> Submissions - Closed
                  </p>
                </Box>
                <Box>
                  <p className={styles.bluLink} onClick={openHomework}>
                    View
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box pb="20px" mr="10px">
          <Box>
            <p className={styles.dateTitle}> 20/01/2020</p>
          </Box>
          <Box className={styles.currentHomeWorkDiv}>
            <Box
              className="header"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <p className={styles.dueDate}>Closed</p>
              </Box>
              <Box>
                <p
                  className={styles.daysLeft}
                  style={{ textTransform: "uppercase", opacity: ".8" }}
                >
                  Result
                </p>
              </Box>
            </Box>
            <Box className="body">
              <Box>
                <p className={styles.smallerTitle}>TITLE</p>
              </Box>
              <Box>
                <p className={styles.normalText}>Content Here Content Here</p>
              </Box>
              <Box>
                <p className={styles.smallerTitle}>DESCRiption</p>
              </Box>
              <Box>
                <p className={styles.normalText}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lor
                </p>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <p className={styles.submissionText}>
                    <span>21</span> / <span>22</span> Submissions - Closed
                  </p>
                </Box>
                <Box>
                  <p className={styles.bluLink} onClick={openHomework}>
                    View
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  return (
    <>
      <CustomCard openHomework={props.openHomework} />
    </>
  );
});
export default TeamCardDemo;
