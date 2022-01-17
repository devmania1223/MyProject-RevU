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
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import AccountBalanceWalletOutlined from "@material-ui/icons/AccountBalanceWalletOutlined";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Drawer from "./drawer";
import { Divider } from "@material-ui/core";
import { Color, Fonts } from "../../theme/index";

const drawerWidth = 240;

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
    zIndex: 100,
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
    fontFamily: Fonts.Regular,
    borderRadius: "5px",
    border: "1px solid transparent",
    backgroundColor: "#fff",
    transition: "all .3s ease",
    "&:focus": {
      border: "1px solid" + Color.textBlue,
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
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  chip: {
    marginRight: theme.spacing(3),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: Color.textBlue,
    fontFamily: Fonts.Regular,
    borderColor: Color.textBlue,
    padding: "0 5px",
  },
});

const mobileMenuId = "primary-search-account-menu-mobile";
const menuId = "primary-search-account-menu";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileAnchor: null,
      profileAnchor: null,
    };
  }

  handleMobileMenuOpen = (event) => {
    this.setState({
      mobileAnchor: event.currentTarget,
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    });
  };

  handleProfileMenuOpen = (event) => {
    // alert('works')
    this.setState({
      mobileProfileAnchor: event.currentTarget,
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  handleMenuClose = (event) => {
    this.setState({
      mobileProfileAnchor: false,
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileAnchor: null,
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    });
  };

  renderMenu = () => {
    return (
      <Menu
        anchorEl={this.state.mobileAnchor}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={this.state.isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  };

  renderProfileMenu = () => {
    return (
      <Menu
        anchorEl={this.state.profileAnchor}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        // open={this.state.isMenuOpen}
        // onClose={this.handleMenuClose}
      >
        {/* <MenuItem
        // onClick={handleMenuClose}
        >
          Profile
        </MenuItem>
        <MenuItem
        // onClick={handleMenuClose}
        >
          My account
        </MenuItem> */}
      </Menu>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="fixed" className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.Drawer.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Avatar sizes={20} src={logo} />
            <Typography className={classes.title} variant="h6" noWrap>
              Irevu
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                // style={{ fontFamily: Fonts.Regular, backgroundColor: "#fff" }}
              />
            </div>

            <div className={classes.grow} />

            <Chip
              icon={<AccountBalanceWalletOutlined />}
              label="Ballance RMB : 28.75"
              clickable
              color="primary"
              onDelete={() => {}}
              deleteIcon={<ArrowRight style={{ color: Color.textBlue }} />}
              variant="outlined"
              className={classes.chip}
            />

            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => this.props.history.push("/notifications")}
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle
                  onClick={() => this.props.history.push("/view-account")}
                />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>

          {this.renderMenu()}
          {this.renderProfileMenu()}
        </AppBar>

        <Drawer
          history={this.props.history}
          hasRef={(ref) => (this.Drawer = ref)}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);

// export default function PrimarySearchAppBar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
// <Menu
//   anchorEl={mobileMoreAnchorEl}
//   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//   id={mobileMenuId}
//   keepMounted
//   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//   open={isMobileMenuOpen}
//   onClose={handleMobileMenuClose}
// >
//   <MenuItem>
//     <IconButton aria-label="show 4 new mails" color="inherit">
//       <Badge badgeContent={4} color="secondary">
//         <MailIcon />
//       </Badge>
//     </IconButton>
//     <p>Messages</p>
//   </MenuItem>
//   <MenuItem>
//     <IconButton aria-label="show 11 new notifications" color="inherit">
//       <Badge badgeContent={11} color="secondary">
//         <NotificationsIcon />
//       </Badge>
//     </IconButton>
//     <p>Notifications</p>
//   </MenuItem>
//   <MenuItem onClick={handleProfileMenuOpen}>
//     <IconButton
//       aria-label="account of current user"
//       aria-controls="primary-search-account-menu"
//       aria-haspopup="true"
//       color="inherit"
//     >
//       <AccountCircle />
//     </IconButton>
//     <p>Profile</p>
//   </MenuItem>
// </Menu>
//   );

//   return (
//     <div className={classes.grow}>

//   <AppBar position="fixed" className={classes.appBar} color="default">
//     <Toolbar>
//       <IconButton
//         edge="start"
//         className={classes.menuButton}
//         color="inherit"
//         aria-label="open drawer"
//       >
//         <MenuIcon />
//       </IconButton>
//       <Avatar sizes={20} src={logo} />
//       <Typography className={classes.title} variant="h6" noWrap>
//         Irevu
//       </Typography>
//       <div className={classes.search}>
//         <div className={classes.searchIcon}>
//           <SearchIcon />
//         </div>
//         <InputBase
//           placeholder="Search…"
//           classes={{
//             root: classes.inputRoot,
//             input: classes.inputInput,
//           }}
//           inputProps={{ 'aria-label': 'search' }}
//         />
//       </div>
//       <div className={classes.grow} />
//       <div className={classes.sectionDesktop}>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <IconButton aria-label="show 17 new notifications" color="inherit">
//           <Badge badgeContent={17} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <IconButton
//           edge="end"
//           aria-label="account of current user"
//           aria-controls={menuId}
//           aria-haspopup="true"
//           onClick={handleProfileMenuOpen}
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//       </div>
//       <div className={classes.sectionMobile}>
//         <IconButton
//           aria-label="show more"
//           aria-controls={mobileMenuId}
//           aria-haspopup="true"
//           onClick={handleMobileMenuOpen}
//           color="inherit"
//         >
//           <MoreIcon />
//         </IconButton>
//       </div>
//     </Toolbar>
//   </AppBar>
//       <CssBaseline />

//       {renderMobileMenu}
//       {renderMenu}

//   <SwipeableDrawer
//     className={classes.drawer}
//     variant="permanent"
//     classes={{
//       paper: classes.drawerPaper,
//     }}
//     // open={this.state.drawer}
//   >
//     <Toolbar />
//     <div className={classes.drawerContainer}>
//       <List>
//         {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   </SwipeableDrawer>

//     </div>
//   );
// }
