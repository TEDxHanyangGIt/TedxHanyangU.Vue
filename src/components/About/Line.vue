<template>
    <script>
        import { Line } from 'vue-chartjs'
        export default {
            extends: Line,
            data () {
                return {
                    datacollection: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                            {
                                label: 'Data One',
                                backgroundColor: '#f87979',
                                pointBackgroundColor: 'black',
                                borderWidth: 1,
                                pointBorderColor: 'black',
                                data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{gridLines: {display: false}}],
                            xAxes: [{gridLines: {display: false}}]
                        },
                        legend: {display: false},
                        responsive: true,
                        maintainAspectRatio: false
                    }
                }
            },
        mounted () {
            this.renderChart(this.datacollection, this.options)
        }
    }
    </script>
</template>