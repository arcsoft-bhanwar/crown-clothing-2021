test.js

My Name is Bhanwar Singh Rathore and I’m from Udaipur (Rajasthan) and right now  I’m working as Sr. UI-Archetect in Atcgate Inc.
Prior to this, I began my career as a web designer with Sangam Infotech in the year 2000. After that, I worked for a few companies, including Kitss Software Consultants and Visual Soft Technologies.
Finally, in 2007, I joined arcgate as a Sr. Web Designer, and now I'm working as a Sr. UI-Archetect/Team Lead/Project Lead, managing a team of ten people, including a developer, designer, and QA.

I'm responsible for frontend technical support, so if someone in my team gets stuck, I'm there to help them out and ensure smooth delivery of projects and smooth releases.

- When we receive new projects, I review and go over them with clients. and according to client requirement I’ll work on archetural things like
- rendering approache SSR or CSR,
- create reusable component,
- create common component,
- UI setup like fonts creation from SVG icons,
- SCSS setup like varibales, mixins, respiinsiveness break points based on max and min-width,
- webpack implementaion for the bundling,
- Unit testing implementation using jest  and Enzyme.
- required node dependency setup,
- environment setup like dev qa, preprod(stage) and production,
- setup global environments.
- In case of React-Native, i’m also reponsible to deploy Android and iOS app respectively on Google Play Store and Apple App Store
- if we built any web app in ReactJs SSR then need to deploy AWS EC2 (Elastic Compute Cloud) console
- for ReactJS CSR then need to deploy on AWS S3 bucket and many more things which required a project to kickstart.

-------------------------------------------------------

Implement AWS CloudFront so our website can serve via cache

-------------------------------------------------------

00) Agile Methodologies:==>
- Agile methodology is a type of project management process, mainly used for software development, where demands and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customers.

- We are working on weelky sprint.
- We have daily standup with client in morning then I’ll share the update on daily basis to client on behalf of my team members.
- Implementaion new features:  When we receive a notification from Jira for new ticket or client put ticket on slack, then I’ll go through the JIRA ticket which was assigned to me and listed out a checklist of unclear things and schedule a call with client and over call I will analysis with client for their requirement.

- Then we will do POC by creating a seprate branch from the master branch, if everthing works as expected then
- I’ll work on archetural things and share latest code base with my developer for further development. 
- If feature is developed by developer with unit testing then he will move this ticket to  Code Review lane then I'll work on code review then I'll move this ticket to 'Ready to QA' lane and the Testing phase start.
- If QA passted then we QA will move this ticket to Ready to UAT lane UAT done by client.
- If UAT passed then client move this ticket to Ready to deply Lane.
- then I’ll deploy the code on producion, once post production done by QA then Tickets marked Done/Closed. 

-------------------------------------------------------

00) My Daily Routine:=>

- I’ll discuss with my team members and take update for assign tasks/Tickets in the morning before to move cleint standup.
- We have daily standup with client in morning then I’ll share the update on daily basis to client on behalf of my team members.
- After the call I’ll followup my team members and work with them closely,  if someone gets stuck in my team, to help them out, and to ensure smooth releases and smooth delivery. 

-------------------------------------------------------

01) What is React?
React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.

-------------------------------------------------------

02) How is React Native different from ReactJS?

- Syntax: React Native and ReactJS both use JSX, but ReactJS uses HTML tags, and React Native doesn’t.

- Navigation: React Native uses its own built-in navigation library, while ReactJS uses a react-router.

- Animation: ReactJS uses CSS animations. React Native uses its animated API.

- DOM: ReactJS uses a virtual DOM with a partial refresh. React Native needs to use its native API when rendering UI components.

- Usage: ReactJS is mainly used for web app development, while React Native focuses on mobile applications.

-------------------------------------------------------

03) What are the major features of React?
1) Virtual DOM
2) JSX
3) One-way data binding
4) React native
5) Declarative UI
6) Component-based architecture
7) Performance
8) Strong community support

-------------------------------------------------------

04) What is JSX?
JSX stands for JavaScript XML. It is a markup syntax that is very similar to HTML and is used to describe the appearance of an application’s UI.

-------------------------------------------------------

05) What are Pure Components?
React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

-------------------------------------------------------

06) What are props in React?
props are inputs to a React component. They are data passed down from a parent component to a child component.

-------------------------------------------------------

