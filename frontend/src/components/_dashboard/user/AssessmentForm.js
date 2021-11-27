import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";

// material
import {
  Stack,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  Button,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { Save } from "@material-ui/icons";

/*<Input accept="image/*" id="contained-button-file" multiple type="file" />
<Button variant="contained" component="span">
  Upload
</Button>*/

// import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function UserForm({ EinitialValues }) {
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email("You need a valid email"),
    phoneNumber: Yup.string(),
    country: Yup.string(),
    city: Yup.string(),
    address: Yup.string(),
    birthDate: Yup.date(),
  });

  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
    },
    validationSchema: Schema,
    onSubmit: () => {
      navigate("/dashboard/products/", { replace: true });
    },
  });

  const {
    /*errors, touched,*/
    handleSubmit,
    values,
    isSubmitting,
  } = formik; // values, isSubmitting,

  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete="off"
        initialValues={EinitialValues}
        noValidate
        onSubmit={handleSubmit}
      >
        <Stack>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                value={values.firstName}
                onChange={formik.handleChange}
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="lastName"
                  value={values.lastName}
                  onChange={formik.handleChange}
                  label="Last Name"
                >
                  <MenuItem value={10}>CSC1401</MenuItem>
                  <MenuItem value={20}>CSC2303</MenuItem>
                  <MenuItem value={30}>PHY1402</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
            mt={0}
          >
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="lastName"
                  value={values.lastName}
                  onChange={formik.handleChange}
                  label="Last Name"
                >
                  <MenuItem value={10}>Quiz</MenuItem>
                  <MenuItem value={20}>Midterm</MenuItem>
                  <MenuItem value={30}>Final</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="city"
                value={values.city}
                onChange={formik.handleChange}
                label="Assessment Date"
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
            mt={0}
          >
            <Grid item xs={12} sm={12}>
              <label htmlFor="contained-button-file">
                <Input accept="file/*" id="contained-button-file" type="file" />
                <Button variant="contained" component="span">
                  Import Grades
                </Button>
              </label>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
            mt={0}
            mb={3}
          ></Grid>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          startIcon={<Save />}
        >
          Create new Assessment
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
