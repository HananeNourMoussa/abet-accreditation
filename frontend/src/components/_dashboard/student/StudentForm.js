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
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { Save } from "@material-ui/icons";

// import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function UserForm({
  fname,
  lname,
  major,
  id,
  city,
  address,
  dob,
  country,
}) {
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    id: Yup.string(),
    major: Yup.string(),
    country: Yup.string(),
    city: Yup.string(),
    address: Yup.string(),
    birthDate: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: fname,
      lastName: lname,
      id: id,
      major: major,
      country: country,
      city: city,
      address: address,
      birthDate: dob,
    },
    validationSchema: Schema,
    onSubmit: () => {
      navigate("/dashboard/", { replace: true });
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
        // initialValues={EinitialValues}
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
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                value={values.lastName}
                onChange={formik.handleChange}
                label="Last Name"
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
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Major
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="major"
                  value={values.major}
                  onChange={formik.handleChange}
                  label="Major"
                >
                  <MenuItem value={"csc"}>CSC</MenuItem>
                  <MenuItem value={"ge"}>GE</MenuItem>
                  <MenuItem value={"ems"}>EMS</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Id"
                id="id"
                value={values.id}
                onChange={formik.handleChange}
                type="id"
              />
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
          {!fname ? "Create new Student" : "Modify Student"}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
