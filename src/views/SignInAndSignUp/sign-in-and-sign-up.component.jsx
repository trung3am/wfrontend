import React from 'react';

import SignIn from '../../components/UI/SignIn/sign-in.component';
import SignUp from '../../components/UI/SignUp/sign-up.component';

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
