<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: ['height'],
    data () {
        return {
            datacollection: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#ffffff',
                        pointBackgroundColor: 'rgba(0,0,0,0)',
                        borderWidth: 1,
                        pointBorderColor: 'rgba(0,0,0,0)',
                        data: [0, 1, 0.5, 0, 1]
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display: false
                        },
                        beginAtZero: true
                    }],
                    xAxes: [{
                        display: false,
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {display: false},
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
        this.renderChart(this.datacollection, this.options)
    },
    methods:{
        resetDataNumList(){
            this.datacollection.datasets[0].data = [
                this.getRandomArbitrary(),
                this.getRandomArbitrary(),
                this.getRandomArbitrary(),
                this.getRandomArbitrary(),
                this.getRandomArbitrary()
            ]
            this.$data._chart.update()
        },
        getRandomArbitrary() {
            return Math.random();
        }
    },
    created () {
        this.timer = setInterval(this.resetDataNumList,800)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    }
}
</script>