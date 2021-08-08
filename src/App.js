import React from 'react';
import{Route, Switch} from 'react-router-dom'
import './App.scss';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/headre.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //createUserProfileDocument(userAuth)
      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //console.log('uuuuuu', userRef)
        userRef.onSnapshot(snapShot => {
          //console.log('vvvvvvvvv', snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          //console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path ='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
