"use strict";

const NewSurvey = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    let expiration = this.handleDate(this.refs.surveyExpiration.value);
    console.log("expiration", expiration)
    let surveyData = {
      surveyName: this.refs.surveyName.value,
      surveyQuestion: this.refs.surveyQuestion.value,
      surveyExpiration: expiration,
      surveyOptions: [this.refs.option1.value, this.refs.option2.value, this.refs.option3.value]
    }
    console.log("surveyData", surveyData);
    this.props.createSurvey(surveyData);
    this.refs.surveyForm.reset();
  },

  handleDate(dateString) {
    console.log("datestring", dateString)
    let date = new Date(dateString);
    console.log("date", date)
    let expiration = date.getTime();
    console.log("expiration", expiration)
    return expiration;
  },

  render() {
    return (
      <div>
        <form className="center" ref="surveyForm">
          <input type="text" ref="surveyName" placeholder="Name" required />
          <input type="text" ref="surveyQuestion" placeholder="Question" required />
          <input type="text" ref="option1" placeholder="Option 1" required />
          <input type="text" ref="option2" placeholder="Option 2" required />
          <input type="text" ref="option3" placeholder="Option 3" required />
          <input type="date" ref="surveyExpiration" placeholder="Expiration Date" />
          <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn center">Create Survey</button>
        </form>
      </div>
    )
  }
});