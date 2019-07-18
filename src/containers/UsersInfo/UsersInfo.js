import React, { Component } from "react";
import "./UserInfo.css";
import UserInfoComponent from "../../components/UserInfoComponent/UserInfoComponent";
class UsersInfo extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div
        className="column box cardContent scrollable is-half"
        style={{
          height: "90%",
          maxHeight: "90%",
          overflowY: "auto",
          overflowX: "hidden",
          marginRight: "5px",
        }}
      > <p className="title">Users</p>
        <UserInfoComponent />
      </div>
    );
  }
}

export default UsersInfo;
