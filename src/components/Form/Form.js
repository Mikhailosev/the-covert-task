import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import * as actionCreators from "../../store/actions/index";
import axios from "../../axios-instance";
class Form extends Component {
  state = {
    commentForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Choose A title",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 80,
        },
        valid: false,
        touched: false,
      },
      text: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Fill this with the comment text",
        },
        value: "",
        validation: {
          required: true,
          minLength:1,
          maxLength: 128,
        },
        valid: false,
        touched: false,
      },
      telephoneNumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter your phone number here",
        },
        value: "",
        validation: {
          required: true,
          regex: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
  };
  componentDidMount() {
    console.log('"' + window.location.pathname + '"');
  }
//Getting data from the elements and posting it
  commentHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.commentForm) {
      formData[formElementIdentifier] = this.state.commentForm[
        formElementIdentifier
      ].value;
    }
    const comment = {
      commentPage: this.props.user.id,
      commentData: formData,
    }
        //Cleaning up a state for component to rerender clean

    this.setState({
        commentForm: {
          title: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Choose A title",
            },
            value: "",
            validation: {
              required: true,
              minLength: 5,
              maxLength: 80,
            },
            valid: false,
            touched: false,
          },
          text: {
            elementType: "textarea",
            elementConfig: {
              type: "text",
              placeholder: "Fill this with the comment text",
            },
            value: "",
            validation: {
              required: true,
              minLength:1,
              maxLength: 128,
            },
            valid: false,
            touched: false,
          },
          telephoneNumber: {
            elementType: "input",
            elementConfig: {
              type: "text",
              placeholder: "Enter your phone number here",
            },
            value: "",
            validation: {
              required: true,
              regex: true,
            },
            valid: false,
            touched: false,
          },
        },
        formIsValid: false,
        loading: false,
      });
    axios
      .post("/comments.json", comment)
      .then(response => {
        this.setState({ loading: false });
        this.props.onGetComments().then(response => {
          this.props.updatedOnClick();
        }).then(res=>{
            
        })
      })
      .catch(error => {
        this.setState({ loading: false });
      });
     
  };
//Checking if Validity rules exist for a certain field and if yes, check for them
  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.regex) {
      // eslint-disable-next-line
      const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
      isValid = new RegExp(regex).test(value);
    }

    return isValid;
  }
//Handling changes in input and displaying it if they occure
//Also applying classes tp my custom UI elements if needed
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedCommentForm = {
      ...this.state.commentForm,
    };
    const updatedFormElement = {
      ...updatedCommentForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedCommentForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedCommentForm) {
      formIsValid = updatedCommentForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      commentForm: updatedCommentForm,
      formIsValid: formIsValid,
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.commentForm) {
      formElementsArray.push({
        id: key,
        config: this.state.commentForm[key],
      });
    }
    let form = (
      <form onSubmit={this.commentHandler}>
        {formElementsArray.map(formElement => (
          <Input
          ref={(input)=>this.commentHandler=input}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button
          btnType="Success"
          clicked={() => {}}
          disabled={!this.state.formIsValid}
        >
          Post a comment
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your comment data</h4>
        {form}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    storedComments: state.users.comments,
    storedUsers: state.users.users,
    user: state.users.user,
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
)(Form);
