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

  createSurvey(survey) {
    $.ajax({
      url: '/api/v1/surveys',
      type: 'POST',
      data: { survey: survey },
      success: (response) => {
        console.log('surveys loaded', response);
        this.setState({userSurveys: response})
      }
    }).then(this.loadSurveys);
  },

  render() {
    let surveys;
    if (Object.keys(this.state.userSurveys).length != 0) {
      surveys = this.state.userSurveys.map((survey) => {
        return (
          <div key={survey.id}>
            < ExistingSurveys survey={survey}
                              createSurvey={this.createSurvey} />
          </div>
        )
      })
    }

    return (
      <div key="surveys" className="container" >
        {surveys}
        < NewSurvey createSurvey={this.createSurvey} />
      </div>
    )
  }
});