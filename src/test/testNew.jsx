import React, { useState } from 'react'

const TestNew = () => {

    //const [name, setName] = useState('Bhanwar');
    //const [age, setAge]= useState(20)

    const [userDetails, setUserDetails] = useState({ name: 'BSR', age: 20 })
    
    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleSubmit = () => {
        setUserDetails({ ...userDetails, name: 'BSR', age: 20 })
    }
    return (
        <div>
            <div>
                {/* <input name="name" type='text' value={userDetails.name} onChange={(event)=>setUserDetails({...userDetails, name:event.target.value})} />
                <input name="age" type='text' value={userDetails.age} onChange={(event)=>setUserDetails({...userDetails, age:event.target.value})} /> */}

                {/* { <button onClick={()=>setUserCredentials({...userCredentials, name:'Hrshil',address:'Pune'})}>
                     Change value
                 </button>} */}

                <input name="name" type='text' value={userDetails.name} onChange={handleChange} />
                <input name="age" type='text' value={userDetails.age} onChange={handleChange} />

                <button onClick={handleSubmit}>
                    Reset value
                </button>
                <p>Name: {userDetails.name}</p>
                <p>Age:{userDetails.age}</p>
            </div>



        </div>
    )
}

export default TestNew;