import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
} from "@material-ui/core";
// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import SearchNotFound from "../components/SearchNotFound";

import { ListHead, ListToolbar } from "../components/_dashboard/student";
//
import USERLIST from "../_mocks_/assessment";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "id", label: "ID", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "course", label: "Course", alignRight: false },
  { id: "grade", label: "Average Grade", alignRight: false },
  { id: "date", label: "Assesment Date", alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  // const [assessment, setAssessment] = useState([]);
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");

  // useEffect(() => {
  //   axios.get(URL + `assessments/${section_id}`).then((res) => {
  //     setAssessment(res.data);
  //   });
  // });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = assessment.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );

  // const filteredUsers = applySortFilter(
  //   assessment,
  //   getComparator(order, orderBy),
  //   filterName
  // );


  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="Assesments">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Assessments
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="create"
            startIcon={<Icon icon={plusFill} />}
          >
            Create Assessment
          </Button>
        </Stack>

        <Card>
          <ListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            placeholder="Search Assessment..."
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  // rowCount={assessment.length}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.map((row) => {
                    const { id, name, grade, course, date } =
                      row;

                    return (
                      <TableRow hover key={id} onClick={() => navigate(`details/${id}`)}>
                        <TableCell padding="normal" component="th" scope="row">
                          <Typography variant="subtitle2" noWrap>
                            {id}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">{name || "-"}</TableCell>
                        <TableCell align="left">{course || "-"}</TableCell>
                        <TableCell align="left">{grade + "%"}</TableCell>
                        <TableCell align="left">{date.toDateString()}</TableCell>
                      </TableRow>
                    );
                  })}
                  {filteredUsers && (
                    <TableRow>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
