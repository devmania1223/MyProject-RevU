import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { Fonts, BgColor, Color } from "../../theme/index";
import CloseIcon from "@material-ui/icons/Close";
import {
  Box,
  Button,
  Card,
  Grid,
  Container,
  Typography,
  CardContent,
} from "@material-ui/core";

const teacher = true;

const useStyles = makeStyles({
  root: {
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    marginRight: "15px",
  },
  media: {
    height: 140,
  },
  info: {
    color: "#2B65EC",
    textTransform: "initial",
    fontFamily: Fonts.Regular,
  },
  smallLightText: {
    color: BgColor.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    opacity: 0.2,
  },
  regularFont: {
    fontFamily: Fonts.Regular,
  },
  deleteIcon: {
    color: Color.textBlue,
    fontSize: "20px",
    marginBottom: "-4px",
    marginLeft: "10px",
    transition: "all .3s ease",
    "&:hover": {
      color: "#F50057",
    },
  },
  mainHeading: {
    fontSize: "20px",
    fontFamily: Fonts.Medium,
    opacity: ".8",
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
});

const ConfirmationOverlay = ({ openConfirmationOverlay }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.overlayWrapper}>
      <Card
        style={{
          maxWidth: "600px",
          width: "600px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Box p={"20px"}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box></Box>
            <Box
              className={classes.mainHeading2}
              style={{ textAlign: "center" }}
              pb={"10px"}
            >
              Are you sure you want to delete this?
            </Box>
            <CloseIcon
              style={{
                color: Color.textBlue,
                cursor: "pointer",
                marginTop: "-10px",
              }}
              onClick={openConfirmationOverlay}
            />
          </Box>
          <Button className={classes.whiteOutlinedButton}>Yes</Button>
          <Button className={classes.whiteOutlinedButton}>No</Button>
        </Box>
      </Card>
    </Container>
  );
};

const MyCard = ({
  standard,
  title,
  description,
  // teacher = false,
  ownLessonPlan = true,
  price,
  openLessonPlan,
  openConfirmationOverlay,
  confirmationOverlay,
}) => {
  const classes = useStyles();
  return (
    <div>
      {confirmationOverlay ? (
        <ConfirmationOverlay
          openConfirmationOverlay={openConfirmationOverlay}
        />
      ) : (
        ""
      )}
      <Card className={classes.root}>
        <CardContent style={{ padding: "6px" }}>
          <Box display="flex" justifyContent="space-between" mb={"5px"}>
            <Typography className={classes.smallLightText}>
              {standard}
            </Typography>

            <Box>
              <Typography
                variant="button"
                display="inline"
                className={classes.info}
              >
                ${price}
              </Typography>
              {teacher ? (
                <>
                  {ownLessonPlan ? (
                    <span>
                      <DeleteIcon
                        color={"white"}
                        className={classes.deleteIcon}
                        onClick={openConfirmationOverlay}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </Box>
          </Box>

          <div onClick={() => openLessonPlan()}>
            <Typography variant="button" display="block">
              <Box
                fontFamily={Fonts.Regular}
                fontSize={"18px"}
                lineHeight={"20px"}
              >
                {title} :<span>&nbsp;</span>
              </Box>
            </Typography>
            <Typography
              variant="body2"
              color={BgColor.myBlack}
              component="p"
              className={classes.regularFont}
            >
              {description}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  return (
    <Grid
      id
      style={{ marginRight: 0, marginTop: 15 }}
      item
      xs={12}
      md={6}
      lg={4}
    >
      <MyCard
        price={"124"}
        standard={"pre-intermediate"}
        title={"Introduction to Information & Technology"}
        description={
          "Write an essay on Earchquake for 560 five hundred and sixtywords."
        }
        openLessonPlan={props.openLessonPlan}
        openConfirmationOverlay={props.openConfirmationOverlay}
        confirmationOverlay={props.confirmationOverlay}
      />
    </Grid>
  );
});
export default TeamCardDemo;
