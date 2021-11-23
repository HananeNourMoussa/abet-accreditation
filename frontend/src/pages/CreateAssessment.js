import { Link as RouterLink } from "react-router-dom";

import {
    AssessmentForm,
} from "../components/_dashboard/user";

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

export default function CreateAssessment() {
  return (
    <Page title="Create Assessment">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <div>
            <Typography variant="h4" gutterBottom>
            Create Assessment
            </Typography>
            <Breadcrumbs separator="•" aria-label="breadcrumb" fontSize={12}>
              <Link
                color="inherit"
                to="/dashboard/products"
                component={RouterLink}
                underline="hover"
              >
                Assessments
              </Link>
              <Link
                color="textPrimary"
                to=""
                component={RouterLink}
                aria-current="page"
                underline="hover"
              >
                New Assessment
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
                <AssessmentForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
