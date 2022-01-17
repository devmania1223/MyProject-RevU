import React from "react";
import { logo } from "../../assets";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
// import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
// import MontserratBold from '../../assets/fonts/Montserrat-Bold.ttf'
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Divider from "@material-ui/core/Divider";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import ForumOutlined from "@material-ui/icons/ForumOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ClassOutlinedIcon from "@material-ui/icons/ClassOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import ScoreOutlinedIcon from "@material-ui/icons/ScoreOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import SchoolOutlined from "@material-ui/icons/SchoolOutlined";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeWorkOutlined from "@material-ui/icons/HomeWorkOutlined";
import ClassOutlined from "@material-ui/icons/ClassOutlined";
import ListAltOutlined from "@material-ui/icons/ListAltOutlined";
import MenuBookOutlined from "@material-ui/icons/MenuBookOutlined";
import FindInPageOutlined from "@material-ui/icons/FindInPageOutlined";
import LanguageOutlined from "@material-ui/icons/LanguageOutlined";
import SupervisorAccountOutlined from "@material-ui/icons/SupervisorAccountOutlined";
import Link from "@material-ui/icons/Link";
import { BgColor, Fonts, Color } from "../../theme";
import Box from "@material-ui/core/Box";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
const drawerWidth = 240;
const teacher = true;

// import StarBorder from '@material-ui/icons/StarBorder';

