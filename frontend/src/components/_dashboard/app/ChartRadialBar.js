import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme } from '@material-ui/core/styles';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { Card, CardHeader, Box } from '@material-ui/core';
import { BaseOptionChart } from '../../charts';
// ----------------------------------------------------------------------

const CHART_DATA = [85,80,78,92,81.2,94,79.5];

export default function ChartRadialBar() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    labels: ['SO1','SO2','SO3','SO4','SO5','SO6','SO7'],
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [ 
            { offset: 0, color: theme.palette.primary.main },
            { offset: 100, color: theme.palette.primary.main}
          ],
          [
            { offset: 0, color: theme.palette.warning.main },
            { offset: 100, color: theme.palette.warning.main }
          ],
          [
            { offset: 0, color: theme.palette.info.main },
            { offset: 100, color: theme.palette.info.main }
          ],
          [
            { offset: 0, color: theme.palette.error.main },
            { offset: 100, color: theme.palette.error.main }
          ],
          [
            { offset: 0, color: theme.palette.success.main},
            { offset: 100, color: theme.palette.success.main }
          ],
          [
            { offset: 0, color: theme.palette.warning.dark},
            { offset: 100, color: theme.palette.warning.dark }
          ],
          [
            { offset: 0, color: theme.palette.info.dark },
            { offset: 100, color: theme.palette.info.dark }
          ]
        ]
      }
    },
    legend: { horizontalAlign: 'center' },
    plotOptions: {
      radialBar: {
        hollow: { size: '16.5%' },
        dataLabels: {
          value: { offsetY: 155 },
          
        }
      }
    }
  });

  return <Card>
    <CardHeader title="Students' Success Rate Per SO" subheader="Across All Sections & Courses" />  
    <ReactApexChart type="radialBar" series={CHART_DATA} options={chartOptions} height={400} />;

    </Card>
}
