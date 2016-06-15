"use strict";

const SurveyResults = React.createClass({
  render() {
    let survey = this.props.survey;
    let votes = this.props.votes;
    let link = `/surveys/${survey.id}`
    let facebookLink = <div class="fb-share-button" data-href={link} data-layout="button_count" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fstevepentler&amp;src=sdkpreparse">Share on Facebook</a></div>
    let twitterLink = <a href="https://twitter.com/share" class="twitter-share-button" data-url={link} data-via="Pentophile">Tweet</a>

    return(
      <div>
        <h3 className="center">{survey.name}</h3>
        <a href={link}>
          <span>sharable link</span>
        </a>
        {facebookLink}
        {twitterLink}
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