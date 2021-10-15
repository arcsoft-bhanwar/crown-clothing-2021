import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignInContainer, ButtonContainer, SignInTitle } from './sign-in.styles'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
   
    const [userCredentials, setUserCredentials] = useState({email:'', password:''});
    const { email, password } = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({email: '', password: ''})
        }
        catch (error) {
            console.error(error)
        }

        setUserCredentials({email: '', password: ''})
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })

    }


    
       
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' label='email' value={email} handleChange={handleChange} required />

                    <FormInput type='password' name='password' label='password' value={password} handleChange={handleChange} required />
                    <ButtonContainer>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}
                            Sign In with Google
                            {''}
                        </CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    
}
export default SignIn;