import React,{useState, useEffect} from 'react'


const UseEffect = () => {
    const [searchQuery, setSearchQuery] = useState('Bret');
    const [user, setUser] = useState(null)

    useEffect(()=>{
        console.log('kkkkk')
        const fetchFunc =  async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
            const resJson = await response.json();
            setUser(resJson[0])
       }
       fetchFunc();

    },[searchQuery])

    return(
        <div>
            <h1>Use Effect Example</h1>
            <input
            type='search'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            />

            {
                user ? 
                (<div>
                    <p>Name:{user.name} </p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>)
                :
                (<p>No user found</p>)
            }
            
        </div>

    )
}

export default UseEffect;