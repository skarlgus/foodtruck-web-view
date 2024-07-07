import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import QuizIcon from '@mui/icons-material/Quiz';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isSmallScreen ? '100%' : '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
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
        <BottomNavigationAction label="my info" icon={<PermContactCalendarIcon />} />
      </BottomNavigation>
    </Box>
  );
}
