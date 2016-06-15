"use strict";

const Options = React.createClass({
  listOptions(option) {
    return (
      <div key={option.id}>
        <button onClick={this.props.handleVote.bind(null, option)} className="btn">Vote for: {option.title}</button>
      </div>
    )
  },

  render() {
    let options;
    if (this.props.survey.active) {
      options = this.props.options.map(this.listOptions);
    } else {
      options = <h4>This survey has closed!</h4>;
    }
    return (
      <div>
        {options}
      </div>
    )
  }
});
