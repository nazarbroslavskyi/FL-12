import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoursesList from "./components/CoursesList";
import CreateNewCourse from "./components/createNewCourse/createNewCourse";
import EditCourse from "./components/EditCourse";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <CoursesList></CoursesList>
          </Route>
          <Route exact path="/add-course">
            <CreateNewCourse title="New Course"></CreateNewCourse>
          </Route>
          <Route
            exact
            path="/edit-course/:id"
            render={props => <EditCourse title="Edit Course" {...props} />}
          ></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
