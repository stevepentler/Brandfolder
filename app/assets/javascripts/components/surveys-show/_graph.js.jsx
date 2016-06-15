"use strict";

const Graph = React.createClass({
  componentDidMount() {
    this.listTitles();
    this.graphResults();
  },

  listTitles() {
      console.log("survey", this.props.survey)
      console.log("options", this.props.options)
  },

  graphResults() {
    let self = this;
    var ctx = document.getElementById("resultsChart");
    var resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["A", "B", "C"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
    });
  },
  render() {
    return (
      <div>
        <canvas id="resultsChart" width="400" height="400"></canvas>
      </div>
    )
  }
});