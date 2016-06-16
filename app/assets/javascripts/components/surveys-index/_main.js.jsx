"use strict";

const Main = React.createClass({
  getInitialState() {
      return {
        userSurveys: {},
      };
  },

  componentDidMount() {
    this.loadSurveys();
  },

  loadSurveys() {
    $.ajax({
      url: '/api/v1/surveys',
      type: 'GET',
      success: (response) => {
        console.log('surveys loaded', response);
        this.setState({userSurveys: response})
      }
    })
  },

  createSurvey(surveyData) {
    $.ajax({
      url: '/api/v1/surveys',
      type: 'POST',
      data: { survey: surveyData },
      success: (response) => {
        console.log('survey created', response);
      },
      error: (error) => {
        console.log(error);
      },
    }).then(this.loadSurveys());
  },

  updateSurvey(survey) {
    $.ajax({
      url: `/api/v1/surveys/${survey.id}`,
      type: 'PUT',
      data: { survey: survey },
      success: (response) => {
        console.log('survey updated', response);
      },
      error: (error) => {
        console.log(error);
      },
    }).then(this.loadSurveys());
  },

  deleteSurvey(survey) {
    console.log("deletesurvey ", survey.id)
    $.ajax({
      url: `/api/v1/surveys/${survey.id}`,
      type: 'DELETE',
      success: (response) => {
        console.log('survey deleted', response);
      },
      error: (error) => {
        console.log(error);
      },
    }).then(this.loadSurveys());
  },

  render() {
    let surveys;
    if (Object.keys(this.state.userSurveys).length != 0) {
      surveys = this.state.userSurveys.map((survey) => {
        return (
          <div key={survey.id}>
            < ExistingSurveys survey={survey}
                              createSurvey={this.createSurvey}
                              updateSurvey={this.updateSurvey}
                              deleteSurvey={this.deleteSurvey} />
          </div>
        )
      })
    }

    return (
      <div key="surveys" className="container center" >
        <h3 className="kraken-color">Existing Surveys</h3>
        {surveys}
        < NewSurvey createSurvey={this.createSurvey} />
      </div>
    )
  }
});