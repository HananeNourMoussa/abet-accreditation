import React from "react";
// material
import { Box, Tabs, Tab, Container, Typography } from "@material-ui/core";
// ----------------------------------------------------------------------

// components
import Page from "../components/Page";

import Students from "./Students";
import Assessments from "./Assessments";
import SO from "./SO";

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Course - CSC 1401 01">
      <Container>
        <Typography variant="h4" gutterBottom mb={5}>
          CSC 1401 01 - Computer Programming
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
          >
            <Tab label="Students" {...a11yProps(0)} />
            <Tab label="Assessments" {...a11yProps(1)} />
            <Tab label="Student Outcomes" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Students/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Assessments />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SO />
        </TabPanel>
      </Container>
    </Page>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
