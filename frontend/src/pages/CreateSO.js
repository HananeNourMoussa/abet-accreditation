import { Link as RouterLink } from "react-router-dom";

import {
  SOForm,
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

// ----------------------------------------------------------------------


export default function CreateSO() {
  return (
    <Page title="Create Student Outcome">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <div>
            <Typography variant="h4" gutterBottom>
              Create Student Outcome
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
                New SO
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
            <Card sx={{ position: "relative" }} style={{ minHeight: "400px" }}>
              <CardContent>
                <SOForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
