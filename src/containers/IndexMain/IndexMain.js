import React, { Component } from "react";
import PersonSelect from "../PersonSelect/PersonSelect";
import UsersInfo from "../UsersInfo/UsersInfo";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import DetailedUserInfo from "../DetailedUserInfo/DetailedUserInfo";
class Index extends Component {
  componentDidMount() {}
  render() {
    return (
      // Root component that i use in my Route
      <div>
        <PersonSelect />

        <div
          className="columns is-fullheight is-desktop"
          style={{
            margin: "15px",
            height: "600px",
          }}
        >
          <UsersInfo />
          <DetailedUserInfo />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    storedUsers: state.users.users,
    storedUser: state.users.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUsers: () => dispatch(actionCreators.get_users()),
    onGetUser: user => dispatch(actionCreators.get_user(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
