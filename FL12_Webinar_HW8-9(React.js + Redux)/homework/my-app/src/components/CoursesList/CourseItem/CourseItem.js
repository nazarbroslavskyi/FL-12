import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DELETE_COURSE } from "../../../store/actions";


class CourseItem extends Component {
  deleteItem(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { date, subject, description, duration, id } = this.props.data;
    return (
      <div className="course-item">
        <div className="course-item__date">{date}</div>
        <div className="course-item__subject">{subject}</div>
        <div className="course-item__desc">{description}</div>
        <div className="course-item__duration">{duration}</div>
        <div className="course-item__option">
          <div className="dropdown">
            <button className="dropbtn"></button>
            <div className="dropdown-content">
              <Link to={`/edit-course/${id}`}>
                <span>
                  <span className="edit-icon"></span>Edit
                </span>
              </Link>
              <span onClick={() => this.deleteItem(id)}>
                <span className="delete-icon"></span>Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch({ type: DELETE_COURSE, payload: id })
  };
};

export default connect(null, mapDispatchToProps)(CourseItem);
