import React, { useEffect, useReducer } from 'react'
import Card from './cardComponent'
const INITIAL_STATE = {
    user: null,
    searchQuery: 'Bret'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload }
        case 'SET_SERACH_QUERY':
            return { ...state, searchQuery: action.payload }
        default:
            return state;
    }
}

const setUser = (user)=>({
    type:'SET_USER',
    payload: user
})

const setSerachQuery= (queryString) => ({
    type: 'SET_SERACH_QUERY',
    payload: queryString
})
const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const {user, searchQuery} = state;
    

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
            const resJson = await response.json();
            dispatch(setUser(resJson[0]));
        }
        fetchFunc();

    }, [searchQuery])

    return (
        <Card>
            <h1>User List Search:</h1>

            <input type='search' value={searchQuery} onChange={(event) => dispatch(setSerachQuery(event.target.value))} />
            {user ?
                <div>
                    <h1>Name: {user.name}</h1>
                    <h1>Username: {user.username}</h1>
                    <h1>Email: {user.email}</h1>
                </div>
                : <h1>User not found</h1>
            }
        </Card>
    )

}
export default UseReducerExample;