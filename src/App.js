import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  // isLoggedIn => This is a state variable
  // setIsLoggedIn => This is a function
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // To check the variable function is working or not
  // useEffect(() => {
  //   console.log("Hello in My App");
  //   setIsLoggedIn(false);
  // })

  return ( 
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-auto">
      {/* Path will be forward slash & Element that will be equal to Home component */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>  
        }/>
        

      </Routes>
            
    </div>
  );
}

export default App;
