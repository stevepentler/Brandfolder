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

  render() {
    let surveys;
    if (Object.keys(this.state.userSurveys).length != 0) {
      surveys = this.state.userSurveys.map((survey) => {
        return (
          <div key={survey.id}>
            < Survey survey={survey} />
          </div>
        )
      })
    }

    return (
      <div key="surveys" >
        {surveys}
      </div>
    )
  }
});