import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useGraphicBtnStyles } from "@mui-treasury/styles/button/graphic";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const teacher = true;

const useStyles = makeStyles({
  root: {
    // paddingTop: "10px",
    // paddingBottom: "10px",
    padding: "10px",
    // backgroundColor: "rgba(43,101,236,.05)",
    marginRight: "15px",
  },
  media: {
    height: 140,
  },
  info: {
    color: "#2B65EC",
    textTransform: "initial",
  },
  danger: {
    color: "#F47364",
  },
});

const MyCard = ({
  thumbnail,
  title,
  subtitle,
  description,
  joined = false,
}) => {
  const classes = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent style={{ padding: "16px" }}>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="h2">
              Assignment# 1
            </Typography>
            <Typography
              variant="button"
              variant="caption"
              display="inline"
              gutterBottom
            >
              Submitted :<span>&nbsp;</span>
              <Typography
                variant="button"
                display="inline"
                gutterBottom
                className={classes.info}
                style={{ fontSize: "16px" }}
              >
                <strong>13</strong>
              </Typography>
              <Typography
                variant="button"
                display="inline"
                gutterBottom
                className={classes.join}
              >
                /40
              </Typography>
            </Typography>
          </Box>
          <Box component="span" display="block" mt={"20px"}>
            <Typography variant="button" display="inline" gutterBottom>
              Class :<span>&nbsp;</span>
              <Typography
                variant="caption"
                display="inline"
                gutterBottom
                className={classes.info}
              >
                FSC-1
              </Typography>
            </Typography>
          </Box>
          <Box component="span" display="block">
            <Typography variant="button" display="inline" gutterBottom>
              Subject :<span>&nbsp;</span>
              <Typography
                variant="caption"
                display="inline"
                gutterBottom
                className={classes.info}
              >
                Physics
              </Typography>
            </Typography>
          </Box>
          <Box component="span" display="block">
            <Typography variant="button" display="inline" gutterBottom>
              Category :<span>&nbsp;</span>
              <Typography
                variant="caption"
                display="inline"
                gutterBottom
                className={classes.info}
              >
                Essay
              </Typography>
            </Typography>
          </Box>
          <Box component="span" display="block">
            <Typography variant="button" display="inline" gutterBottom>
              Topic:<span>&nbsp;</span>
              <Typography
                variant="caption"
                display="inline"
                gutterBottom
                className={classes.info}
              >
                Earthquake
              </Typography>
            </Typography>
          </Box>

          <Box component="span" display="block">
            <Typography variant="button" display="inline" gutterBottom>
              Issue Date :<span>&nbsp;</span>
              <Typography
                variant="caption"
                display="inline"
                gutterBottom
                className={classes.info}
              >
                04/06/2020
              </Typography>
            </Typography>
          </Box>
          <Box component="span" display="block">
            <Typography variant="button" display="inline" gutterBottom>
              Last Date :<span>&nbsp;</span>
              <Typography
                variant="caption"
                display="inline"
                gutterBottom
                className={classes.danger}
              >
                15/06/2020
              </Typography>
            </Typography>
          </Box>
          <Typography variant="button" display="block">
            <Box fontWeight="bold" mt={"20px"}>
              Assignment :<span>&nbsp;</span>
            </Box>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Write an essay on Earchquake for 560 five hundred and sixty words.
          </Typography>
        </CardContent>

        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
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
        md={6}
        lg={4}
      >
        <MyCard />
      </Grid>
    </>
  );
});
export default TeamCardDemo;
