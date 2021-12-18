import { Link as RouterLink } from "react-router-dom";

import {
  UserForm,
} from "../components/_dashboard/student";

// material
import {
  Card,
  Stack,
  Container,
  Typography,
  Grid,
  Avatar,
  CardContent,
  Link,
  Breadcrumbs,
} from "@material-ui/core";

// components
import Page from "../components/Page";

// ----------------------------------------------------------------------


export default function UserDetails() {
  return (
    <Page title="Create Student">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <div>
            <Typography variant="h4" gutterBottom>
              Create New Student
            </Typography>
            <Breadcrumbs separator="•" aria-label="breadcrumb" fontSize={12}>
              <Link
                color="inherit"
                to="/dashboard/users"
                component={RouterLink}
                underline="hover"
              >
                Students
              </Link>
              <Link
                color="textPrimary"
                to=""
                component={RouterLink}
                aria-current="page"
                underline="hover"
              >
                New student
              </Link>
            </Breadcrumbs>
          </div>
        </Stack>

        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12} //{12 : 6}
            md={4} //{ 6 : 3}
          >
            <Card sx={{ position: "relative" }} style={{ minHeight: "300px" }}>
              <CardContent style={{ marginTop: "20px" }}>
                <Stack
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                  spacing={3}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/mock-images/avatars/avatar_1.jpg"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  >
                    <Typography
                      gutterBottom
                      variant="caption"
                      sx={{ color: "text.disabled", display: "block" }}
                    >
                      Allowed *.jpeg, *.jpg, *.png, *.gif
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="caption"
                      sx={{ color: "text.disabled", display: "block" }}
                    >
                      max size of 3.1 MB
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12} //{12 : 6}
            md={8} //{ 6 : 3}
          >
            <Card sx={{ position: "relative" }} style={{ minHeight: "300px" }}>
              <CardContent>
                <UserForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
