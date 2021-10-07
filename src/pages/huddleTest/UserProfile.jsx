import React from 'react'
import withData from './with-data';
const UserProfile = ({name, email, data})=> {

        return(
            <div className='container'>
                
               <h1> Post List:</h1>
               <p>{name}</p>
                <p>{email}</p>
                {data.map(post =>
                    <div key={post.id}>
                        <h1> {post.title} </h1> 
                        <p>{post.body}</p>   
                    </div>
                )}

            </div>
        )
    
}

export default withData(UserProfile);