import React from 'react';

import FormInput from '../../FormInput/form-input.component';
import CustomButton from '../../CustomButton/custom-button.component';

import { updateCurrentUser } from '../../../store/actions';

import './sign-up.styles.css';
import SignUpApi from '../../../api/SignUpApi';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // const nameFormat = /^([a-z0-9]){5,30}$/;
    // const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { displayName, email, password, confirmPassword } = this.state;
    if (!displayName || !email || !password) {
      alert("please provide information");
      return;
    }
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    // if (!email.match(emailFormat)) {
    //   alert("invalid email");
    //   return;
    // }
    // if (!displayName.match(nameFormat)) {
    //   alert("invalid username");
    //   return;
    // }
    if (password.length < 6 || password.length > 30) {
      alert("password must contain at least 6 character long");
      return;
    }
    try {
      const user = await SignUpApi(displayName, email, password)
      if(!user){
        alert("cannot create user");
      }
      if (user.error) {
        alert("cannot create user");
        return;
      }
      this.props.updateCurrentUser(user);
      return
    } catch (e) {
      console.log(e)
    }
    alert("failed to signup")

  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateCurrentUser : (currentUser) => dispatch(updateCurrentUser(currentUser))
  }
}

export default connect(null,mapDispatchToProps)(SignUp);
