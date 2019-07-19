import React, { Component } from "react";
import "./PersonSelect.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import gravatar from "gravatar";
import { Link } from "react-router-dom";
class PersonSelect extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    this.props.onGetUsers();

    console.log(this.props);
  }
  render() {
    console.log(gravatar.url("gravatar@gmail.com"));

    return (
      <header className="card-content nav">
        {this.props.storedUsers
        // Displaying all the users avatars
          ? this.props.storedUsers.map(user => (
              <Link key={user.id}to={"/user/" + user.id}>
                <img
                  onClick={() => this.props.onGetUser(user)}
                  className="card--content nav-image shrink"
                  src={gravatar.url(user.email)}
                  alt=""
                />
              </Link>
            ))
          : null}
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    storedUsers: state.users.users,
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
)(PersonSelect);