const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#2b65ec",
    fontWeight: "800",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  //Drawer

  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // width: "50px",
  },
  drawerContainer: {
    overflow: "auto",
    // border: "1px solid red",
    // borderBottom: "3px solid yellow",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  activeBtn: {
    backgroundColor: "rgba(82, 129, 239,0.2)",
    borderLeft: "4px solid" + BgColor.myBlue,
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
    paddingTop: "10px",
    paddingBottom: "10px",
    transition: "all .2s ease",
    "& > .MuiListItemIcon-root": {
      color: BgColor.myBlue,
    },
    "& .MuiSvgIcon-root": {
      transition: "all .2s ease",
    },
    "& > .MuiTypography-body1": { fontFamily: Fonts.Regular },
  },
  navigationText: {
    fontSize: "15px",
    fontFamily: Fonts.Regular,
  },
  navButtons: {
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
    paddingTop: "10px",
    paddingBottom: "10px",
    "& .MuiSvgIcon-root": {
      transition: "all .2s ease",
    },
  },
});
// let abc = "em";
class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: true,
      menu: [
        {
          active: false,
          title: "Dashboard",
          icon: <HomeOutlined />,
          expandable: false,
          key: "dashboard",
          link: "/",
        },
        {
          active: false,
          title: "Forum",
          icon: <ForumOutlined />,
          expandable: false,
          key: "forum",
          link: "/forum",
        },
        // {
        //   title: "Classes",
        //   icon: <SchoolOutlined />,
        //   key: "classes",
        //   expandable: [
        //     {

        //       title: "Your Classes",
        //       icon: <ClassOutlined />,
        //       key: "classes/yourclasses",
        //     },
        //     {

        //       title: "Homworks",
        //       icon: <HomeWorkOutlined />,
        //       key: "classes/homeworks",
        //     },
        //   ],
        // },
        {
          active: false,
          title: "Notifications",
          icon: <NotificationsOutlinedIcon />,
          expandable: false,
          key: "notifications",
          link: "/notifications",
        },
        {
          active: false,
          title: "Classes",
          icon: <ClassOutlinedIcon />,
          expandable: false,
          key: "your-classes",
          link: "/your-classes",
        },
        {
          active: false,
          title: "Home Work",
          icon: <WorkOutlineOutlinedIcon />,
          expandable: false,
          key: "home-work",
          link: "/home-work",
        },
        // {
        //   title: "Lesson Plans",
        //   icon: <ListAltOutlined />,
        //   key: "lesson",
        //   expandable: [
        //     {

        //       title: "Browse Lesson Plans",
        //       icon: <FindInPageOutlined />,
        //       key: "lesson/browselessonplans",
        //     },
        //     {

        //       title: "Your Lesson Plans",
        //       icon: <MenuBookOutlined />,
        //       key: "lesson/yourlessonplans",
        //     },
        //   ],
        // },
        {
          active: false,
          title: teacher ? "Lesson Plans" : "Resources",
          icon: <NoteOutlinedIcon />,
          expandable: false,
          key: "lesson-plan",
          link: "/lesson-plan",
        },
        {
          active: false,
          title: "Earn Points",
          icon: <ScoreOutlinedIcon />,
          expandable: false,
          key: "earn-points",
          link: "/earn-points",
        },
        {
          active: false,
          title: teacher ? "Referral Link" : "Send Referral Link",
          icon: <Link />,
          expandable: false,
          key: "referral-link",
          link: "/referral-link",
        },
        {
          active: false,
          title: "Results",
          icon: <NoteOutlinedIcon />,
          expandable: false,
          key: "results",
          link: "/results",
        },
        {
          active: false,
          title: "Wallet",
          icon: <NoteOutlinedIcon />,
          expandable: false,
          key: "wallet",
          link: "/wallet",
        },
        {
          active: false,
          title: "Contact us",
          icon: <ContactPhoneOutlinedIcon />,
          expandable: false,
          key: "contact-us",
          link: "/contact-us",
        },
        {
          active: false,
          title: "View Account",
          icon: <AccountCircleOutlinedIcon />,
          expandable: false,
          key: "view-account",
          link: "/view-account",
        },
        {
          active: false,
          title: "Academic English",
          icon: <LanguageOutlined />,
          key: "academic_english",
          expandable: [
            {
              active: true,
              title: "Teacher Questions",
              icon: <SupervisorAccountOutlined />,
              key: "academic_english/teacherquestions",
            },
          ],
        },
      ],
    };
  }

  componentWillMount() {
    // if (this.props.hasRef) {
    //   this.props.hasRef(this);
    // }
    // console.log("histo", this.props.history.location.pathname);
    // console.log("em", abc);
    // if ((this.props.history.location.pathname = abc)) {
    //   console.log("em han he");
    // }
    //  let _menu = this.state.menu;
    // let getItemPosition: 0;
    // for (let i = 0; i < _menu.length; i++) {
    //   _menu[i].active = false;
    //   if (_menu[i].title == title2) {
    //     getItemPosition = i + 1;
    //   }
    // }
    // _menu[getItemPosition - 1].active = true;
    // this.setState({ menu: _menu });
    // console.log("a 444 final menu", this.state.menu);
  }

  toggleDrawer = () => {
    this.setState({
      drawer: !this.state.drawer,
    });
  };

  activeNavigation = (title2) => {
    let _menu = this.state.menu;
    let getItemPosition: 0;
    for (let i = 0; i < _menu.length; i++) {
      _menu[i].active = false;
      if (_menu[i].title == title2) {
        getItemPosition = i + 1;
      }
    }
    _menu[getItemPosition - 1].active = true;
    this.setState({ menu: _menu });
    // console.log("a 444 final menu", this.state.menu);
  };

  render() {
    const { classes } = this.props;
    const state = this.state;
    return (
      <SwipeableDrawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={this.state.drawer}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {this.state.menu.map((item, index) => {
              return (
                <>
                  <ListItem
                    onClick={() => {
                      this.props.history.push(item.link);
                      this.activeNavigation(item.title);

                      if (item.expandable) {
                        this.setState({
                          [item.key]: !this.state[item.key],
                        });
                      } else {
                      }
                    }}
                    button
                    key={item.title + index}
                    className={
                      !item.active ? classes.navButtons : classes.activeBtn
                    }
                    style={{
                      borderBottom:
                        index == state.menu.length - 1
                          ? "1px solid rgba(0, 0, 0, 0.05)"
                          : "",
                      borderTop:
                        index == 0 ? "0px solid rgba(0, 0, 0, 0.05)" : "",
                      marginTop: index == 0 ? "-5px" : "",
                    }}
                  >
                    <ListItemIcon style={{ marginRight: "-15px" }}>
                      {item.icon}
                    </ListItemIcon>
                    <Box className={classes.navigationText}>{item.title}</Box>
                    {/* <ListItemText primary={item.title} /> */}
                    {item.expandable &&
                      (this.state[item.key] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItem>
                  {item.expandable && (
                    <Collapse
                      in={this.state[item.key]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.expandable.map((expand, Tindex) => {
                          return (
                            <ListItem
                              className={classes.nested}
                              button
                              key={expand.title + Tindex}
                            >
                              <ListItemIcon style={{ marginRight: "-15px" }}>
                                {expand.icon}
                              </ListItemIcon>
                              {/* <ListItemText primary={expand.title} /> */}
                              <Box className={classes.navigationText}>
                                {expand.title}
                              </Box>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  )}
                </>
              );
            })}
          </List>
          {/* <Divider /> */}
          {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List> */}
        </div>
      </SwipeableDrawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerComponent);