07) What is state in React?
State of a component is an object that holds some information that may change over the lifetime of the component.
-------------------------------------------------------

08) What is the difference between state and props?
-Props and state both are plain JavaScript objects. While both hold information that influences the output of render,
-They are different in one important way: props get passed to the component whereas state is managed within the component.

-------------------------------------------------------

09) Higher-Order Components
-A higher-order component is a function that takes a component and returns a new component.
- Example -1
  import { connect } from 'react-redux'
  export default connect(mapStateToProps)(App) 

import { withRouter } from 'react-router-dom'
- withRouter is a HOC and we can get all the the props like history, location and match using this whereever we required such kind of props .

HOC can be used for many use cases:
- Code reuse, logic and bootstrap abstraction.
- State abstraction and manipulation.
- Props manipulation.

-------------------------------------------------------

10) What is the Virtual DOM?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

-------------------------------------------------------

11) Is the Shadow DOM the same as the Virtual DOM?
No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

-------------------------------------------------------

12) What is “React Fiber”?
Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.

-------------------------------------------------------

13) When to use client-side rendering and server-side rendering?

- Web applications and websites are two different formats of web content.
- If your website involves repeated dynamic content rendering, SSR is a better choice over CSR.
- A web application is a complete application that can be used for purposes like accounting, CRM, HR management, Project management, etc.
- A website, on the other hand, is informative content about the business. So, CSR works better for web applications compared to SSR.
- SSR better for websites compared to CSR.

-------------------------------------------------------

14)  How you implement Server Side Rendering or SSR?
React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.

import ReactDOMServer from 'react-dom/server'
import App from './App'

ReactDOMServer.renderToString(<App />)

This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.
-------------------------------------------------------

14) Babel:
Pick all the js, jsx and scss file and make the commpitable or understandable for all the browser not matter new browser or old browser

-------------------------------------------------------

15) Webpack:==>
Pick all the js, jsx and scss and what we import in jsx file and create a bundling together and optimise it for the production.

-------------------------------------------------------

16) React Update state:==>

this.setState({searchField:event.target.value})

Or

this.setState((prevState, prevProps) = > {
	return {searchField:prevState.searchField+1}
})

this.setState((prevState, prevProps) = > {
	return {searchField:prevState.searchField+prevProps.increment}
})

onClick={()=> this.setState(state=>({
	showChild:!state.showChild
}))}

-------------------------------------------------------

React lifecycle Method older one:==>

01) Mounting Phase==>
There are four built-in lifecycle methods that are called in the order when a component is mounted:

- constructor( ) - This is called before anything else. We can set the initial state of the component inside this method. The constructor method is used to set the initial state and bind methods to the component.

- getDerivedStateFromProps( ) - This is called before rendering the elements in the DOM.
In this method, we can set the state of the component based on the props we received. This method is used very rarely.

render( ) - This is the only required method in the class component. This method returns the HTML elements which are going to be rendered inside the DOM.

- componentDidMount( ) - It is called right after the component is rendered inside the DOM. All the statements which require the DOM nodes can be executed in this method. Network requests from a remote end-point can also be instantiated in this method.

02) Updating Phase==>
Updates in react are caused by changes in state or props. Update leads to re-rendering of the component. The following methods are called when a component is re-rendered:

- getDerivedStateFromProps( ) - This method is called again when a component is being re-rendered.

- shouldComponentUpdate( ) - This method is called before rendering the component when new props are received. It lets React know if the component’s output is affected by the newly received props or by the state change. By default, it returns true.

- render( ) - To re-render the HTML inside the DOM, the render( ) method gets called again.

- getSnapshotBeforeUpdate( ) - This method is called just before the newly rendered HTML gets committed to the DOM. It stores the previous state of the component so that React has an idea of what parts of the DOM needs to be updated.

- componentDidUpdate( ) - It is called after the component gets re-rendered. This method works just like the componentDidMount( ) method, the difference is that this method does not get called on initial render.


NextProps, setState() and forceUpdate() then
shouldComponentUpdate(nextProps, nextState){

return nextProps.text !== this.props.text // true or false
return false // componentDidUpdate won’t render
return true // componentDidUpdate will render
}
Render React update the DOM)
componentDidUpdate
 
