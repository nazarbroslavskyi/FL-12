import React, { Component } from "react";
import * as actionTypes from "../../store/actions";
import CourseItem from "./CourseItem";
import { connect } from "react-redux";
import AddCourseBtn from "../AddCourseBtn";
import { Link } from "react-router-dom";

class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.onInputHandle = this.onInputHandle.bind(this);
  }

  state = {
    searchValue: ""
  };

  onInputHandle(event) {
    const { value } = event.target;
    this.setState((state, props) => ({
      searchValue: value
    }));
  }

  render() {
    return (
      <>
        <div className="search-panel">
          <input
            className="search-panel__input"
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.onInputHandle}
          />
          <Link to="/add-course">
            <AddCourseBtn title="Add Course"></AddCourseBtn>
          </Link>
        </div>
        <div className="courses-list">
          {this.props.listOfCourses.map(item => {
            if (
              item.subject
                .toLowerCase()
                .startsWith(this.state.searchValue.trim().toLowerCase())
            ) {
              return <CourseItem key={item.id} data={item}></CourseItem>;
            }
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    listOfCourses: state.listOfCourses
  };
};

export default connect(mapStateToProps)(CoursesList);
