import React from 'react';

import FormInput from '../../components/FormInput/form-input.component';
import CustomButton from '../../components/CustomButton/custom-button.component';

import './EditUser-style.css';

class EditUser extends React.Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      displayName: '',
      phoneNumber: '',
      email: '',
      oldPassword: '',
      newPassword: '',
    };
  }

  handleChange = (prop) => (event) => {
    // setValues({ ...values, [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    // setValues({
    //   ...values,
    //   showPassword: !values.showPassword,
    // });
  };

  handleMouseDownPassword = (event) => {
    // event.preventDefault();
  };

  render() {
    const {
      fullname,
      displayName,
      phoneNumber,
      email,
      oldPassword,
      newPassword,
    } = this.state;
    return (
      <div className="edit-user">
        <h2 className="title">Thông tin cá nhân</h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={fullname}
            onChange={this.handleChange}
            label="Họ Và Tên"
            required
          />
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Tên Đăng Nhập"
            required
          />
          <FormInput
            type="text"
            name="displayName"
            value={phoneNumber}
            onChange={this.handleChange}
            label="Số Điện Thoại"
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
            value={oldPassword}
            onChange={this.handleChange}
            label="Mật Khẩu cũ"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={newPassword}
            onChange={this.handleChange}
            label="Mật Khẩu Mới"
            required
          />
          <CustomButton type="submit">Thay Đổi Thông tin</CustomButton>
        </form>
      </div>
    );
  }
}

export default EditUser;
