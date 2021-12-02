import { Link as RouterLink } from "react-router-dom";

import { UserForm } from "../components/_dashboard/student";

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
  //const [student, setStudent] = useState([]);

  // useEffect(() => {
  //   axios.get(URL + `academics/outcomes/${section_id}`).then((res) => {
  //     setStudent(res.data);
  //   });
  // });
  
  return (
    <Page title="Student's Details">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <div>
            <Typography variant="h4" gutterBottom>
              Student's Details
            </Typography>
            <Breadcrumbs separator="•" aria-label="breadcrumb" fontSize={12}>
              <Link
                color="inherit"
                to="/dashboard/students"
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
                details
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
                <UserForm
                  fname="Alfred"
                  lname="Ledner"
                  major="csc"
                  id="101282"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
