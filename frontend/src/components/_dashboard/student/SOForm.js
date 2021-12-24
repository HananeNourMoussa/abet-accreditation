import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import axios from "axios";

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
URL = "http://localhost:3000/"
// import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function UserForm({ name, assessment, description }) {
  const navigate = useNavigate();

  const Schema = Yup.object().shape({
    name: Yup.string(),
    assessment: Yup.string(),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
    name: name,
    assessment: assessment,
    description: description,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      axios.post(URL+`academics/postoutcome/outcome`,
       {         
            outcome_num:Math.floor(Math.random()*100),
            desc: "Hello World", 
            course_code: "CSC2306"
        }).then((res)=> console.log(res.data));
      navigate("/dashboard", { replace: true });
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
        noValidate
        onSubmit={(values) => handleSubmit(values)}
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
                <InputLabel id="demo-simple-select-label">
                  Assessment
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="assessment"
                  value={values.assessment}
                  onChange={formik.handleChange}
                  label="Assemssment"
                >
                  <MenuItem value={"quiz1"}>Quiz1</MenuItem>
                  <MenuItem value={"midterm1"}>Midterm1</MenuItem>
                  <MenuItem value={"quiz2"}>Quiz2</MenuItem>
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
            <Grid item xs={12} sm={12}>
              <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
                value={values.description}
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
          {!name ? "Create new SO" : "Modify SO"}
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
