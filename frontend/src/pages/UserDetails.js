import { useState } from "react";
import { filter } from "lodash";
import { Link as RouterLink } from "react-router-dom";

import {
  ListHead,
  ListToolbar,
  UserForm,
} from "../components/_dashboard/user";

// material
import {
  Card,
  Stack,
  Container,
  Typography,
  Grid,
  Avatar,
  CardContent,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Table,
  Link,
  Breadcrumbs,
} from "@material-ui/core";

// components
import Page from "../components/Page";
// ----------------------------------------------------------------------

import Label from "../components/Label";
import Scrollbar from "../components/Scrollbar";
import SearchNotFound from "../components/SearchNotFound";
//
import PRODUCTLIST from "../_mocks_/products";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "designation", label: "Désignation", alignRight: false },
  { id: "quantity", label: "Quantité", alignRight: false },
  { id: "acquisition_price", label: "Prix d'achat", alignRight: false },
  { id: "total", label: "Total", alignRight: false },
  { id: "discount_status", label: "Status", alignRight: false },
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

// ----------------------------------------------------------------------

export default function UserDetails() {
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = PRODUCTLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredProducts = applySortFilter(
    PRODUCTLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isProductNotFound = filteredProducts.length === 0;
  return (
    <Page title="Client Details">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <div>
            <Typography variant="h4" gutterBottom>
              Client's Details
            </Typography>
            <Breadcrumbs separator="•" aria-label="breadcrumb" fontSize={12}>
              <Link
                color="inherit"
                to="/dashboard/users"
                component={RouterLink}
                underline="hover"
              >
                Clients
              </Link>
              <Link
                color="textPrimary"
                to=""
                component={RouterLink}
                aria-current="page"
                underline="hover"
              >
                Adrienne Haley
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
            <Card sx={{ position: "relative" }} style={{ minHeight: "400px" }}>
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
            <Card sx={{ position: "relative" }} style={{ minHeight: "400px" }}>
              <CardContent>
                <UserForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid mt="10px">
          <Typography variant="h4" gutterBottom p="20px">
            Historique des produits 
          </Typography>
          <Card>
            <ListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
              placeholder="Rechercher Produits..."
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <ListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={PRODUCTLIST.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredProducts.slice(0,5).map((row) => {
                      const {
                        id,
                        name,
                        quantity,
                        selling_price,
                        status,
                      } = row;

                      return (
                        <TableRow
                          hover
                          key={id}
                          // onClick={() => navigate("/dashboard/user/details")}
                        >
                          <TableCell
                            padding="normal"
                            component="th"
                            scope="row"
                          >
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </TableCell>
                          <TableCell align="left">{quantity}</TableCell>
                          <TableCell align="left">
                            {selling_price || "-"}
                          </TableCell>
                          <TableCell align="left">
                            {selling_price * quantity * 1.0}
                          </TableCell>
                          <TableCell align="left">
                            <Label
                              variant="ghost"
                              color={
                                (status === "Non Soldé" && "error") || "success"
                              }
                            >
                              {status}
                            </Label>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {filteredProducts && (
                      <TableRow>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  {isProductNotFound && (
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
        </Grid>
      </Container>
    </Page>
  );
}
