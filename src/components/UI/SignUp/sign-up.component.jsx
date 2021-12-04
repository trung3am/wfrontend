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
      alert("Vui lòng cung cấp thông tin");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu nhập không giống nhau");
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
      alert("Mật khẩu phải ít nhất 6 ký tự");
      return;
    }
    try {
      const user = await SignUpApi(displayName, email, password)
      if(!user){
        alert("cannot create user");
      }
      if (user.error) {
        alert("Không thể tạo User");
        return;
      }
      this.props.updateCurrentUser(user);
      return
    } catch (e) {
      console.log(e)
    }
    alert("Lỗi khi Đăng ký!!")

  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> Tôi chưa có tài khoản.
          {/* I do not have a account */}
        </h2>
        <span>
          Đăng ký thành viên bằng email và mật khẩu
          {/* Sign up with your email and password */}
          </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Tên Đăng Nhập"
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
            label="Mật Khẩu"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Xác thực lại mật khẩu"
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
