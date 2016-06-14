"use strict";

const Main = React.createClass({
  function addOption() {
    let optionCounter = 3;
    $('.options-list').append(
        `<div class="row">
          <div class="input-field">
            <label for="survey[options][]">Option ${optionCounter}</label>
            <input name="survey[options][]" type="text">
          </div>
        </div>`
    )
  optionCounter += 1;
  }
  render() {
    return(
      <div className="row center">

        <form onSubmit={this.createSurvey} id="survey-form" className="col s6 offset-s3">
          <div className="row">
            <div className="input-field">
              <label for="survey[question]">Question</label>
              <input name="survey[question]" type="text">
            </div>
          </div>
          <div className="options-list">
            <div className="row">
              <div className="input-field">
                <label for="survey[options][]">Option 1</label>
                <input name="survey[options][]" type="text">
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <label for="survey[options][]">Option 2</label>
                <input name="survey[options][]" type="text">
              </div>
            </div>
          </div>
          <button type="button" onClick="addOption()" className="btn" id="add-option">Add Option</button>
          <br><br>
          <div className='row'>
            <div>
              <label for="survey[date]">Optional Expiration Date</label>
              <input name="survey[date]" type="date" className="datepicker">
            </div>

          </div>
          <input type="submit" className="btn">
        </form>
      </div>
      )
  }
})