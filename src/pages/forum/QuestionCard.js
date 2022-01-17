import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CardActionArea } from "@material-ui/core";
import { Fonts, Color, BgColor } from "../../theme/index";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: Fonts.Reguler,
    borderRadius: "10px",
    maxWidth: 345,
    marginTop: 20,
    marginRight: 7,
    marginBottom: 10,
    marginLeft: 5,
    "& .MuiCardHeader-title": {
      lineHeight: "16px",
    },
    "& .MuiTypography-body2": {
      fontFamily: Fonts.Regular,
    },
    "& .MuiCardHeader-subheader": {
      fontSize: "12px",
    },
    "& .MuiCardContent-root p": {
      lineHeight: "18px",
    },
    "& .MuiCardActions-root p": {
      fontFamily: Fonts.Medium,
    },
    "& .MuiCollapse-wrapperInner  .MuiTypography-body1": {
      fontFamily: Fonts.Regular,
      lineHeight: "20px",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardHeader: {
    fontFamily: Fonts.Medium,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log("sdf", props.data);
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          //   <CardActionArea>
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
          //   </CardActionArea>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent style={{ padding: "16px" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography
          variant="body2"
          style={{ color: "gray" }}
          color="textSecondary"
          component="p"
        >
          NOT ACCEPTED
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardHeader
            titleTypographyProps={{
              style: {
                marginLeft: -16,
              },
            }}
            subheaderTypographyProps={{
              style: {
                marginLeft: -16,
              },
            }}
            avatar={
              <Avatar aria-label="recipe" style={{ left: -16 }}>
                R
              </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
