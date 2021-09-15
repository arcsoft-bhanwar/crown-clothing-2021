import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'

import {ShopPageContainer} from './shop.styles'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';


// const FunctionalHoocksUseState = ()=>{
//     //const [name, setName] = useState('BSR');
//     //const [address, setAddress] = useState('Udaipur');
//     const [userCredentials, setUserCredentials] = useState({name:'BSR', address:'Udaipur'})
//     return(
//         <div>
//             <h1>Hi I'm {userCredentials.name} and I'm from {userCredentials.address}</h1>
//             <button onClick={()=>setUserCredentials({...userCredentials, name:'Hrshil',address:'Pune'})}>
//                 Change value
//             </button>
            

//         </div>
//     )
// }

// const FunctionHookUseEffect=()=>{
//     const [user, setUser]=useState(null);
//     const [searchQuery, setSearchQuery]=useState('Bret');

// //   useEffect(()=>{
// //       console.log('Hello')
// //       const fetchFunc = async ()=>{
// //           const response = await fetch(
// //             `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
// //           );
// //           const resJson= await response.json();
// //           setUser(resJson[0]);
// //       }
// //           fetchFunc();
      
// //   },[searchQuery])

// useEffect(()=>{
//     console.log('bbb');
//     const fetchFunc = async ()=>{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
//         const resJson= await response.json();
//         setUser(resJson[0])
//     }
//     fetchFunc();
// },[searchQuery])

//     return(
//         <div>
//             <input type='search' value={ searchQuery} onChange={event=>setSearchQuery(event.target.value)} />
//             {
//                 user ? (
//                     <div>
//                         <h3>{user.name}</h3>
//                         <h3>{user.username}</h3>
//                         <h3>{user.email}</h3>
//                     </div>
//                 )
//                 : (
//                     <p>No user found</p>
//                 )
//             }


//         </div>
//     )
// }

const ShopPage = ({match}) => {
    console.log('kkkkkk', match)
    return (
        <ShopPageContainer>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </ShopPageContainer>
    )
}

export default ShopPage;