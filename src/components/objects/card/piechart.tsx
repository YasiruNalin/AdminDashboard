import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
                data: [300, 200, 400],
                backgroundColor: ['#007bff', '#ffc107', '#28a745'],
                borderColor: ['#ffffff', '#ffffff', '#ffffff'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        height: 200
    };

    return <Pie data={data} options={options} />;
};

export default PieChart; 