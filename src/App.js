import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Login from "./components/Forms/Login";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Purchase from "./components/Products/Purchase";
import Footer from "./components/Shared/Footer";
import Topbar from "./components/Shared/Topbar";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Register from "./components/Forms/Register";
import AllProducts from "./components/Products/AllProducts/AllProducts";

// ---------------links---------------/



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Topbar></Topbar>
          {/* ------------------------------ */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* ------------------------------- */}

            <Route path="/home">
              <Home></Home>
            </Route>
            {/* ------------------------------- */}


            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>



            {/* -------------private route------------------ */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>




            <PrivateRoute path="/Purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>



            {/* -----------Loging --------------- */}


            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* --------------notfound------------------- */}
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          {/* ----------------------------------- */}

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
