import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';
// utils
 
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const NEWS = [
{ title: 'SO1',
description: 'An ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics.'},

{ title: 'SO2',
description: 'An ability to apply engineering design to produce solutions that meet specified needs with consideration of public health,\n safety, and welfare, as well as global, cultural, social, environmental, and economic factors.'},

{ title: 'SO3',
description: 'An ability to communicate effectively with a range of audiences.'},

{ title: 'SO4',
description: 'An ability to recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.'},

{ title: 'SO5',
description: 'An ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives.'},

{ title: 'SO6',
description: 'An ability to develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.'},

{ title: 'SO7',
description: 'An ability to acquire and apply new knowledge as needed, using appropriate learning strategies.'},
];
 

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const {title, description } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={1.9}>
       
      <Box sx={{ minWidth: 240 }}>
         
        <Typography variant="subtitle2">
          {title }
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description  }
        </Typography>
      </Box>
      
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="ABET Student Outcomes (SO's)" />

      <Scrollbar>
        <Stack spacing={1.35} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

       
    </Card>
  );
}
