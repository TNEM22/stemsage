import "./App.css";
import Background from "./components/background";
import Head from "./components/header/head";
import Body from "./components/body/body";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route index element={[<Head prop="home" />, <Body prop="home" />]} />
          <Route
            path="/products"
            element={[<Head prop="products" />, <Body prop="products" />]}
          />
          <Route
            path="/courses"
            element={[<Head prop="courses" />, <Body prop="courses" />]}
          />
          <Route
            path="/blogs"
            element={[<Head prop="blogs" />, <Body prop="blogs" />]}
          />
          <Route
            path="/contacts"
            element={[<Head prop="contacts" />, <Body prop="contacts" />]}
          />
          <Route
            path="/aboutus"
            element={[<Head prop="aboutus" />, <Body prop="aboutus" />]}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
