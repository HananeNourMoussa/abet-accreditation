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
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Assessment
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="lastName"
                  value={values.lastName}
                  onChange={formik.handleChange}
                  label="Last Name"
                >
                  <MenuItem value={10}>Quiz1</MenuItem>
                  <MenuItem value={20}>Midterm1</MenuItem>
                  <MenuItem value={30}>Quiz2</MenuItem>
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
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={formik.handleChange}
                label="CSC Significance"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={formik.handleChange}
                label="GE Significance"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={formik.handleChange}
                label="EMS Significance"
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
              <TextField
                id="country"
                label="Description"
                multiline
                rows={4}
                defaultValue=""
                fullWidth
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
          Create new SO
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
