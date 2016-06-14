"use strict";

const Survey = React.createClass({
  render() {
    let survey = this.props.survey;
    let path = `surveys/${survey.id}`;
    let status = survey.active ? "Active" : "Inactive";
    console.log("survey", survey)
    return(
      <a href={path}>
        <h3>{survey.name} - {status}</h3>
      </a>
    )
  }
});