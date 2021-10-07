import React,{useEffect, useState} from 'react';

const UserSearchList = ({dataSource}) =>{
    const [searchQuery, setSearchQuery] = useState('Bret');
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        //console.log('response===>', dataSource)
        const fetchFunc =  async () => {
            const fetchURL = dataSource + '?username=';
            const response = await fetch(`${fetchURL}${searchQuery}`)
            const resJson = await response.json();
            setUser(resJson[0])
       }
      fetchFunc();
    },[searchQuery])
    return (
        <div className='container user-list'>
            <h1>User List Search:</h1>
            <input type='search' value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)}/>
            {    user ?
                <div>

                    <h1>User personal details:</h1>
                    <p>Name:{user.name}</p>
                    <p>Username:{user.username}</p>
                    <p>Email:{user.email}</p>
                    <h1>User Address:</h1>
                    <p>{user?.address?.street}</p>   
                    <p>{user?.address?.suite}</p>   
                    <p>{user?.address?.city}</p>
                    <p>{user?.address?.zipcode}</p>   
                    <p>{user?.address?.phone}</p>
                    <p>{user?.address?.website}</p>
                    <h1>User Company details:</h1>
                    <p>Company Name: {user?.company?.name}</p>
                    <p>Company Catch Phrase:{user?.company?.catchPhrase}</p>
                    <p>Company BS:{user?.company?.bs}</p>
                </div>
                :
                <p>No Data Found</p>
            }
        </div>
    )
}

export default UserSearchList;
