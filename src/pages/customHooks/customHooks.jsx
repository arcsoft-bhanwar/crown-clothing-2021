import React from 'react'
import './customHook.styles.css'
import User from './user.component'
import Post from './post.component'
import TextInputWithFocusButton from './useRefExample'
import CustomInput from './useRefExample1'
import NoUseMemoComponent from './useMemoExample1'
import UseReducerExample from './useReduceHook'
import UseMemoLatest from './useMemoExample2'
class CustomHooks extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render() {
        return (
            
                <div className='App'>
                    <User userId={5} />
                    <Post postId={15} />
                    <TextInputWithFocusButton />
                    <CustomInput ref={this.textInput} />
                    <NoUseMemoComponent tempValue={10} />
                    <UseReducerExample />
                    <UseMemoLatest />
                </div>
                
            
        )
    }
}
export default CustomHooks;