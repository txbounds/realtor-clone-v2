import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./components/PrivateRoute";
 

function App() {
  return (
   <>
   
<Router>

<Header />
<Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/offers" element={<Offers/>}></Route>
<Route path="/sign-in" element={<SignIn/>}></Route>
<Route path="/sign-up" element={<SignUp/>}></Route>

<Route path="/profile" element={<PrivateRoute/>}>

<Route path="/profile" element={<Profile/>}/> 
</Route>




<Route path="/forgot-password" element={<ForgotPassword/>}></Route>

</Routes>

</Router>


<ToastContainer
position="bottom-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
>


</ToastContainer>

   </>
   
  );
}

export default App;
