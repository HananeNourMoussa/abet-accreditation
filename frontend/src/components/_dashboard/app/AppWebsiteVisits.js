import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Quiz',
    type: 'column',
    data: [80, 90, 90, 85, 100, 70,80]
  },
  {
    name: 'Homework',
    type: 'area',
    data: [70, 90, 95, 100,75, 80,80]
  },
  {
    name: 'Midterm',
    type: 'line',
    data: [60, 80, 85, 80, 80, 85,80]
  },
  {
    name: 'Project',
    type: 'line',
    data: [85, 85, 100, 80,76, 50,80]
  },
  {
    name: 'Final',
    type: 'line',
    data: [80, 85, 100, 84, 80, 90,80]
  } 
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '12%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      'SO1',
      'SO2',
      'SO3',
      'SO4',
      'SO5',
      'SO6',
      'SO7'
    ],
    xaxis: { type: 'String' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}%`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Average SO grade Per Assignment" subheader="Across All Sections & Courses" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
