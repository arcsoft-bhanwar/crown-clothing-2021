import React, {useState, useEffect} from 'react';
import './shop.styles.scss'
import Shop_Data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


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

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:Shop_Data
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
               
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
                
            </div>
        )
    }
}
export default ShopPage;