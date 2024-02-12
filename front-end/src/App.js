import "./App.css";
import React, { useContext } from "react";
import MainSection from "./layout/MainSection";
import Notification from "./components/Notification";
import { MainContext } from "./context/mainContext";
import { clearError, clearSuccess } from "./actions/publicActions";
import { Route, Switch } from "react-router-dom";
import Channels from "./layout/Channels";
import MessageBody from "./components/MessageBody";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const state = useContext(MainContext);
  const { success, error } = state;
  return (
    <div className="App">
      <MainSection>
        <Switch>
          <Route path="/" exact component={Channels} />
          <Route path="/channel/messages/:channelId" component={MessageBody} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainSection>
      <Notification messages={error} clearMessages={clearError} />
      <Notification messages={success} clearMessages={clearSuccess} />
    </div>
  );
}

export default App;
