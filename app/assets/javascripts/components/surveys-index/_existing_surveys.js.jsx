"use strict";

const ExistingSurveys = React.createClass({
  render() {
    let survey = this.props.survey;
    let path = `surveys/${survey.id}`;
    let status = survey.active ? "Active" : "Inactive";
    console.log("survey", survey)
    return(
      <div>
        <a href={path}>
          <h4>{survey.name} - {status}</h4>
        </a>
      </div>
    )
  }
});