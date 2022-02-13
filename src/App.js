import "./App.css";
import React, { Suspense, lazy } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageLoader } from "./Components/componentsCollection"
// import Home from "./Components/Home";
// import HomeAfter from "./Components/HomeAfter";
// import ProfileWallet from "./Components/ProfileWallet";
// import Hoc from './Components/Hoc';
// import Cards from "./Components/Cards";
// import Roulette from "./Components/Roulette";
// import Pocker from "./Components/poker";
// import FastGame from "./Components/FastGame";
// import Sports from "./Components/Sports";
// import PrivacyPolicy from "./Components/PrivacyPolicy";

const Home = lazy(() => import('./Components/Home'));
const HomeAfter = lazy(() => import('./Components/HomeAfter'));
const ProfileWallet = lazy(() => import('./Components/ProfileWallet'));
const Hoc = lazy(() => import('./Components/Hoc'));
const Cards = lazy(() => import('./Components/Cards'));
const Roulette = lazy(() => import('./Components/Roulette'));
const Pocker = lazy(() => import('./Components/poker'));
const FastGame = lazy(() => import('./Components/FastGame'));
const Sports = lazy(() => import('./Components/Sports'));
const PrivacyPolicy = lazy(() => import('./Components/PrivacyPolicy'));


function App() {
  let auth;
  auth = localStorage.getItem("auth")

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Suspense fallback={<PageLoader />}>
              <HomeAfter />
              {/* <Hoc comp={HomeAfter}/> */}
            </Suspense>
          </Route>
          <Route path="/cards">
            <Suspense fallback={<PageLoader />}>
              <Cards />
            </Suspense>
          </Route>
          <Route path="/roulette">
            <Suspense fallback={<PageLoader />}>
              <Roulette />
            </Suspense>
          </Route>
          <Route path="/pocker">
            <Suspense fallback={<PageLoader />}>
              <Pocker />
            </Suspense>
          </Route>
          <Route path="/fastgame">
            <Suspense fallback={<PageLoader />}>
              <FastGame />
            </Suspense>
          </Route>
          <Route path="/sports">
            <Suspense fallback={<PageLoader />}>
              <Sports />
            </Suspense>
          </Route>
          <Route path="/privacy-policy">
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          </Route>
          <Route path="/wallet">
            <Suspense fallback={<PageLoader />}>
              {/* <ProfileWallet /> */}
              <Hoc comp={ProfileWallet} />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<PageLoader />}>
              {
                !auth ? <Home /> : <HomeAfter />
              }
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
