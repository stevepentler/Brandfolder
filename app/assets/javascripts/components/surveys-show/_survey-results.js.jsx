"use strict";

const SurveyResults = React.createClass({
  render() {
    let survey = this.props.survey;
    let votes = this.props.votes;
    return(
      <div>
        <h3>{survey.name}</h3>
        <h3>{survey.question}</h3>
        < Options options={this.props.options} />
      </div>
    )
  }
})