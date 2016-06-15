"use strict";

const Options = React.createClass({
  listOptions(option) {
    return (
      <div key={option.id}>
        <button onClick={this.props.handleVote.bind(this, option)} className="btn">Vote for: {option.title}</button>
      </div>
    )
  },

  render() {
    let options = this.props.options.map(this.listOptions);
    return (
      <div>
        {options}
      </div>
    )
  }
});
