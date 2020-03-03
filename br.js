let canvas= document.getElementById("Bridges")
console.log(canvas)
let ctx =canvas.getContext('2d')


chart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bride", "Geaorge Washington Bridge", "Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Span Length',
            data:[1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['green', 'blue' , 'red' , 'yellow', 'orange']
            }]
    }, option: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

