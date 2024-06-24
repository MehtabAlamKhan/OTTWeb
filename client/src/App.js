import React, { useEffect, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loaduser } from "./actions/authAction";

// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import store from "./redux/store";
import NavBar from "./components/HScomps/Components/NavBar/NavBar";

const TVShowScreen = lazy(() => import("./components/Screens/TVShowScreen"));
const HomeScreen = lazy(() => import("./components/Screens/HomeScreen"));
const MovieScreen = lazy(() => import("./components/Screens/MovieScreen"));

const renderLoader = () => (
  <h1
    style={{
      position: "absolute",
      display: "flex",
      color: "white",
      alignSelf: "center",
      justifySelf: "center",
    }}
  >
    Loading
  </h1>
);

function App() {
  useEffect(() => {
    // console.log("APP CMP Trying to Load user");
    store.dispatch(loaduser());
  }, []);

  return (
    <Provider store={store}>
      <Suspense fallback={renderLoader()}>
        <Router>
          <>
            {/* <VideoPlayer /> */}
            {/* <HomeScreen /> */}
            <NavBar />
            <Route path="/OTTWeb" exact component={HomeScreen} />
            <Route path="/tv/:id" component={TVShowScreen} />
            <Route path="/movie/:id" component={MovieScreen} />
          </>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
