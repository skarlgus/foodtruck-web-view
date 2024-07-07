import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { styled, emphasize } from '@mui/material/styles';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const CustomizedBreadcrumbs = ({ handleChange }) => {
  return (
    <div role="presentation" onClick={(event) => event.preventDefault()}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="전체"
          icon={<ChecklistIcon fontSize="small" />}
          onClick={(event) => handleChange(event, '전체')}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="행사"
          icon={<CelebrationIcon fontSize="small" />}
          onClick={(event) => handleChange(event, '행사')}
        />
        <StyledBreadcrumb
          component="a"
          href="#"
          label="푸드트럭"
          icon={<LocalShippingIcon fontSize="small" />}
          onClick={(event) => handleChange(event, '푸드트럭')}
        />
      </Breadcrumbs>
    </div>
  );
};

export default CustomizedBreadcrumbs;