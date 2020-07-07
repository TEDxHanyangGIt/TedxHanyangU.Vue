<script>
import { Line } from 'vue-chartjs'
export default {
    extends: Line,
    data () {
        return {
            datacollection: {
                labels: ['', '', ''],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#ffffff',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: 'white',
                        data: [1, 2, 0, 1, 2]
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