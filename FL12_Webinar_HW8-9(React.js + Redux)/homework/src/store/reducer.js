import * as actionTypes from "./actions";

const initialState = {
  listOfCourses: [
    {
      id: 1,
      date: "2020-01-08",
      subject: "Prerequisetes",
      description: "webpack, angularcli, typescript",
      duration: "1h 34min",
      authors: "Volodymyr Shevchenko"
    },
    {
      id: 2,
      date: "2018-05-08",
      subject: "Components",
      description: "Components, lifecycle, template DSL, and data binding",
      duration: "1h 34min",
      authors: "Igor Voytovych"
    },
    {
      id: 3,
      date: "2013-01-08",
      subject: "Directives and Pipes",
      description:
        "Directives, types and directives, built-in directives, custom directive",
      duration: "1h 34min",
      authors: "Olena Pron"
    }
  ]
};

let uniqueId = initialState.listOfCourses.length + 1;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_COURSE:
      return {
        ...state,
        listOfCourses: state.listOfCourses.filter(
          item => item.id !== action.payload
        )
      };
    case actionTypes.ADD_COURSE: {
      const listOfCourses = state.listOfCourses.map(elem => ({ ...elem }));
      listOfCourses.push({ id: uniqueId, ...action.payload });
      uniqueId++;
      return {
        ...state,
        listOfCourses: listOfCourses
      };
    }
    case actionTypes.EDITE_COURSE: {
      return {
        ...state,
        listOfCourses: state.listOfCourses.map(elem =>
          elem.id === +action.payload.id ? { ...action.payload } : elem
        )
      };
    }
  }
  return state;
};
