import React, { Component } from "react";
import "./UserInfoComponent.css";
import gravatar from "gravatar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
class UserInfoComponent extends Component {
  render() {
    return (
      <div>
        {/* Displaying all the users */}
        {this.props.storedUsers
          ? this.props.storedUsers.map(user => (
              <Link
                onClick={event => {
                  this.props.onGetUser(user);
                  this.props.onGetComments();
                }}
                key={user.id}
                className="media"
                to={"/user/" + user.id}
              >
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img className="" src={gravatar.url(user.email)} alt="" />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>
                        {user.firstName} {user.lastName}
                      </strong>
                      <br />
                      {user.position}
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left" />
                  </nav>
                </div>
              </Link>
            ))
          : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    storedComments: state.users.comments,
    storedUsers: state.users.users,
    storedUser: state.users.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetComments: () => dispatch(actionCreators.get_comments()),
    onGetUsers: () => dispatch(actionCreators.get_users()),
    onGetUser: user => dispatch(actionCreators.get_user(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoComponent);
