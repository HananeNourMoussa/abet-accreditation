
const testConfig = (course_id) => {
  return ([
  {
    title: "Students",
    path: `/dashboard/students/${course_id}`,
  },

  {
    title: "Students Outcomes",
    path: `/dashboard/so/${course_id}`,
  },

  {
    title: "Assessments",
    path: `/dashboard/assessments/${course_id}`,
  },

])}

export default testConfig;
