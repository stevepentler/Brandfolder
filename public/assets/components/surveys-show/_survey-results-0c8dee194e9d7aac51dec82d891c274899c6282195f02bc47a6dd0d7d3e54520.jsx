"use strict";

const SurveyResults = React.createClass({
  render() {
    let survey = this.props.survey;
    let votes = this.props.votes;
    let link;
    if (survey.id) {
      link = `https://poll-machine.herokuapp.com/surveys/` + survey.id
    }
    let facebookHref = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpoll-machine.herokuapp.com%2Fsurveys%2F${survey.id}&amp;src=sdkpreparse`
    let facebookLink = <div className="fb-share-button" data-href={link} data-layout="button_count" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href={facebookHref}>Share</a></div>
    let twitterLink = <a href="https://twitter.com/share" className="twitter-share-button" data-url={link} data-via="Pentophile">Tweet</a>

    return(
      <div>
        <div className="row">
          <div className="col s6">
            <h2 className="right survey-header">{survey.name}</h2>
          </div>
          <div className="col s6">
            <p>{facebookLink}</p>
            <p>{twitterLink}</p>
            <a href={link}>
              <span>sharable link</span>
            </a>
          </div>
        </div>
        <h4 className="center">{survey.question}</h4>
        < Graph   options={this.props.options}
                  survey={this.props.survey}
                  votes={this.props.votes} />
        < Options options={this.props.options}
                  survey={this.props.survey}
                  handleVote={this.props.handleVote} />
      </div>
    )
  }
})