"use strict";

const Survey = React.createClass({
  render() {
    let survey = this.props.survey;
    let path = `surveys/${survey.id}`
    console.log("survey", survey)
    return(
      <a href={path}>
        <h3>{survey.name}</h3>
      </a>
    )
  }
});