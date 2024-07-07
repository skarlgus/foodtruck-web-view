import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import QuizIcon from '@mui/icons-material/Quiz';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        paddingBottom: isSmallScreen ? 'env(safe-area-inset-bottom)' : 0, // iPhone 하단 여백 확보
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="행사" icon={<EventNoteIcon />} />
        <BottomNavigationAction label="미정" icon={<QuizIcon />} />
        <BottomNavigationAction label="미정" icon={<QuizIcon />} />
        <BottomNavigationAction label="my info" icon={<PermContactCalendarIcon />} />
      </BottomNavigation>
    </Box>
  );
}
