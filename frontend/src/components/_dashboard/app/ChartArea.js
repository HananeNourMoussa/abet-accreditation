import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
//
import { BaseOptionChart } from '../../charts';
import { Card, CardHeader, Box } from '@material-ui/core';
// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: 'CSC1401', data: [80, 70, 85, 84, 90, 74, 100] },
  { name: 'CSC2303', data: [70, 90, 86, 87, 90, 94, 79] },
  { name: 'PHY1402', data: [79, 68, 80, 80, 85, 91.5, 82.3] },

];

export default function ChartArea() {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      type: 'String',
      categories: [
        'SO1',
        'SO2',
        'SO3',
        'SO4',
        'SO5',
        'SO6',
        'SO7'
      ]
    },
    tooltip: { x: { format:String } }
  });

  return (
    <Card>
      <CardHeader title="Average SO grade Per Course" subheader="Across All Sections" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
