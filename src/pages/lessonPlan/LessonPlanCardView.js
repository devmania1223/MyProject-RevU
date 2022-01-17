import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { profileImg1 } from "../../assets/index";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Fonts, BgColor, Color } from "../../theme/index";

const teacher = true;

const useStyles = makeStyles({
  root: {
    padding: "10px",
    borderRadius: "10px",
    // marginRight: "15px",
  },
  media: {
    height: 140,
  },
  info: {
    color: "#2B65EC",
    textTransform: "initial",
    fontFamily: Fonts.Regular,
  },
  smallText: {
    // color: BgColor.myBlack,
    // fontSize: "14px",
    // fontFamily: Fonts.Regular,
    // opacity: 0.2,
    color: BgColor.myBlack,
    fontSize: "13px",
    fontFamily: Fonts.Regular,
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
  smallLightText: {
    color: BgColor.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    opacity: 0.2,
  },
  regularFont: {
    fontFamily: Fonts.Regular,
  },

  profileImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50px",
    marginRight: "7px",
  },
  smallLightText: {
    color: BgColor.myBlack,
    fontSize: "14px",
    fontFamily: Fonts.Regular,
    opacity: 0.2,
  },
  // profileImg: {
  //   width: "50px",
  //   height: "50px",
  //   borderRadius: "50px",
  // },
  smallText: {
    color: BgColor.myBlack,
    fontSize: "16px",
    fontFamily: Fonts.Regular,
  },
  smallerTitle: {
    fontSize: "12px",
    fontFamily: Fonts.Regular,
    textTransform: "uppercase",
    // opacity: ".6",
    padding: "5px 0 0 0",
    margin: "0",
  },
  priceInBlue: {
    color: Color.textBlue,
    fontSize: "22px",
    fontFamily: Fonts.Medium,
  },
});

const MyCard = ({
  standard,
  title,
  description,
  ownLessonPlan = true,
  price,
  sellerName,
  sellerProfileImg,
  openPayCard,
  openLessonPlan,
}) => {
  const classes = useStyles();
  // const [openPayCard, SetOpenPayCard] = useState(false);
  return (
    <div>
      <Box
        display="flex"
        // flexDirection="column"
        justifyContent="space-between"
        // alignItems="center"
      >
        <Box></Box>
        <CloseIcon
          style={{ color: Color.textBlue, cursor: "pointer" }}
          onClick={openLessonPlan}
        />
      </Box>
      <Grid
        style={{ marginRight: 0, marginTop: 15 }}
        item
        xs={12}
        md={8}
        lg={5}
      >
        <Card className={classes.root} style={{ marginBottom: "10px" }}>
          <CardContent style={{ padding: "16px" }}>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" justifyContent="space-between">
                <img src={sellerProfileImg} className={classes.profileImg} />
                <Box>
                  <Box className={classes.smallText}>{sellerName}</Box>
                  <Typography className={classes.smallLightText}>
                    {standard}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" textAlign="end">
                <Typography className={classes.smallerTitle}>Price</Typography>
                <Box className={classes.priceInBlue}>$125</Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent style={{ padding: "16px" }}>
            <Box
              // display="flex"
              flexDirection="column"
              // justifyContent="center"
              // alignItems="center"
            >
              <Box variant="button" display="block">
                <Box
                // display="flex"
                // justifyContent="space-between"
                >
                  <Box>
                    <Typography className={classes.smallLightText}>
                      {standard}
                    </Typography>
                    <Box fontFamily={Fonts.Regular} fontSize={"22px"}>
                      Physics-2
                    </Box>
                  </Box>
                  {/* <DeleteIcon /> */}
                </Box>
              </Box>
              <Typography
                variant="body2"
                color={BgColor.myBlack}
                component="p"
                className={classes.regularFont}
              >
                {description}
              </Typography>
              <Box
                display="flex"
                // flexDirection="column"
                justifyContent="flex-end"
                // alignItems="center"
              >
                {teacher ? (
                  ""
                ) : (
                  <Button className={classes.blueButton}>Purchase</Button>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Button
          className={classes.blueButton}
          style={{ marginTop: "20px", width: "100%" }}
          onClick={() => openPayCard()}
        >
          Purchase the Complete Paper
        </Button>
      </Grid>
    </div>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  return (
    <MyCard
      standard={"pre-intermediate"}
      title={"Introduction to Information & Technology"}
      price={"124"}
      sellerName={"Tyler Elliot"}
      sellerProfileImg={profileImg1}
      openPayCard={props.openPayCard}
      openLessonPlan={props.openLessonPlan}
      description={
        "Write an essay on Earchquake for 560 five hundred and sixtywords. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1."
      }
    />
  );
});
export default TeamCardDemo;
