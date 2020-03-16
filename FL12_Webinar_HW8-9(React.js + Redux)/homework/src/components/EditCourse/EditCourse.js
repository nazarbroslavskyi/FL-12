import React, { Component } from "react";
import AddCourseBtn from "../AddCourseBtn";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actionTypes from "../../store/actions";

class EditCourse extends Component {
  constructor(props) {
    super(props);
    this.saveCourse = this.saveCourse.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.state = {
      subject: "",
      description: "",
      duration: "",
      authors: "",
      date: ""
    };
  }

  componentDidMount() {
    this.checkCourse();
  }

  checkCourse() {
    const course = this.props.listOfCourses.find(
      elem => elem.id === +this.props.match.params.id
    );
    this.setState(() => {
      return {
        ...course
      };
    });
  }

  saveCourse() {
    let { subject, description, duration, date, authors } = this.state;
    if (subject && description && duration && date && authors) {
      this.props.editCouse(this.state);
      this.props.history.push("/");
    } else {
      this.setState(() => ({ formIsValid: false }));
    }
  }

  onHandleChange(event) {
    let { value, name } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  render() {
    let isValidForm = false;
    let { subject, description, duration, date, authors } = this.state;
    if (subject && description && duration && date && authors) {
      isValidForm = true;
    } else {
      isValidForm = false;
    }
    return (
      <>
        <Link to="/">
          <button type="button" className="button-back">
            Back
          </button>
        </Link>
        <div className="add-course">
          <h2>{this.props.title}</h2>
          {isValidForm ? null : (
            <div className="error-message">Please fill all Inputs</div>
          )}
          <form className="add-course-form">
            <div>
              <p>Title*</p>
              <input
                type="text"
                value={this.state.subject}
                name="subject"
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <p>Description*</p>
              <textarea
                name="description"
                value={this.state.description}
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
                    value={this.state.duration}
                    type="text"
                    onChange={this.onHandleChange}
                  />
                </div>
                <div>
                  <p>Authors*</p>
                  <input
                    name="authors"
                    value={this.state.authors}
                    type="text"
                    onChange={this.onHandleChange}
                  />
                </div>
              </div>

              <div className="date-info">
                <p>Date*</p>
                <input
                  name="date"
                  value={this.state.date}
                  type="date"
                  onChange={this.onHandleChange}
                />
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
    editCouse: formValue =>
      dispatch({ type: actionTypes.EDITE_COURSE, payload: formValue })
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
)(withRouter(EditCourse));
