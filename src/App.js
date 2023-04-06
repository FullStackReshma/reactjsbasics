import React from 'react'
import './App.css';
import { AuthProvider } from './component/auth';
import  Greet  from './component/Greet'
import Welcome from './component/Welcome'
import HelloNew from './component/Hello'
import ClassComp from './component/ClassComp'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'
import HookCounter from './component/HookCounter'
import HookCounterWithObject from './component/HookCounterWithObject'
import HookWithArray from './component/HookWithArray'
import HookInterval from './component/HookInverval'
import HookDataFetching from './component/HookDataFetching'
import UseContextCompA from './component/UseContextCompA';
import UseMemoCounter from './component/UseMemoCounter'
import UseRefInput from './component/UseRefInput';
import UseRefHookInterval from './component/UseRefWithHookInterval'
import {Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import NavBar from './component/Navbar';
import OrderSummary from './component/OrderSummary';
import NoMatchRoute from './component/NoMatchRoute';
import Products from './component/Products';
import NewProducts from './component/NewProducts';
import FeatureProducts from './component/FeatureProducts';
import Users from './component/Users'
import UserDetails from './component/UserDetails'
import DynamicRouteAdmin from './component/DynamicRouteAdmin'
import Profile from './component/Profile'
import Login from './component/Login';
import RequireAuth from './component/RequireAuth';
import ReactRedux from './component/HookReactReduxWithConnect';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import HooksReactRedux from './component/HooksReactRedux';
import HooksReduxCounter from './component/HooksReduxCounter';
import HookReduxUser from './component/HookReduxUser'


export const UserContext = React.createContext()
export const UserAge = React.createContext()

function App() {
  return (
    // <Provider store = { store }>
    //   <div className="App">
    //   {/* <div>
    //     <div>
    //       <HelloNew/>
    //       <Greet name="I'm Reshma Suresh" age="and 27 years old"/>
    //     </div>
    //     <div>
    //       <Welcome name='Component Types' typeOne='Class Component' typeTwo='Functional Component'>
    //         <p>Happy Coding</p>
    //       </Welcome>
    //     <Welcome name= 'Rithick Suresh' heroName='SpiderMan'/>
    //     <Welcome name ='Saritha Suresh' heroName='BatMan'/> 
    //     </div>
    //   </div> */}
    //   {/* <div>
    //   <ClassComp/>
    //   <Counter/>
    //   <FunctionClick/>
    //   <ClassClick/>
    //   </div> */}
    //   {/* <div>
    //     <HookCounter/>
    //     <HookCounterWithObject/>
    //     <HookWithArray/>
    //   </div> */}
    //   {/* <div>
    //     <HookInterval/>
    //     <HookDataFetching/>
    //   </div> */}
    //   {/* <div>
    //     <UserContext.Provider value={"Reshma"}>
    //       <UserAge.Provider value={8}>
    //         <UseContextCompA/> 
    //       </UserAge.Provider>
    //     </UserContext.Provider>
    //   </div> */}
    //   <div>
    //      {/* <UseMemoCounter/> */}
    //      {/* <UseRefInput/>
    //      <UseRefHookInterval/> */}
    //   </div>
    //   <div>
    //     {/* <ReactRedux/> */}
    //     <HooksReactRedux/>
    //     {/* <HooksReduxCounter/> */}
    //     <HookReduxUser/>
    //   </div>
      
    // </div>
    // </Provider>
    
    <AuthProvider>
     <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<HelloNew/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='*' element={<NoMatchRoute/>}/>
      <Route path='products' element={<Products/>}>
        {/* <Route index element={<FeatureProducts/>}/> */}
        <Route path='new' element={<NewProducts/>}/>
        <Route path='featured' element={<FeatureProducts/>}/>
      </Route>
      <Route path='users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<DynamicRouteAdmin/>}/>
      </Route>
      <Route path='profile' element={<RequireAuth> <Profile/> </RequireAuth>}/>
      <Route path='login' element={<Login/>}/>
      
    </Routes>
    </AuthProvider>
  );
}

export default App;
