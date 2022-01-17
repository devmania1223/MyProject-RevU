import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useApexInfoStyles } from "@mui-treasury/styles/info/apex";
import { useGraphicBtnStyles } from "@mui-treasury/styles/button/graphic";
import { BgColor, Color, Fonts } from "../../theme/index";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloseIcon from "@material-ui/icons/Close";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import {
  Container,
  Box,
  TextField,
  Button,
  Card,
  Typography,
  CardContent,
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
  smallestGrayTitle: {
    color: "rgba(0,0,0,0.5)",
    fontSize: "13px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
  },
  smallestGrayTitleLight: {
    color: "rgba(0,0,0,0.3)",
    fontSize: "12px",
    fontFamily: Fonts.Regular,
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
    border: "1px solid transparent",
    padding: "0 20px",
    "&:hover": {
      color: Color.textBlue,
      border: "1px solid" + Color.textBlue,
    },
  },
  grayLine: {
    width: "45%",
    height: "1px",
    backgroundColor: BgColor.myBlack,
    opacity: ".2",
    margin: "30px auto 0px auto",
  },
  orText: {
    color: Color.myBlack,
    fontSize: "18px",
    fontFamily: Fonts.Medium,
    opacity: ".5",
    justifyContent: "space-between",
  },
  dateAndTime: {
    color: Color.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Medium,
    opacity: ".4",
    marginTop: "-5px",
  },
  closeIcon: {
    position: "absolute",
    top: "0px",
    right: "5px",
    color: Color.textBlue,
    cursor: "pointer",
    marginBottom: "-6px",
    marginLeft: "10px",
  },
}));

const WhiteCard = ({ amount, heading }) => {
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
        <Box style={{ padding: "16px" }}>
          <Box className={styles.smallestBlueTitle}>{heading}</Box>
          <Box className={styles.smallText}>&#165;{amount}</Box>
        </Box>
      </Card>
    </>
  );
};

const Transactions = ({ status, date, amount, time, showTransitionDetial }) => {
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
        onClick={showTransitionDetial}
      >
        <Box style={{ padding: "16px" }}>
          <Box className={styles.smallestGrayTitle}>{status}</Box>
          <Box className={styles.smallText}>&#165;{amount}</Box>
          <Box className={styles.smallestGrayTitleLight}>
            {time} - {date}
          </Box>
        </Box>
      </Card>
    </>
  );
};

const TransactionDetails = ({
  openEnrollingStudent,
  amountForRefund,
  time,
  date,
  showTransitionDetial,
}) => {
  const styles = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
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
            padding: "20px",
          }}
        >
          <Box
            style={{
              position: "relative",
            }}
          >
            <Box
              className={styles.mainHeading2}
              style={{ textAlign: "center" }}
            >
              Transaction
            </Box>
            <Box className={styles.dateAndTime} style={{ textAlign: "center" }}>
              {time} - {date}
            </Box>
            <CloseIcon
              color={"white"}
              className={styles.closeIcon}
              onClick={showTransitionDetial}
            />
          </Box>

          <Card
            style={{
              width: "100%",
              padding: "0px 0px",
              borderRadius: "10px",
              backgroundColor: "#E9EFFD",
              marginTop: "10px",
            }}
          >
            <CardContent style={{ padding: "16px" }}>
              <Box
                display="flex"
                // justifyContent="space-between"
                // alignItems="center"
                flexDirection="column"
              >
                <Box className={styles.smallestBlueTitle}>Student ID</Box>
                <Box className={styles.smallText}>Benjamin Holmes</Box>
              </Box>
            </CardContent>
          </Card>

          <Box className={styles.grayLine}></Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            style={{ padding: "30px 0 20px 0" }}
          >
            <Box className={styles.orText}>Balance</Box>
            <Box className={styles.shareCodeText}>&#165;{amountForRefund}</Box>
          </Box>
        </Box>

        <Button
          className={styles.blueButton}
          style={{ width: "100%", height: "unset", borderRadius: "0px" }}
        >
          Issue Refund
        </Button>
      </Card>
    </Container>
  );
};

const MainComponent = ({ amount, heading }) => {
  const styles = useStyles();
  const [transitionDetial, setTransitionDetial] = useState(false);
  const showTransitionDetial = () => {
    setTransitionDetial(!transitionDetial);
  };
  return (
    <>
      <WhiteCard amount={amount} heading={heading} />
      <Box
        className={styles.mainHeading}
        lineHeight={"15px"}
        p={"30px 0px 20px 0"}
        // mt={"20px"}
      >
        Transactions
      </Box>
      <Transactions
        status={"recieved"}
        date={"20/01/2020"}
        time={"15:22"}
        amount={"210,643"}
        showTransitionDetial={showTransitionDetial}
      />
      <Transactions
        status={"recieved"}
        date={"20/01/2020"}
        time={"15:22"}
        amount={"210,643"}
        showTransitionDetial={showTransitionDetial}
      />
      <Transactions
        status={"recieved"}
        date={"20/01/2020"}
        time={"15:22"}
        amount={"210,643"}
        showTransitionDetial={showTransitionDetial}
      />

      <Transactions
        status={"recieved"}
        date={"20/01/2020"}
        time={"15:22"}
        amount={"210,643"}
        showTransitionDetial={showTransitionDetial}
      />
      <Transactions
        status={"recieved"}
        date={"20/01/2020"}
        time={"15:22"}
        amount={"210,643"}
        showTransitionDetial={showTransitionDetial}
      />
      {transitionDetial ? (
        <TransactionDetails
          amountForRefund={"1252.60"}
          time={"07:53"}
          date={"25/07/2020"}
          showTransitionDetial={showTransitionDetial}
        />
      ) : (
        ""
      )}
    </>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  return (
    <>
      {/* <WhiteCard heading={"Balance"} amount={"124,754"} /> */}
      <MainComponent heading={"Balance"} amount={"124,754"} />
    </>
  );
});
export default TeamCardDemo;
