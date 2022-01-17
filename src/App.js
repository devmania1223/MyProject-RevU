import React from "react";
import "./App.css";
import logo from "./logo.svg";
import "slick-carousel/slick/slick.css";
import { Header } from "./components";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/main-style.css";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  MainPage,
  Dashboard,
  Forum,
  YourClasses,
  HomeWork,
  LessonPlan,
  EarnPoints,
  Notifications,
  ReferralLink,
  Wallet,
  ContactUs,
  ViewAccount,
  Register,
  Results,
} from "./pages";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("this.props.history from app", this.props.history);

    return (
      <div
        style={
          {
            // border: "3px solid green",
            // zIndex: "1300",
            // position: "fixed",
          }
        }
      >
        {/* <Header history={this.props.history} /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/forum" component={Forum} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/your-classes" component={YourClasses} />
            <Route path="/home-work" component={HomeWork} />
            <Route path="/lesson-plan" component={LessonPlan} />
            <Route path="/earn-points" component={EarnPoints} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/referral-link" component={ReferralLink} />
            <Route path="/view-account" component={ViewAccount} />
            <Route path="/register" component={Register} />
            <Route path="/results" component={Results} />
          </Switch>
        </Router>
      </div>
    );
  }
}
