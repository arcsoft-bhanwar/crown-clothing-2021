import React from 'react'
import UserProfile from './UserProfile'
import UserList from './UserList'
import UserSearchList from './UserSearchList'
import './huddleTest.styles.scss'
class HuddleTest extends React.Component {
    render() {
        return (
            <div className='App'>

                <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
                <UserProfile name='Bhanwar Singh Rathore' email='rathorebs@gmail.com' dataSource='https://jsonplaceholder.typicode.com/posts' />
                <UserSearchList dataSource='https://jsonplaceholder.typicode.com/users' />
            </div>
        )
    }
}

export default HuddleTest