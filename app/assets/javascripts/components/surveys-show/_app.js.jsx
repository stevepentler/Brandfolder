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
    let self = this;
    setInterval(function() {
      self.loadSurvey();
    }, 3000);
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
        console.log(error);
      }
    })
  },

  handleVote(option, survey) {
    this.setStorage(survey);
    $.ajax({
      url: '/api/v1/votes',
      type: 'POST',
      data: { optionId: option.id },
      success: (response) => {
        console.log('vote created', response);
      },
      error: (error) => {
        console.log(error);
      }
    }).then(this.loadSurvey());
  },

  setStorage(survey) {
    localStorage.setItem(`pollMachine${survey.id}`, "responded");
  },


  render() {
    return (
      <div className="container" >
        < SurveyResults survey={this.state.survey}
                        options={this.state.options}
                        votes={this.state.votes}
                        handleVote={this.handleVote} />
      </div>
    )
  }
});