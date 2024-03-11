import React from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <VideoCard />
      </div>
    </Provider>
  );
};

export default App;
