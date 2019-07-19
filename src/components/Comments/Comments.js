import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
class Comments extends Component {
  render() {
      //Getting comments that we need
    let comments = [];

    if (this.props.storedComments) {
      const id = this.props.storedUser.id;
      this.props.storedComments.forEach(function(comment) {
        if (comment.commentPage === id) {
          comments.push(comment);
        }
      });
    }
    comments = comments.slice(Math.max(comments.length - 5, 1));
    console.log(comments);

    return (
      <div>
        <h1 className="title">Comments:</h1>
        {/* Displaying the comments */}
        {this.props.storedComments
          ? comments.map(comment => {
              return (
                <article key={Math.floor(Math.random() * (99999 - 0)) + 0}className="media box">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{comment.commentData.title}</strong>{" "}
                        <small>{comment.commentData.telephoneNumber}</small>
                        <br />
                        {comment.commentData.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
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
    onGetComments: id => dispatch(actionCreators.get_comments(id)),

    onGetUsers: () => dispatch(actionCreators.get_users()),
    onGetUser: user => dispatch(actionCreators.get_user(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
