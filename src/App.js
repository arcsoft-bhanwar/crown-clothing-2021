import React from 'react';
import{Route, Switch,Link} from 'react-router-dom'


import HomePage from './pages/homepage/homepage.component'
import './App.scss';

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

// const HomePage = (props)=>{
//   console.log(props)
//  return(
//   <div>
//   <Link to='/topics'>Topics</Link> <br/>
//   <button onClick={()=>props.history.push('/topics')}>Topics Details</button>
//   <h1>HOME PAGE</h1>
//   </div>
//  )
// }
  
const TopicsList = (props)=>{
  console.log(props)
  return(
    <h1>TOPIC LIST PAGE</h1>
  )
}

const TopicsDetail = (props)=>{
  console.log(props)
  return(
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
  )
}
  
  


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicsDetail} />
      </Switch>
    </div>
  );
}

export default App;
