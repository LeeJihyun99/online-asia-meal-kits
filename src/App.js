import Home from "./routes/home/home.component";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/naviation.component";

const Shop = ()=>{
  return(
    <h2>I'm the shop page.</h2>
  )
};

const Contact = ()=> {
  return(
    <h2>I'm the contact page. </h2>
  )
}

const Signin = ()=> {
  return(
    <h2>I'm the registration page.</h2>
  )
}

const Buy = ()=> {
  return(
    <h2>I'm the bag page.</h2>
  )
}

const App= () =>{
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='Signin' element={<Signin/>}/>
        <Route path='Buy' element={<Buy/>}/>
      </Route>
    </Routes>
  )
}
export default App;

