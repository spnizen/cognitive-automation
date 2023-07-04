         
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>    
                
<canvas id="myChart" style="width:100%;max-width:600px;     text-decoration-color:white;"></canvas>

<script>
var xValues = ["Incident", "Change Request", "Service Request", "Problem", "SPN"];
var yValues = [10, 9, 44, 24, 25];
var barColors = ["red", "green","blue","orange","cyan"];
          
new Chart("myChart", {
type: "bar",
data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Daily SoD Report"
    }
}
});
</script>