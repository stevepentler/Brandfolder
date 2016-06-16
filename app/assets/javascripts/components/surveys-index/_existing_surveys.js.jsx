"use strict";

const ExistingSurveys = React.createClass({

  componentDidMount() {
    this.checkExpiration();
  },

  checkExpiration(){
    let expirationDate = new Date(this.props.survey.expiration);
    let expirationEpoch = expirationDate.getTime();
    let currentEpoch = Date.now();
    if (expirationEpoch < currentEpoch) {
      this.props.updateSurvey(this.props.survey)
    }
  },

  render() {
    let survey = this.props.survey;
    let path = `/surveys/${survey.id}`;
    let status = survey.active ? "active" : "inactive";
    console.log("survey", survey)
    return(
      <div>
        <a href={path}>
          <span className="existing-title">{survey.name} - {status} </span>
        </a>
        <i className="material-icons small" onClick={this.props.deleteSurvey.bind(this, survey)}>delete</i>
      </div>
    )
  }
});