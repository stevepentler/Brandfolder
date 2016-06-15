"use strict";

const App = React.createClass({
  getInitialState() {
      return {
        survey: [],
        options: [],
        votes: []
      };
  },

  componentDidMount() {
    this.loadSurvey();
  },

  loadSurvey() {
    let surveyId = this.props.params.id;
    $.ajax({
      url: `/api/v1/surveys/${surveyId}`,
      type: 'GET',
      success: (response) => {
        console.log(`survey ${surveyId} loaded`, response);
        this.setState({survey: response.survey,
                       options: response.options,
                       votes: response.votes})
      },
      error: (error) => {
        console.log(error)
      }
    })
  },

  render() {
    return (
      <div className="container" >
        < SurveyResults survey={this.state.survey}
                        options={this.state.options}
                        votes={this.state.votes} />
      </div>
    )
  }
});