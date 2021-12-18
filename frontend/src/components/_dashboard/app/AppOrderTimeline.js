import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@material-ui/lab';
 
// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: 'SO1',
    time: 'An ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics.',
    type: 'SO1'
  },
  {
    title: 'SO2',
    time: 'An ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors.',
    type: 'SO2'
  },
  {
    title: 'SO3',
    time: 'An ability to communicate effectively with a range of audiences.',
    type: 'SO3'
  },
  {
    title: 'SO4',
    time: 'An ability to recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.',
    type: 'SO4'
  },
  {
    title: 'SO5',
    time: 'An ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives.',
    type: 'SO5'
  },
  {
    title: 'SO6',
    time: 'An ability to develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.',
    type: 'SO6'
  },
  {
    title: 'SO7',
    time: 'An ability to acquire and apply new knowledge as needed, using appropriate learning strategies.',
    type: 'SO7'
  },
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'SO1' && 'primary.main') ||
              (type === 'SO2' && 'warning.main') ||
              (type === 'SO3' && 'info.main') ||
              (type === 'SO4' && 'red ') ||
              (type === 'SO5' && '#66FF00') ||
              (type === 'SO6' && 'warning.dark') ||
              (type === 'SO7' && 'info.dark')  
                
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {time}
                          </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="ABET Student Outcomes (SO's)" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
