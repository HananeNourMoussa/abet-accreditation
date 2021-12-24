import { filter } from "lodash";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect } from "react";
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
  Tooltip,
} from "@material-ui/core";
// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import SearchNotFound from "../components/SearchNotFound";
import { ListHead, ListToolbar } from "../components/_dashboard/student";
//
import ORDERLIST from "../_mocks_/orders";
URL = "http://localhost:3000/"
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "id", label: "ID", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "desscription", label: "Description", alignRight: false },
  { id: "csc", label: "CSC", alignRight: false },
  { id: "ems", label: "EMS", alignRight: false },
  { id: "ge", label: "GE", alignRight: false },
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

export default function SO() {
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [so, setSo] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const section_id = window.location.pathname.split('/')[3]  

 useEffect(() => {
   axios.get(URL + `academics/${section_id}/outcomes`).then((res) => {
    setSo(res.data);
     console.log(window.location.pathname.split('/')[3], res.data)
   });
 },[]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = ORDERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = so.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredOrders = applySortFilter(
    ORDERLIST,
    getComparator(order, orderBy),
    filterName
  );

  // const filteredOrders = applySortFilter(
  //   so,
  //   getComparator(order, orderBy),
  //   filterName
  // );

  const isOrderNotFound = filteredOrders.length === 0;

  return (
    <Page title="Student Outcomes">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Student Outcomes
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="create"
            startIcon={<Icon icon={plusFill} />}
          >
            New Student Outcome
          </Button>
        </Stack>

        <Card>
          <ListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            placeholder="Search SO ..."
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  //rowCount={ORDERLIST.length}
                  rowCount={so.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {so.map((row) => {
                    const {
                      so_number,
                      so_name,
                      so_description,
                     /*  name,
                      description,
                      csc,
                      ge,
                      ems,
                      cscnum,
                      genum,
                      emsnum, */
                    } = row;

                    return (
                      <TableRow
                        hover
                        key={so_number}
                        onClick={() => navigate(`details/${so_number}`)}
                      >
                        <TableCell padding="normal" component="th" scope="row">
                          <Typography variant="subtitle2" noWrap>
                            {so_number}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">{ "SO"+so_number || "-"}</TableCell>
                        {/* <TableCell align="left">
                          {description || "-"}
                        </TableCell> */}
                        <TableCell padding="normal" component="th" scope="row">
                          <Tooltip title={so_description}>
                            <Typography>
                              {so_description.length > 70
                                ? so_description.slice(0, 70) + "..."
                                : so_description || "-"}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="left">
                          {/* csc + "% (" + cscnum + ")" ||*/ "-"}
                        </TableCell>
                        <TableCell align="left">
                          {/*ge + "% (" + genum + ")" || */"-"}
                        </TableCell>
                        <TableCell align="left">
                          {/*ems + "% (" + emsnum + ")" ||*/ "-"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {filteredOrders && (
                    <TableRow>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isOrderNotFound && (
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
