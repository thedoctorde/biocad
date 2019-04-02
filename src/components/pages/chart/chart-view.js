import React, {Component} from 'react';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import randomDataService from "../../../services/random"

const NUM_VISIBLE_POINTS_ON_CHART = 10;
const ANIMATION_DURATION_MS = 300;

export default class Chart extends Component {

    constructor(props) {
        super(props);
        randomDataService.Init();
        this.chartRef = React.createRef();
    }

    chartOptions = {
        animation: false,
        title: {
            text: 'Random data chart'
        },
        type: "spline",
        plotOptions: {
            series: {
                animation: false,
                marker: {
                    enabled: false,
                },
            }
        },
        series: [{
            data: [],
            animation: false,
            type: "spline"
        }],
    }

    onMessage = (self) => (evt) => {
        let data = JSON.parse(evt.data);
        self.addPointOnChart(data.x);
    };

    addPointOnChart = (x) => {
        let redraw = true;
        let shift = false;
        let animation = {
            duration: ANIMATION_DURATION_MS
        };
        if (this.chartRef.current.chart.series[0].data &&
            this.chartRef.current.chart.series[0].data.length > NUM_VISIBLE_POINTS_ON_CHART) {
            shift = true;
        }
        this.chartRef.current.chart.series[0].addPoint(x, redraw, shift, animation);
    }

    componentDidMount() {
        randomDataService.SubscribeOnMessageReceive(this.onMessage(this));
    }

    render() {
        return (
            <div>
                <h1>Chart</h1>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.chartOptions}
                    ref={this.chartRef}
                />
            </div>
        );
    }

    componentWillUnmount() {
        randomDataService.Destroy()
    }
}