"use strict";

const ExistingSurveys = React.createClass({

  componentDidMount() {
      this.checkExpiration();
  },

  checkExpiration(){
    let expirationDate = new Date(this.props.survey.expiration);
    let expirationEpoch = expirationDate.getTime();
    let currentEpoch = Date.now();
    console.log("expirationEpoch", expirationEpoch)
    console.log("currentEpoch", currentEpoch)
    if (expirationEpoch < currentEpoch) {
      this.props.updateSurvey(this.props.survey)
    }
  },

  render() {
    let survey = this.props.survey;
    let path = `surveys/${survey.id}`;
    let status = survey.active ? "Active" : "Inactive";
    console.log("survey", survey)
    return(
      <div>
        <a href={path}>
          <span>{survey.name} - {status} </span>
        </a>
        <button onClick={this.props.deleteSurvey.bind(this, survey)} className="btn">Delete Survey</button>
      </div>
    )
  }
});