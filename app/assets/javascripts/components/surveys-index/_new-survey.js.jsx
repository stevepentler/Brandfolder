"use strict";

const NewSurvey = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    let surveyData = {
      surveyName: this.refs.surveyName.value,
      surveyQuestion: this.refs.surveyQuestion.value,
      surveyExpiration: this.refs.surveyExpiration.value,
      surveyOptions: [this.refs.option1.value, this.refs.option2.value, this.refs.option3.value]
    }
    console.log("surveyData", surveyData);
    this.props.createSurvey(surveyData);
    this.refs.surveyForm.reset();
  },

  render() {
    return (
      <div className="row card custom-padding">
        <form className="center" ref="surveyForm">
          <div className="col s6">
            <input type="text" ref="surveyName" placeholder="Name" required />
            <input type="text" ref="surveyQuestion" placeholder="Question" required />
            <input type="date" ref="surveyExpiration" placeholder="Expiration Date" />
          </div>
          <div className="col s6">
            <input type="text" ref="option1" placeholder="Option 1" required />
            <input type="text" ref="option2" placeholder="Option 2" required />
            <input type="text" ref="option3" placeholder="Option 3" required />
          </div>
          <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn center">Create Survey</button>
        </form>
      </div>
    )
  }
});