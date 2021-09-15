import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignInContainer, ButtonContainer, SignInTitle } from './sign-in.styles'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        }
        catch (error) {
            console.error(error)
        }

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })

    }


    render() {
        const { email, password } = this.state;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='email' value={email} handleChange={this.handleChange} required />

                    <FormInput type='password' name='password' label='password' value={password} handleChange={this.handleChange} required />
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
}
export default SignIn;