var app = angular.module('app', []);

app.controller('dataController', function($scope, $http) {
  $http.get("https://assignment-1-timluuu.c9users.io/sample").then(function (response) {
    
      google.charts.load('current', {'packages':['corechart', 'line']});
      google.charts.setOnLoadCallback(function() {
        drawChart(response.data);
      });
  });
});

      function drawChart(chartdata) {
        var data = [];
        var header = ['Year', 'White', 'Black'];
        
        data.push(header);
        
        for (var i=0; i<chartdata.length/2; i++) {
          var temp = [];
          temp.push(chartdata[i].Year);
          temp.push(chartdata[i].Avg_Life_Expectancy);
          temp.push(chartdata[i+114].Avg_Life_Expectancy);
          data.push(temp);
        }
        
        console.log(data);
        
        var g_data = google.visualization.arrayToDataTable(data);

        var options = {
          title: 'Average Life Expectancy',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(g_data, options);
      }