import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login";
//Redux

import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert.js";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {


  useEffect(() => {
    store.dispatch(loadUser);
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <main className="container">
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
