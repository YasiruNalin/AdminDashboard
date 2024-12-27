import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
                label: 'Sales',
                data: [300, 200, 400],
                backgroundColor: ['#007bff', '#ffc107', '#28a745'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        height: 200  // Add a specific height
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
