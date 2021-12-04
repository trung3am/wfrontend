import React from 'react';

import FormInput from '../../FormInput/form-input.component';
import CustomButton from '../../CustomButton/custom-button.component';

import { updateCurrentUser, updateOrder } from '../../../store/actions';

import './sign-in.styles.css';
import { connect } from 'react-redux';
import LoginApi from '../../../api/LoginApi';
import GetOrderAdminApi from '../../../api/GetOrderAsAdmin';


class SignInAsAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, password} = this.state
    if (!displayName ||  !password) {
      alert("please provide information");
      return;
    }
    if (displayName.length < 3 || displayName.length > 30) {
      alert("username must be at least 3 character long");
      return;
    }
    if (password.length < 6 || password.length > 30) {
      alert("password must contain at least 6 character long");
      return;
    }
    try {
      const user = await LoginApi(displayName,password)
      if (user.error) {
        alert("invalid username or password")
        return;
      }
      await this.props.updateCurrentUser(user)
      const order = await GetOrderAdminApi(user.jwt)
      this.props.updateOrder(order)
      return;
    } catch (e) {
      console.log(e)
    }    

  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="displayName"
            handleChange={this.handleChange}
            value={this.state.displayName}
            label="displayName"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrder : (order) =>dispatch(updateOrder(order)),
    updateCurrentUser : (currentUser) => dispatch(updateCurrentUser(currentUser))
  }
}

export default connect(null,mapDispatchToProps)(SignInAsAdmin);