03) Unmounting Phase==>
- componentWillUnmount( ) - This method is called just before the component gets destroyed.
{this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
If this.state.showChild return false then <Lifecycles text={this.state.text} /> component will remove and componentWillUnmount phase trigger

-------------------------------------------------------

React lifecycle Method with hooks:==>

useEffect(()=>{ /*component did mount*/ },[])
useEffect(()=>{ /*Component Did update*/ })
useEffect(()=>{ /*Component Did update only if tinku will update*/ },[tinku])
useEffect(()=>{ /*Component Did update only if tinku & chinku will update*/ },[tinku, chinku])
useEffect(()=>{ /*COmpoentDidMount*/ return ()=>{ //component will unmount } },[])


-------------------------------------------------------

Using the State Hook:==>

import React, { useState } from 'react';

const FunctionalHoocksUseState = ()=>{
  //const [name, setName] = useState('BSR');
  //const [address, setAddress] = useState('Udaipur');
  const [userCredentials, setUserCredentials] = useState({name:'BSR', address:'Udaipur'})
  return(
      <div>
          <h1>Hi I'm {userCredentials.name} and I'm from {userCredentials.address}</h1>
          <button onClick={()=>setUserCredentials({...userCredentials, name:'Hrshil',address:'Pune'})}>
              Change value
          </button>
      </div>
  )
}

-------------------------------------------------------
Array==>

const fruits = ['Apple', 'Banana', 'Licchi', 'Picchi']
    //console.log('arrayyyy', fruits[0]);
    // let fruitsAdded= fruits.push('Khichi') =>Add an item to the end of an Array
    // let fruitsRemoved= fruits.pop() => Remove an item from the end of an Array
    // let reomveFromStart=fruits.shift() => Remove an item from the beginning of an Array
    // let addFromStart = fruits.unshift('Sweet Apple'); => Remove an item from the beginning of an Array
    // let pos = fruits.indexOf('Bannana') => Find the index of an item in the Array
    //let pos = 1
    //let removeItem = fruits.splice(pos, 2) Remove an item by index position
    //let itemIndex = fruits.indexOf('Banana')
    //let itemIndex = Object.keys(fruits)
    //console.log('arrayyyy', itemIndex);

-------------------------------------------------------

React map:==>

{
	sections.map(section=>(
	 <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl}/>
	))
}

OR we can restructuring as below


{
	sections.map( ({id, title, imageUrl })=>(
	 <MenuItem key={id} title={title} imageUrl={imageUrl}/>
	))
}

-------------------------------------------------------




React-Router-Dom:
We will get here prop when we are rendering component via <Route exact path='/' component={HomePage} /> we can get props in ‘HomePage’ component 
 are as follows:
- history
- location
- Match
- We can make a link by:
<Link to='/topics'>Topics</Link> and 
<button onClick={()=>props.history.push('/topics')}>Topics</button>
- Dynamic routing
  <link to={`${props.match.url}/13`}>To Topic 13</Link>
  <link to={`${props.match.url}/17`}>To Topic 17</Link>
  <link to={`${props.match.url}/21`}>To Topic 21</Link>

  import { withRouter } from 'react-router-dom'
- withRouter is a HOC and we can get all the the props like history, location and match using this whereever we required such kind of props.

-------------------------------------------------------

Code Review::=>
- Code should be having proper commenting and indenting
- Test Coverge score should be above 70-80%

- we can doe code review using `Review Assistant` of VS Code
-------------------------------------------------------

Testing Jest/Enzyme::=>
- act()
- Rendering
- Data Fetching
- Mocking Modules
- Events
- Timers
- Snapshot Testing
- Multiple Renderers
- Something Missing?

-------------------------------------------------------

Security::=>
- Secure your HTTP authentication by React Router,JSON Web Token (JWT), OAuth, PassportJs
- Only Load Stuff if the User Needs It, we can use Lazy Loading(React.lazy)
- Use default data binding with curly braces {} and React will
- automatically escape values to protect against XSS attacks.
- Avoid libraries that do use dangerouslySetInnerHTML, innerHTML, unvalidated URLs or other unsafe patterns.
- Use security linters on our node_modules folder to detect unsafe patterns in your library code.

-------------------------------------------------------

Code-Spliting and chunking::=>
- in CSR we can do code spliting using React.lazy and Suspense
- Route-based code splitting by React.lazy
- We can code split using webpack SplitChunksPlugin
- In SSR we can code split by ChunkExtractor of loadable components 

-------------------------------------------------------

Error boundaries::=>
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

-------------------------------------------------------

Performance Optimization Techniques for React Apps:==>
- Using Immutable Data Structures
   
   shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users !== nextState.users) {
      return true;
    }
    return false;
  }
  we can controll componentDidUpdate

- Function/Stateless Components and React.PureComponent
- Multiple Chunk Files
- Using Production Mode Flag in Webpack
- Dependency optimization
- Use React.Fragments to Avoid Additional HTML Element Wrappers 
- Avoid Inline Function Definition in the Render Function.
- Throttling and Debouncing Event Action in JavaScript
- Avoid using Index as Key for map, and insted we can use shortid (import shortid from  "shortid";) which generates a unique key
- Avoiding Props in Initial States
- Spreading props on DOM elements using spread oprator(...props)
- CSS Animations Instead of JS Animations
- Using a CDN
- Consider Server-side Rendering
- Enable Gzip Compression on Web Server

-------------------------------------------------------

TypeScript::=>
- TypeScript is an open-source language which builds on JavaScript
- Early spotted bugs: Researchers found that TypeScript detects 15 percent of common bugs at the compile stage. 
- By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
- Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.

-------------------------------------------------------



RESTful API:=>
A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.
- In react we are using axios
-------------------------------------------------------

GraphQL:=>
Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less.
- We are using graphQL in react via appolo client

-------------------------------------------------------

Redux
- Good for managing large state
- Useful for sharing data between components
- Predictable state management using the 3 principles.
- 1 Single source of truth single source of truth and this is a fancy way of saying that we have one, single big object that describes the entire state of the app. 
- 2 State is read only(immutable) So the state object that we will create with redux will actually never get modified and instead we would create a new state after each action is taken by the user. 
- 3 Changes using pure functions. The idea that a pure function is something that receives an input and always returns an output that is predictable.

Redux Flow:
- The first one is action and action is something that a user does such as clicking on a button or a drop down menu and what happens in redux is as soon as a user clicks on something a button and creates an action.
- It goes through something called a reducer and a reducer is simply a function. A pure function that receives an input which is the action so the user just clicked on a button and creates an output and this output is the state or the store as we call it in redux which is the entire state of the app.

Flux Pattern Unidirectional data flow: 
Action => Dispatcher= >Store=>View

Redux Middleware
- Redux logger: this is something that is nice for us to use when debugging our redux code.
- Redux Thunk
- Redux Saga
- mapStateToProps: this naming can be anything but mapStateToProps is standard with redux codebases.
-------------------------------------------------------


Redux:=>
Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.

-------------------------------------------------------

Redux Thunk:=>
Redux Thunk middleware allows us to write action creators that return a function instead of an action. 

-------------------------------------------------------

Redux Saga:==>
- Redux Saga is a middleware that takes over the control of you actions before reaching the reducer directly.
- Redux saga acts as a middleware that gives developers the scope to neatly separate any business logic, xhr Requests(Popularly known as Ajax), data manipulation or any other operation which may not seem appropriate in reducers directly.
- Original Working without redux saga:-
  Action(s) → Reducer(s)
- With Redux saga as middleware:-
  Action(s) → Redux Saga →Reducer(s) 
-Great support for Async Operations  

-------------------------------------------------------

Redux follows three fundamental principles:=>
- Single source of truth: The state of your whole application is stored in an object tree within a single store.
- State is read-only: The only way to change the state is to emit an action.
- Changes are made with pure functions: To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.

-------------------------------------------------------

What is the difference between mapStateToProps() and mapDispatchToProps()?:=>
- mapStateToProps() is a utility which helps our component get updated state (which is updated by some other components):

  const mapStateToProps = (state) => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
  }

