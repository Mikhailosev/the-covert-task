import React, { Component } from "react";
import DetailedUserInfoComponent from "../../../components/DetailedUserInfoComponent/DetailedUserInfoComponent";
import Comments from "../../../components/Comments/Comments";
import Form from "../../../components/Form/Form";
class Index extends Component {
  state = {
    updated: false,
  };

  updateOnClick = () => {
    console.log(this.state.updated);
    this.forceUpdate();

    console.log(this.state.updated);
  };

  render() {
    return (
      <div>
          {/* Root Container that i use in my Route */}
        <DetailedUserInfoComponent userId={this.props.match.params.userId} />
        <Comments />
        <Form
          location={this.props.match.params.userId}
          updatedOnClick={this.updateOnClick}
        />
      </div>
    );
  }
}

export default Index;
