"use strict";

const SurveyResults = React.createClass({
  render() {
    let survey = this.props.survey;
    let votes = this.props.votes;
    let link = `https://poll-machine.herokuapp.com/surveys/` + survey.id
    let facebookHref = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpoll-machine.herokuapp.com%2Fsurveys%2F${survey.id}&amp;src=sdkpreparse`
    let facebookLink = <div className="fb-share-button" data-href={link} data-layout="button_count" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href={facebookHref}>Share</a></div>
    let twitterLink = <a href="https://twitter.com/share" className="twitter-share-button" data-url={link} data-via="Pentophile">Tweet</a>

    return(
      <div>
        <h3 className="center">{survey.name}</h3>
        <a href={link}>
          <span>sharable link</span>
        </a>
        <p>{facebookLink}</p>
        <p>{twitterLink}</p>
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