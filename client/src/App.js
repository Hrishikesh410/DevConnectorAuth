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
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <main className="container">
          <Alert/>
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
