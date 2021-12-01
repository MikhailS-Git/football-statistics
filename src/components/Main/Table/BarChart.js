import { useEffect, useRef } from 'react';
import '../../../styles/BarChart.css';
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export default function BarChart(){

    const player = useSelector(state => state.currentPlayer)

    const metrics = []

    player.metrics.forEach(el => {
        metrics.push([el.name, el.value])
    });

    metrics.sort((a, b) => b[1] - a[1])

    const labels = metrics.map(el => el[0])
    const values = metrics.map(el => el[1])
    const colors = values.map(val => val >= 0 ? '#F0556F' : '#AAD0F3')

    const data = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: colors
            }
        ]
    }

    const options = {
        responsive: true,
        indexAxis: 'y',
        layout: {
            padding: 5
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false
            }
        }
    }

    Chart.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <div className='barChart'>
            <Bar data={data} options={options} />
        </div>
    )
}