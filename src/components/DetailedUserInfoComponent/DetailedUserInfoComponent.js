import React, { Component } from "react";
import gravatar from "gravatar";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index.js";
class DetailedUserInfoComponent extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    this.props.storedUsers.map(user => {
      // eslint-disable-next-line
      if (this.props.userId == user.id) {
        this.props.onGetUser(user);
        this.props.onGetComments();
      }
    });
  }
  render() {
    return (
      <div>
        {/* Getting stored user displayed */}
        {this.props.storedUser ? (
          <article key={this.props.storedUser.id} className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  className=""
                  src={gravatar.url(this.props.storedUser.email)}
                  alt=""
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>
                    {this.props.storedUser.firstName}{" "}
                    {this.props.storedUser.lastName}
                  </strong>{" "}
                  <small>{this.props.storedUser.email}</small>
                  <br />
                  {this.props.storedUser.position}
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left" />
              </nav>
            </div>
          </article>
        ) : null}
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
    onGetComments: id => dispatch(actionCreators.get_comments(id)),

    onGetUsers: () => dispatch(actionCreators.get_users()),
    onGetUser: user => dispatch(actionCreators.get_user(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedUserInfoComponent);
