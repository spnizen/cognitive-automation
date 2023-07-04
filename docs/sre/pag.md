                 
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>    
                
<canvas id="myChart" style="width:100%;max-width:600px;text-decoration-color:white;"></canvas>

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


``` mermaid
    %%{init: {"pie": {"textPosition": 0.5}, "themeVariables": {"pieOuterStrokeWidth": "5px"}} }%%
    pie showData
        title Key elements in Product X
        "Calcium" : 42.96
        "Potassium" : 50.05
        "Magnesium" : 10.01
        "Iron" :  5
```

``` mermaid
    pie title Failed Jobs by Squads
        "Windows" : 386
        "Linux" : 85
        "TSM" : 15
        "Network" : 110
        "CPS" : 10


```