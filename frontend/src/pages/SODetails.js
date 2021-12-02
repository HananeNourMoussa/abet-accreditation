import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import {
  SOForm,
} from "../components/_dashboard/student";

// material
import {
  Card,
  Stack,
  Container,
  Typography,
  Grid,
  CardContent,
  Link,
  Breadcrumbs,
} from "@material-ui/core";

// components
import Page from "../components/Page";

// ----------------------------------------------------------------------


export default function CreateSO() {
  //const [so, setSO] = useState([]);

  // useEffect(() => {
  //   axios.get(URL + `academics/outcomes/${section_id}`).then((res) => {
  //     setSO(res.data);
  //   });
  // });
  
  return (
    <Page title="Student Outcome Details">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <div>
            <Typography variant="h4" gutterBottom>
              Student Outcome Details
            </Typography>
            <Breadcrumbs separator="•" aria-label="breadcrumb" fontSize={12}>
              <Link
                color="inherit"
                to="/dashboard/orders"
                component={RouterLink}
                underline="hover"
              >
                SO
              </Link>
              <Link
                color="textPrimary"
                to=""
                component={RouterLink}
                aria-current="page"
                underline="hover"
              >
                SO Details
              </Link> 
            </Breadcrumbs>
          </div>
        </Stack>

        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12} //{12 : 6}
            md={12} //{ 6 : 3}
          >
            <Card sx={{ position: "relative" }}>
              <CardContent>
                <SOForm name="SO1" assessment="quiz1" description="Modi cum sit in molestias amet qui qui rerum facilis."/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
