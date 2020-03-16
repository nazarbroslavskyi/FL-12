import React, { Component } from "react";
import AddCourseBtn from "../AddCourseBtn";
import { Link } from "react-router-dom";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class CreateNewCourse extends Component {
  constructor(props) {
    super(props);
    this.saveCourse = this.saveCourse.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.formValue = {};
    this.checkCourse();
  }

  state = {
    formIsValid: true
  };

  checkCourse() {
    console.log(this.props);
  }

  saveCourse() {
    let { subject, description, duration, date, authors } = this.formValue;
    if (subject && description && duration && date && authors) {
      this.setState(() => ({ formIsValid: true }));
      this.props.addCourse(this.formValue);
      this.props.history.push("/");
    } else {
      this.setState(() => ({ formIsValid: false }));
    }
  }

  onHandleChange(event) {
    this.formValue[event.target.name] = event.target.value.trim();
  }

  render() {
    return (
      <>
        <Link to="/">
          <button type="button" className="button-back">
            Back
          </button>
        </Link>
        <div className="add-course">
          <h2>{this.props.title}</h2>
          {this.state.formIsValid ? null : (
            <div className="error-message">Please fill all Inputs</div>
          )}
          <form className="add-course-form">
            <div>
              <p>Title*</p>
              <input
                type="text"
                name="subject"
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <p>Description*</p>
              <textarea
                name="description"
                name="description"
                cols="30"
                rows="10"
                onChange={this.onHandleChange}
              ></textarea>
            </div>
            <div className="info-block-two">
              <div className="duration-and-autors-info">
                <div>
                  <p>Duration*</p>
                  <input
                    name="duration"
                    type="text"
                    onChange={this.onHandleChange}
                  />
                </div>
                <div>
                  <p>Authors*</p>
                  <input
                    name="authors"
                    type="text"
                    onChange={this.onHandleChange}
                  />
                </div>
              </div>

              <div className="date-info">
                <p>Date*</p>
                <input name="date" type="date" onChange={this.onHandleChange} />
              </div>
            </div>
            <div className="btn-cantainer">
              <AddCourseBtn
                saveNewCourse={this.saveCourse}
                title="Save"
              ></AddCourseBtn>
              <Link to="/">
                <button type="button" className="cancel-btn">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: formValue =>
      dispatch({ type: actionTypes.ADD_COURSE, payload: formValue })
  };
};

const mapStateToProps = state => {
  return {
    listOfCourses: state.listOfCourses
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateNewCourse));
