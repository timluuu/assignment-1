var app = angular.module('app', []);

google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
    var dataArray = formatDataForView(data);
    var table = google.visualization.arrayToDataTable(dataArray, false);
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    
    var options = {'title':'Average Life Expectancy'}
    chart.draw(table, options);

  });
}]);

function formatDataForView(chartdata) {
  
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
  
    return data;
}