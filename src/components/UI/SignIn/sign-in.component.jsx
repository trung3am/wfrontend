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
      alert("Vui lòng cung cấp thông tin");
      return;
    }
    if (displayName.length < 3 || displayName.length > 30) {
      alert("Username phải có ít nhất 3 ký tự");
      return;
    }
    if (password.length < 6 || password.length > 30) {
      alert("password phải có ít nhất 6 ký tự");
      return;
    }
    try {
      const user = await SignInApi(displayName, password)
      if (!user) {
        alert("invalid username or password")
      }
      if (user.error) {
        alert("Sai Tên đăng nhập hoặc mật khẩu")
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
        <h2>Tôi đã có tài khoản</h2>
        <span>Đăng nhập với Username và mật khẩu</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="displayName"
            handleChange={this.handleChange}
            value={this.state.displayName}
            label="Tên đăng nhập"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Mật khẩu"
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
