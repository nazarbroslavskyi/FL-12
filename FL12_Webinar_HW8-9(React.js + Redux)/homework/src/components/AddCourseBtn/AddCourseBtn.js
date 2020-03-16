import React, { Component } from "react";

class AddCourseBtn extends Component {
  render() {
    return (
      <button onClick={this.props.saveNewCourse} className="search-panel__button" type="button">
        {this.props.title}
      </button>
    );
  }
}

export default AddCourseBtn;