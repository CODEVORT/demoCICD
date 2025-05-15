import React from "react";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from './pages/dashboard/Home';
import Income from './pages/dashboard/Income'
import Expense from './pages/dashboard/Expense';
import
{
  BrowserRouter as Router ,
   Routes ,
    Route ,
   Navigate , 
} from "react-router-dom"

const App = () => {
  return(
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Root></Root>} ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/dashboard" element={<Home></Home>}></Route>
          <Route path="/income" element={<Income></Income>}></Route>
          <Route path="/expense" element={<Expense></Expense>} ></Route>

        </Routes>
      </Router>
    </div>
  )
}
export default App

const Root = ()=> {

  const isAuthenticated = !!localStorage.getItem("token");


  return isAuthenticated ? (<Navigate to="/dashboard" > </Navigate>) : (<Navigate to="/login" ></Navigate>);

};

