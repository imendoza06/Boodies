import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Sign/LogIn/LogIn";
import Signup from "./components/Sign/SignUp/SignUp";
import Search from "./components/Search/Search";
import UserProfile from "./components/Users/UserProfile/UserProfile";
import BusProfile from "./components/Business/BusinessProfile/BusinessProfile";
import BusProfileAdd from "./components/Business/BusinessProfile/AddBusiness";
import MapContainer from "./components/Map/MapContainer";

import Api from "../src/components/Api/Api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      profile: "",
      searchName: "",
      searchAddress: "",

      studioSearch: [],
      studiosData: [],
      studioarr: [],

      singlestudio: [],
      singlestudiouserid: "",
      studioname: "",
      studioroomsid: [],
      studioroomsname: [],
      studioabout: "",
      studiodescription: "",
      studioaddress: "",
      studiocity: "",
      studiostate: "",
      studiozip: "",
      studiohours: "",
      studioprice: "",
      amenities: "",
      rules: "",
      studioimage: "",
      studiocategory: [],

      userloggedin: "",
      userloggedfname: "",
      userloggedlname: "",
      userloggedid: "",
    };
  }
  componentDidMount() {
    this.getAllStudiosInformation();
  }

  getAllStudiosInformation = () => {
    Api.getAllStudios()
      .then(response => {
        console.log("Response: ", response);
        console.log("Response Data: ", response.data);
        this.setState({
          studioarr: response.data.data,
          studiosData: response.data.data
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  handleLoginInfo = (username) => {
    Api.getSingleUser(username)
      .then(response => {
        console.log("Response: ", response);
        console.log("Response Data: ", response.data);
        this.setState({
          userloggedin: response.data.data,
          userloggedfname: response.data.data[0].first_name,
          userloggedlname: response.data.data[0].last_name,
          userloggedid: response.data.data[0].user_id
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  handleSingleStudio = id => {
    Api.getSingleStudioInfo(id)
      .then(response => {
        console.log("Response: ", response);
        console.log("Response Data: ", response.data);
        this.setState({
          singlestudio: response.data.data,
          singlestudiouserid: response.data.data[0].user_id,
          studioname: response.data.data[0].organization_name,
          studioabout: response.data.data[0].about,
          studiodescription: response.data.data[0].description_summary,
          studioaddress: response.data.data[0].address_line_1,
          studiocity: response.data.data[0].city,
          studiostate: response.data.data[0].state,
          studiozip: response.data.data[0].zip_code,
          studiohours: response.data.data[0].hour,
          studioprice: response.data.data[0].price,
          amenities: response.data.data[0].amenities,
          rules: response.data.data[0].rules,
          studioimage: response.data.data[0].image_url,
          studiocategory: response.data.data[0].disciplines,
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  handleLogin = (login, profile) => {
    this.setState({
      isLoggedIn: login,
      profile: profile
    });
  };

  handleSearchName = name => {
    this.setState({
      searchName: name
    });
  };

  handleSearchAddress = address => {
    this.setState({
      searchAddress: address
    });
  };

  handleStudioSearch = studio => {
    this.setState({
      studioSearch: studio
    });
  };


  render() {
    console.log(this.state.studioSearch);
    console.log("Studio Array : ", this.state.singlestudio);
    console.log("Studio Rules : ", this.state.rules);
    console.log(this.state.isLoggedIn)
    console.log(this.state.userloggedin)
    console.log(this.state.userloggedfname)
    console.log(this.state.userloggedlname)
    console.log(this.state.userloggedid)


    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              handleStudioSearch={this.handleStudioSearch}
              handleSearchName={this.handleSearchName}
              handleSearchAddress={this.handleSearchAddress}
              studioarr={this.state.studioarr}
              studioSearch={this.state.studioSearch}
              isLogged={this.state.isLoggedIn ? true : false}
              protype={this.state.profile ? "Host" : "User"}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={props => (
            <About
              isLogged={this.state.isLoggedIn ? true : false}
              protype={this.state.profile ? "Host" : "User"}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/contact"
          render={props => (
            <Contact
              isLogged={this.state.isLoggedIn ? true : false}
              protype={this.state.profile ? "Host" : "User"}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => <Login handleLogin={this.handleLogin}
            handleLoginInfo={this.handleLoginInfo}{...props} />}
        />
        <Route exact path="/signup" component={Signup} />
        <Route
          path="/search"
          render={props => (
            <Search
              handleStudioSearch={this.handleStudioSearch}
              handleSingleStudio={this.handleSingleStudio}
              singlestudiouserid={this.state.singlestudiouserid}
              studioname={this.state.studioname}
              studioabout={this.state.studioabout}
              studiodescription={this.state.studiodescription}
              studioaddress={this.state.studioaddress}
              studiocity={this.state.studiocity}
              studiostate={this.state.studiostate}
              studiozip={this.state.studiozip}
              studiohours={this.state.studiohours}
              studioprice={this.state.studioprice}
              amenities={this.state.amenities}
              studioimage={this.state.studioimage}
              studiocategory={this.state.studiocategory}
              rules={this.state.rules}
              studioarr={this.state.studioarr}
              studioSearch={this.state.studioSearch}
              isLogged={this.state.isLoggedIn ? true : false}
              protype={this.state.profile ? "Host" : "User"}
              name={this.state.searchName}
              address={this.state.searchAddress}
              handleSearchName={this.handleSearchName}
              handleSearchAddress={this.handleSearchAddress}
              {...props}
            />
          )}
        />
        <Route
          path="/userprofile"
          render={props => (
            <UserProfile isLogged={this.state.isLoggedIn}
              userloggedfname={this.state.userloggedfname}
              userloggedlname={this.state.userloggedlname}
              userloggedid={this.state.userloggedid}
              {...props} />
          )}
        />
        <Route
          path="/hostprofile"
          render={props => (
            <BusProfile isLogged={this.state.isLoggedIn}
              userloggedfname={this.state.userloggedfname}
              userloggedlname={this.state.userloggedlname}
              userloggedid={this.state.userloggedid}
              {...props} />
          )}
        />
        <Route exact path="/MapContainer" component={MapContainer} />
        <Route exact path="/add" component={BusProfileAdd} />
      </div>
    );
  }
}

export default App;
