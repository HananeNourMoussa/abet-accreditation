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

export default function UserForm({ name, course, type, date }) {
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    name: Yup.string(),
    course: Yup.string(),
    type: Yup.string(),
    date: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: name,
      course: course,
      type: type,
      date: date,
    },
    validationSchema: Schema,
    onSubmit: () => {
      navigate("/dashboard/assessments/", { replace: true });
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
                id="name"
                value={values.name}
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
                  id="course"
                  value={values.course}
                  onChange={formik.handleChange}
                  label="Course"
                >
                  <MenuItem value={"CSC1401"}>CSC1401</MenuItem>
                  <MenuItem value={"CSC2303"}>CSC2303</MenuItem>
                  <MenuItem value={"PHY1402"}>PHY1402</MenuItem>
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
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="type"
                  value={values.type}
                  onChange={formik.handleChange}
                  label="Type"
                >
                  <MenuItem value={"quiz"}>Quiz</MenuItem>
                  <MenuItem value={"midterm"}>Midterm</MenuItem>
                  <MenuItem value={"final"}>Final</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="date"
                value={values.date}
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
          { !name ?
          "Create new Assessment"
          :
          "Modify Assessment"
        } 
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
