import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";

// material
import { Stack, TextField, Grid } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { Save } from "@material-ui/icons";

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
      navigate("/dashboard/users/details", { replace: true });
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
              <TextField
                fullWidth
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={formik.handleChange}
                label="Phone Number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                onChange={formik.handleChange}
                type="email"
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
              <TextField
                fullWidth
                id="country"
                value={values.country}
                onChange={formik.handleChange}
                label="country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                value={values.city}
                onChange={formik.handleChange}
                id="city"
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
          >
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="address"
                value={values.address}
                onChange={formik.handleChange}
                label="Address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                value={values.date}
                onChange={formik.handleChange}
                id="date"
                //defaultValue="2017-05-24"
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
            </Grid>
          </Grid>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          startIcon={<Save />}
        >
          Create new Student
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
