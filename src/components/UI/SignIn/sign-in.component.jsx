import React from 'react';

import FormInput from '../../FormInput/form-input.component';
import CustomButton from '../../CustomButton/custom-button.component';
import SignInApi from '../../../api/SignInApi';
import { updateCurrentUser } from '../../../store/actions';

import './sign-in.styles.css';
import { connect } from 'react-redux';


class SignIn extends React.Component {
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
      const user = await SignInApi(displayName, password)
      if (!user) {
        alert("invalid username or password")
      }
      if (user.error) {
        alert("invalid username or password")
        return;
      }
      if(user.message){
        alert("invalid")
      }
      if (user) {
        await this.props.updateCurrentUser(user)  
      }
        alert("invalid username or password")
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
    updateCurrentUser : (currentUser) => dispatch(updateCurrentUser(currentUser))
  }
}

export default connect(null,mapDispatchToProps)(SignIn);
