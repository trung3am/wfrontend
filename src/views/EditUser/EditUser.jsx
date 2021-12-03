import React,{useState} from 'react';


import FormInput from '../../components/FormInput/form-input.component';
import CustomButton from '../../components/CustomButton/custom-button.component';

import './EditUser-style.css';
// import { connect } from 'react-redux';
import EditUserApi from '../../api/EditUserApi';
import GetUserApi from '../../api/GetUserApi';
import SignOutApi from '../../api/SignOutApi';

const EditUser =(props)=> {
  
  const [userData, setData] = useState({email: props.user_data.email, 
     
    phoneNumber: props.user_data.phone_number ? props.user_data.phone_number : '', 
    newPassword:'', confirmPassword:''});
  
    const {email,  phoneNumber, newPassword, confirmPassword} = userData;
  
  const handleChange =  (event) => {
    const {value, name} = event.target;
    setData({...userData, [name]:value})
  };

  const handleSubmit = async (event) =>{

    event.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    if (phoneNumber.length > 15 || phoneNumber.length < 3 ) {
      alert("invalid phone number");
      return;
    }
    try {
      
      const data = await EditUserApi(phoneNumber, email, newPassword,props.user_data.jwt)
      if (data.message !== null ) {
      const user = await GetUserApi(props.user_data.jwt)
      await props.updateCurrentUser(user)
      alert("updated new profile!")
      return
    }
    alert('cannot update profile')
    } catch (e) {
      console.log(e)
    }
  }

  const handleClick = async (event) =>{
    event.preventDefault()
    await SignOutApi(props.user_data.jwt)
    await props.signOut()
    return
  }

  
    return (
      <div className="edit-user">
        <h2 className="title">Thông tin cá nhân cua : {props.user_data.user_name}</h2>
        
        <form className="sign-up-form" onSubmit={handleSubmit} >
          
          <FormInput
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            label="Số Điện Thoại"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            label="Mat khau moi"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Xac Nhan Mat Khau"
            required
          />
          <CustomButton type="submit">Thay Đổi Thông tin</CustomButton>
        </form>
        <span onClick={handleClick}><CustomButton >Dang Xuat</CustomButton></span>
      </div>
    );
  
}

// const mapStateToProps = (state) =>{
//  return{
//   currentUser : state.currentUser,
//  }
// }

// export default connect(mapStateToProps)(EditUser);
export default EditUser;