import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import { SignInWithGoogle } from '../../firebase/firebase.utils'

import SignIn from '../../components/sign-in/sign-in.component'



const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;