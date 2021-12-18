import React from "react";
// material
import {Link} from 'react-router-dom'
import { Box, Tabs, Tab, Container, Typography } from "@material-ui/core";
// ----------------------------------------------------------------------

// components
import Page from "../../components/Page";
import NavSection from "../../components/NavSectionTest";
import testConfig from "./TestConfig";


// import Students from "./Students";
// import Assessments from "./Assessments";
// import SO from "./SO";

export default function Test({course_id}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title={"Course - " + course_id}>
      <Container>
        <Typography variant="h4" gutterBottom mb={5}>
          {/* CSC 1401 01 - Computer Programming */}
          {course_id}
        </Typography>
        <NavSection navConfig={testConfig(course_id)} mb={5}/>
      </Container>
    </Page>
  );
}
