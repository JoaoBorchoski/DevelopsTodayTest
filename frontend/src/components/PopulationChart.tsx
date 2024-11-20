"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface PopulationChartProps {
  data: { year: number; value: number }[]
}

export default function PopulationChart({ data }: PopulationChartProps) {
  const chartData = {
    labels: data.map((entry) => entry.year),
    datasets: [
      {
        label: "Population Over Time",
        data: data.map((entry) => entry.value),
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  }

  return <Line data={chartData} />
}
