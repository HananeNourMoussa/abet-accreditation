// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  ChartRadialBar,
  ChartArea,
  BaseOptionChart
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Welcome to MyABET</Typography>
        </Box>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={8.3}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={3.7}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={7.60}>
            <ChartArea />
          </Grid>


          <Grid item xs={12} md={6} lg={4.4}>
            <ChartRadialBar />
          </Grid>
 

          <Grid item xs={12} md={6} lg={12}>
            < AppOrderTimeline/>
          </Grid>
 
        </Grid>
      </Container>
    </Page>
  );
}
