import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { useState } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink /*useNavigate*/ } from "react-router-dom";
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
import Label from "../components/Label";
import SearchNotFound from "../components/SearchNotFound";
import { ListHead, ListToolbar } from "../components/_dashboard/user";
//
import PRODUCTLIST from "../_mocks_/products";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "designation", label: "Désignation", alignRight: false },
  { id: "quantity", label: "Quantité", alignRight: false },
  { id: "selling_price", label: "Prix de Vente", alignRight: false },
  { id: "pph", label: "PPH", alignRight: false },
  { id: "acquisition_price", label: "Prix d'achat", alignRight: false },
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

export default function Product() {
  // const navigate = useNavigate();
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
    <Page title="Produits">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Produits
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            Ajouter Produit
          </Button>
        </Stack>

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
                  {filteredProducts.map((row) => {
                    const {
                      id,
                      name,
                      quantity,
                      pph,
                      selling_price,
                      acquisition_price,
                      status,
                    } = row;

                    return (
                      <TableRow
                        hover
                        key={id}
                        // onClick={() => navigate("/dashboard/user/details")}
                      >
                        <TableCell padding="normal" component="th" scope="row">
                          <Tooltip title={name}>
                            <Typography variant="subtitle2" noWrap>
                              { name.length > 30 ? name.slice(0,30) + "..." : name}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="left">{quantity}</TableCell>
                        <TableCell align="left">
                          {selling_price || "-"}
                        </TableCell>
                        <TableCell align="left">
                          {acquisition_price || "-"}
                        </TableCell>
                        <TableCell align="left">{pph || "-"}</TableCell>
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
      </Container>
    </Page>
  );
}
