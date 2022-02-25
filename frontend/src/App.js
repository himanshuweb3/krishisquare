import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Escrow from "./pages/Escrow";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin";
import ForgotPassword from "./pages/forgotPassword";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Products from "./pages/Products";
import Insights from "./pages/Insights";
import ResetPassword from "./pages/resetPassword";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    const loadUser = async () => {
      try {
        const config = { headers: { "Content-Type:": "application/json" } };

        const { data } = await axios({
          method: "get",
          url: "/api/v1/users/me",
          config,
        });
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (user && user.role === "admin") {
      history.push("/admin");
    }
  }, [user, history]);

  if (location.pathname === "/admin") {
    return <Admin setUser={setUser} user={user} />;
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/'>
          <Home user={user} />
        </Route>
        <Route exact path='/home'>
          <Home user={user} />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/escrow'>
          <Escrow />
        </Route>
        <Route exact path='/insights'>
          <Insights />
        </Route>
       <Route exact path='/terms'>
          <Terms />
        </Route>
       <Route exact path='/Privacy'>
          <Privacy />
        </Route>
        <Route exact path='/forgot/password'>
          <ForgotPassword />
        </Route>
        <Route exact path='/password/reset/:token'>
          <ResetPassword />
        </Route>
        <Route exact path='/products'>
          <Products user={user} />
        </Route>
        <Route exact path='/login'>
          <Login setUser={setUser} />
        </Route>
        <Route exact path='/signup'>
          <Signup setUser={setUser} />
        </Route>
      </Switch>
      <Footer user={user} setUser={setUser} />
    </div>
  );
}

export default App;
