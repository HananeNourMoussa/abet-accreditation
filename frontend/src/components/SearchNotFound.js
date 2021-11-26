import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        Pas de résultats pour &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Réessayer en utilisant la bonne orthographe.
      </Typography>
    </Paper>
  );
}