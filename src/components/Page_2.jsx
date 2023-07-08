import React, { useRef, useState } from 'react';
import { Line } from "react-chartjs-2";
import Reload from "../reuseComponents/Reload";

import {
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    CategoryScale,
    PointElement,
    Tooltip
} from "chart.js";

ChartJS.register(
    CategoryScale, LinearScale, PointElement,
    LineElement, Tooltip, Filler, Legend
);

const Page2 = () => {
    const chartRef = useRef(null);
    const [reload, setReload] = useState(1);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Item 1',
                // data: [400, 200, 300, 400, 300, 600, 800],
                data: Array(7).fill(0).map((elem) => Math.floor(Math.random() * 1000)),
                borderColor: '#00C7F2',
                borderWidth: 3,
                backgroundColor: 'rgba(129, 45, 226, 0.42)',
                lineTension: 0.5,
            },
            {
                fill: true,
                label: 'Item 2',
                // data: [200, 300, 500, 200, 400, 500, 700],
                data: Array(7).fill(0).map((elem) => Math.floor(Math.random() * 1000)),
                borderWidth: 3,
                borderColor: '#0FCA7A',
                backgroundColor: 'rgba(129, 45, 226, 0.42)',
                lineTension: 0.5
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                display: false
            },
            legend: {
                position: "top",
                align: "start",
                labels: false

            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
            tooltip: {
                displayColors: false,
                titleAlign: 'center',
                bodyAlign: 'center',
                bodyColor: '#30E0A1',
                callbacks: {
                    // use label callback to return the desired label
                    label: function (tooltipItem, data) {
                        return `${tooltipItem.dataset.label} - ${tooltipItem.formattedValue}`
                    },
                    labelColor: function (tooltipItem, chart) {
                        return {
                            bodyColor: 'red'
                        }
                    },
                    /*title: function() {}*/
                },
                borderColor: '#30E0A1',
            },
        },
        scales: {
            x: {
                grid: {
                    borderColor: 'rgba(158, 89, 255, 0.29)',
                    color: 'rgba(158, 89, 255, 0.29)',
                    tickColor: 'transparent'
                },
                ticks: {
                    color: '#B8C0CC'
                }
            },
            y: {
                grid: {
                    borderColor: 'rgba(158, 89, 255, 0.29)',
                    color: 'rgba(158, 89, 255, 0.29)',
                    tickColor: 'transparent'
                },
                min: 0, // minimum value
                max: 1000, // maximum value
                ticks: {
                    stepSize: 250,
                    color: '#B8C0CC'
                }
            },
        },
    };
    return (
        <div className="page_2 section">
            <div className="title">
                consulting for startups in fintech
            </div>
            <div className="text">
                Our Team consists of proven experts from finance,
                tech and science. This mix makes it possible
                for our team to deliver the best results to all our clients.
            </div>
            <div id={'element'}></div>
            <div className='parent_chart'>
                <div className="text_info">
                    <div className='info_row'>Growth report</div>
                    <div className='info_row'>annual growth of our customers</div>
                    <div className='info_row'>1,000% in Value</div>
                    <div className='info_row'>Success rate</div>
                    <div className="group_labels">
                        <div className='blue'>Item 1</div>
                        <div className='purple'>Item 2</div>
                    </div>
                </div>
                <div className="chart_antd">
                    <Line ref={chartRef} options={options} data={data} height={110}/>
                </div>
                <Reload setReload={setReload}/>
            </div>
            <div className="rerender" style={{opacity: 0, position: 'absolute'}}>{reload}</div>
        </div>
    );
};

export default Page2;