- mapDispatchToProps() is a utility which will help our component to fire an action event (dispatching action which may cause change of application state):

  const mapDispatchToProps = (dispatch) => {
    return {
      onTodoClick: (id) => {
        dispatch(toggleTodo(id))
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App)

-------------------------------------------------------

Redux vs Context API: Conclusions:==>
- Context API: Resourceful and ideal for small applications where state changes are minimal
- Redux: Perfect for larger applications where there are high-frequency state updates
- Context also doesn't give you anything like the Redux DevTools, the ability to trace your state updates, middleware to add centralized application logic, and other powerful capabilities that Redux enables.

-------------------------------------------------------


What is React memo function?
Class components can be restricted from rendering when their input props are the same using PureComponent or shouldComponentUpdate. Now you can do the same with function components by wrapping them in React.memo.

const MyComponent = React.memo(function MyComponent(props) {
 /* only rerenders if props change */
});

-------------------------------------------------------


Accessibility:=>
Web accessibility is the design and creation of websites that can be used by everyone. Accessibility support is necessary to allow assistive technology to interpret web pages.
React fully supports building accessible websites, often by using standard HTML techniques

- We can use Standards and Guidelines like: 
- WCAG(Web Content Accessibility Guidelines )
- WAI-ARIA(The Web Accessibility Initiative - Accessible Rich Internet Applications)
- Semantic HTML
- Accessible Forms
- Focus Control
- Mouse and pointer events
- Using Tab and Shift+Tab to browse.
- Using Enter to activate elements.

-------------------------------------------------------

Bootstrap Grid System:==>
.col-xs for extra small devices, whose screen width is less than 576px.
.col-sm- small devices, whose screen width is equal to or greater than 576px.
.col-md- medium devices, whose screen width is equal to or greater than 768px.
.col-lg- large devices, whose screen width is equal to or greater than 992px.
.col-xl- extra large devices, whose screen width is equal to or greater than 1200px.

We can create our own responsive code using media query and flex:

@media (max-width: 767px){

}
$mxw320: max-width 360px;
$mxw480: max-width 480px;
$mxw768: max-width 767px;
$mnw768: min-width 767px;
$mxw769: max-width 768px;
$mxw1000: max-width 1024px;
$mxw992: max-width 991px;
$mnw992: min-width 992px;
$mnw1025: min-width 1025px;
$mxw1280: max-width 1280px;
$mxw1300: max-width 1300px;
$mxw1200: max-width 1199px;
$mxw1440: max-width 1440px;
$mxw1366: max-width 1366px;
$mnw1920: min-width 1920px;

@include breakpoint($mxw1200) {
  min-width: 100%;
}
-------------------------------------------------------

flexbox?
Flexbox is a layout module for flexible boxes. Without using float or positioning, you can quickly create a flexible layout design with flexbox.

-display: flex;
- order: 5; /* default is 0 */
- order: 5; /* default is 0 */
- flex-shrink: 3; /* default 1 */
- flex-basis:  | auto; /* default auto */
- flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
- align-self: auto | flex-start | flex-end | center | baseline | stretch;
- align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

- align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;

- justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;

- flex-flow: column wrap;

- flex-wrap: nowrap | wrap | wrap-reverse;

- flex-direction: row | row-reverse | column | column-reverse;

-------------------------------------------------------

Multitenant::=>
Multitenant architecture is used to enable multiple users to use a single application, for instance a database.

-------------------------------------------------------

Multi-Lingual::=>
We can implement Multi-Lingual support in ReactJS app using react-i18next, i18next library.

-------------------------------------------------------

Javascript:==>

The const Keyword
- The const keyword was introduced in ES6 (2015).
- const cannot be Redeclared.
- const cannot be Reassigned.
- const have Block Scope.

The var Keyword
- Variables declared with var are function-scoped. This means that if a variable is declared anywhere else besides a function using var, it will always exist in the global scope.
- Variable declared using var can be redeclared as well.

The let Keyword
- The let keyword was introduced in ES6 (2015).
- let cannot be Redeclared.
- let must be Declared before use.
- let have Block Scope.

-------------------------------------------------------
setTimeout and setInterval:===>

var intervalID = setInterval(alert, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

setTimeout(alert, 1000); // Will alert once, after a second.

setTimeout(()=>{
  if(!!this.childRef){
    this.childRef.snapToPrev()
  }
},0)

-------------------------------------------------------

What is event bubbling===>
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

https://dev.to/bouhm/react-redux-flow-terminologies-and-example-104b
https://github.com/sudheerj/reactjs-interview-questions#what-is-redux
https://github.com/sudheerj/javascript-interview-questions
https://www.interviewbit.com/react-native-interview-questions/
https://github.com/samsoul16/react-native-interview-questions#what-are-the-cones-of-react-native

New: 
React JS: https://www.interviewbit.com/react-interview-questions/#react-different-lifecycle
React Native: https://www.interviewbit.com/react-native-interview-questions/
REST API : https://www.interviewbit.com/rest-api-interview-questions/ 
TypeScript:https://www.interviewbit.com/typescript-interview-questions/
NodeJS: https://www.interviewbit.com/node-js-interview-questions/
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
   .then(users=>this.setState({monsters:users}))

