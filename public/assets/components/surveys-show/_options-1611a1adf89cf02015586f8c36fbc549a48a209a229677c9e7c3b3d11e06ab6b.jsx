"use strict";

const Options = React.createClass({
  listOptions(option) {
    return (
      <span key={option.id}>
        <button onClick={this.props.handleVote.bind(this, option, this.props.survey)} className="btn align">Vote for: {option.title}</button>
      </span>
    )
  },

  render() {
    let surveyId = this.props.survey.id;
    let options;
    if (!this.props.survey.active) {
      options = <h4>This survey has closed.</h4>;
    } else if (localStorage.getItem(`pollMachine${surveyId}`) === "responded") {
      options = <h4>Thank you for your participation!</h4>
    } else if (this.props.survey.active) {
      options = this.props.options.map(this.listOptions);
    }
    return (
      <div className="center">
        {options}
      </div>
    )
  }
});
