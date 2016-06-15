"use strict";

const Options = React.createClass({
  handleVote(option) {

  },

  listOptions(option) {
    return (
      <div key={option.id}>
        <button onClick={this.handleVote.bind(this, option)} className="btn">Vote for: {option.title}</button>
      </div>
    )
  },

  render() {
    let options = this.props.options.map(this.listOptions);
    console.log("options", options)
    return (
      <div>
        {options}
      </div>
    )
  }
});
