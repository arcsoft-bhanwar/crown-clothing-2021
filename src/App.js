import React from 'react';
import{Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import './App.scss';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/headre.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //createUserProfileDocument(userAuth)
      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //console.log('uuuuuu', userRef)
        userRef.onSnapshot(snapShot => {
          //console.log('vvvvvvvvv', snapShot.data())
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

         
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    const {currentUser} = this.props;
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path ='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)}/>
        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps,mapDispatchToProps )(App);
