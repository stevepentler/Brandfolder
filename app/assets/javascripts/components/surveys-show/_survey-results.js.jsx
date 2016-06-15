"use strict";

const SurveyResults = React.createClass({
  render() {
    let survey = this.props.survey;
    let votes = this.props.votes;
    let link = `/surveys/${survey.id}`
    return(
      <div>
        <h3>{survey.name}</h3>
        <a href={link}>
          <span>sharable link</span>
        </a>
<div class="fb-share-button" data-href="https://127.0.0.1:3000/surveys/1" data-layout="button_count" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flocalhost%3A3000%2Fsurveys%2F1&amp;src=sdkpreparse">Share</a></div>
        < Options options={this.props.options}
                  survey={this.props.survey}
                  handleVote={this.props.handleVote} />
      </div>
    )
  }
})