import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Fonts, BgColor, Color } from "../../theme/index";

const teacher = true;

const useStyles = makeStyles({
  root: {
    padding: "10px",
    borderRadius: "10px",
    marginTop: "10px",
  },
  media: {
    height: 140,
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
});

const MyCard = ({
  title,
  description,
  pointsForStudents,
  pointsForTeachers,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent style={{ padding: "16px" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              fontFamily={Fonts.Regular}
              fontSize={"22px"}
              textAlign="center"
              pb={"10px"}
              color={Color.textBlue}
            >
              {title}
            </Box>

            <Typography
              variant="body2"
              color={Color.textMyBlack}
              component="p"
              className={classes.regularFont}
              style={{ textAlign: "center" }}
            >
              {description}
            </Typography>
            <Box pt={"10px"}>
              <Typography className={classes.LightText}>
                {pointsForStudents}
              </Typography>
              <Typography className={classes.LightText}>
                {pointsForTeachers}
              </Typography>
            </Box>
            <Box
              display="flex"
              // flexDirection="column"
              justifyContent="flex-end"
              // alignItems="center"
            >
              {/* {teacher ? (
                  ""
                ) : (
                  <Button className={classes.blueButton}>Purchase</Button>
                )} */}
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent style={{ padding: "16px" }}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Box className={classes.smallText}>Referals</Box>
              <Box className={classes.blueNumbersText}>21</Box>
            </Box>
            <Box>
              <Box className={classes.smallText}>Points from referals</Box>
              <Box className={classes.blueNumbersText}>25</Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export const TeamCardDemo = React.memo(function TeamCard() {
  return (
    <>
      <Grid
        style={{ marginRight: 0, marginTop: 15 }}
        item
        xs={12}
        md={8}
        lg={5}
      >
        <MyCard
          pointsForStudents={"50 points for student"}
          pointsForTeachers={"50 points for teacher"}
          title={"Invite Teacher & Students"}
          description={
            "Remember the more teachers and students on the platform, the more chances you have of making money and points."
          }
        />
      </Grid>
    </>
  );
});
export default TeamCardDemo;
