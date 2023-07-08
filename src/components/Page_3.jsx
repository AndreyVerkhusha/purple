import React, { useState } from 'react';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJSLegend, Legend, Tooltip } from "chart.js";
import Reload from "../reuseComponents/Reload";

import progress_1 from '../images/progress_1.svg';
import progress_2 from '../images/progress_2.svg';
import progress_3 from '../images/progress_3.svg';

ChartJSLegend.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Page3 = () => {
    const [reload, setReload] = useState(1);

    const progressItems = [
        {
            img: progress_1,
            text: 'Analysis'
        },
        {
            img: progress_2,
            text: 'Growth Phase'
        },
        {
            img: progress_3,
            text: 'Profit'
        }
    ]
    const total = 5;
    const labels = [
        {
            selectedItem: "Item 1"
        },
        {
            selectedItem: "Item 2"
        },
        {
            selectedItem: "Item 3"
        },
        {
            selectedItem: "Item 4"
        },
        {
            selectedItem: "Item 5"
        }
    ];
    const option = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "Selected",
            fontSize: 20
        },
        legend: {
            labels: {
                fontSize: 45
            }
        },

        plugins: {
            datalabels: {
                backgroundColor: function (context) {
                    return context.dataset.backgroundColor;
                },
                formatter: (val, context) =>
                    `${
                        Math.floor((Number(val) * 100) /
                            context.chart.data.datasets[context.datasetIndex].data.reduce(
                                (a, b) => Number(a) + Number(b),
                                0
                            )
                        )
                    }%`,
                //formatter: (val, context) => `${val}%`,

                borderRadius: 25,
                borderWidth: 3,
                color: "white",
                font: {
                    weight: "bold",
                    size: 12
                },
                padding: 6
            },
            /*  tooltip: {
                  callbacks: {
                      label: (ttItem) =>
                          `${ttItem.label}: ${
                              Math.floor((ttItem.parsed * 100) /
                                  ttItem.dataset.data.reduce((a, b) => Number(a) + Number(b), 0)
                              )
                          }%`
                  }
              },*/
            legend: {
                labels: false
            },
        }
    }
    const res = [...labels].reduce(
        (a, c) => (
            (a[c.selectedItem] = (a[c.selectedItem] || 0) + 1), a
        ),
        {}
    );
    const rounded = Object.entries(res).reduce((acc, [key, value]) => {
        return {...acc, [key]: ((value / total) * 100).toFixed(2)};
    }, {});
    const data = {
        labels: Object.keys(rounded),
        datasets: [
            {
                data: Array(5).fill(0).map((elem) => Math.floor(Math.random() * 25)),
                backgroundColor: ["rgba(66, 62, 224, 0.6)", "rgba(66, 62, 224, 0.7)", "rgba(66, 62, 224, 0.8)", "rgba(66, 62, 224, 0.85)", "rgba(66, 62, 224, 1)"],
                borderColor: ["#343457"],
                borderWidth: 1,
                hoverBackgroundColor: 'transparent',
                hoverBorderColor: ['#96ceff'],
                hoverBorderWidth: 1,
            }
        ]
    };
    return (
        <div className="page_3 section">
            <div className={'container'}>
                <div className="h1">Delivering value in every step of production</div>
                <div className="inner">
                    <div className="parent_chart">
                        <div className="info_row">Meta Info</div>
                        <div className="info_row">This is the body title</div>
                        <div className="info_row">100 Value</div>
                        <div className="info_row">This is a subtitle</div>
                        <div className="chart_block">
                            <Pie
                                data={data}
                                options={option}
                            />
                            <div className="labels">
                                {labels.map((elem, indx) =>
                                    <div key={indx}>{elem.selectedItem}</div>
                                )}
                            </div>
                        </div>
                        <div className="info_row">Meta Info</div>
                        <div className="info_row">This is the body title</div>
                        <div className="info_row">This is a subtitle</div>
                        <Reload setReload={setReload}/>
                    </div>
                    <div className="progress_block">
                        <div className="title">The process</div>
                        <div className="info">
                            Strategic phrases we run through with every client make it possible to
                            implement highly efficinet processes, even in high pace startups that like to scale as fast
                            as possible.
                        </div>
                        <ul className="list">
                            {progressItems.map((elem, indx) =>
                                <li key={indx}>
                                    <img src={elem.img}/>
                                    <div className="div">{elem.text}</div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="back_figure"/>
                </div>
            </div>
            <div className="rerender" style={{opacity: 0, position: 'absolute'}}>{reload}</div>
        </div>
    );
};

export default Page3;