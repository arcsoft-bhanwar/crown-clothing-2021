import React from 'react'
import UserProfile from './UserProfile'
import UserList from './UserList'
import './hocExample.styles.scss'
class HocExample extends React.Component {
render(){
    return(
        <div className='App'>
            <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
            <UserProfile name='Bhanwar Singh Rathore' email='bhanwar@arcgate.com' dataSource='https://jsonplaceholder.typicode.com/posts'/>
        </div>
    )
}
}

export default HocExample