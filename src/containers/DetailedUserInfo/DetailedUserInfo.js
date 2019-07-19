import React, { Component } from "react";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import IndexForm from "./IndexForm/IndexForm";
class DetailedUserInfo extends Component {
  componentWillUpdate() {
    this.render();
  }
  render() {
    return (
      <div
        className="column  cardContent scrollable box is-half"
        style={{
          height: "90%",
          maxHeight: "90%",
          overflowY: "auto",
          overflowX: "hidden",
          marginRight: "5px",
        }}
      >
        <h1 className="title">Detailed information</h1>
        {this.props.storedUsers ? (
          <div>
           
              <Route path="/user/:userId" component={IndexForm} />
          
          </div>
        ) : null}
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
)(DetailedUserInfo);
