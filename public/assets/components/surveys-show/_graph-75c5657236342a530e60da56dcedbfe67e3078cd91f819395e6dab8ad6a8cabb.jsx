"use strict";

const Graph = React.createClass({

  componentWillUpdate() {
    this.graphResults();
  },

  listOptions() {
    let optionsArray = [];
    this.props.options.forEach(function(option){ optionsArray.push(option.title)})
    return optionsArray;
  },

  listVotes() {
    self = this;
    let votesArray = []
    this.props.votes.forEach(function(vote, index){ votesArray.push(self.props.votes[index])})
    return votesArray;
  },

  graphResults() {
    let self = this;
    var ctx = document.getElementById("resultsChart");
    var resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.listOptions(),
            datasets: [{
                label: '# of Votes',
                data: this.listVotes(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
    });
  },
  render() {
    return (
      <div>
        <canvas id="resultsChart" width="400" height="150"></canvas>
      </div>
    )
  }
});