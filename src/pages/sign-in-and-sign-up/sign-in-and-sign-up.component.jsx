import React from 'react';
import {SignInAndSignUpConatainer} from './sign-in-and-sign-up.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp=()=>(
    <SignInAndSignUpConatainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpConatainer>
) 
export default SignInAndSignUp;