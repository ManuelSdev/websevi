import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton"
import { AdbIcon, NewIcon, SaveAsIcon, SaveIcon, ImportExportRoundedIcon } from '@mui/icons-material';
import Box from '@mui/system/Box';
import React from 'react';
import { NestedDropdown } from 'mui-nested-menu/build/NestedDropdown'
//import IconMenuItem from 'mui-nested-menu/build/IconMenuItem';
import { Button, Menu, MenuItem } from '@mui/material';


export default function App() {
  const fileDropdownData = {
    label: 'File',
    items: [
      {
        label: 'New',
        leftIcon: <NewIcon />,
        callback: () => console.log('New clicked'),
      },

      {
        label: 'Save',
        leftIcon: <SaveIcon />,
        callback: () => console.log('Save clicked'),
      },
      {
        label: 'Save As',
        leftIcon: <SaveAsIcon />,
        items: [
          {
            label: 'Option 1',
            rightIcon: <SaveAsIcon />,
            callback: () => console.log('Save As > Option 1 clicked'),
          },
          {
            label: 'Option 2',
            leftIcon: <SaveAsIcon />,
            callback: () => console.log('Save As > Option 2 clicked'),
          },
        ],
      },
      {
        label: 'Export',
        leftIcon: <ImportExportRoundedIcon />,
        rightIcon: <ImportExportRoundedIcon />,
        items: [
          {
            label: 'File Type 1',
            items: [
              {
                label: 'Option 1',
                rightIcon: <SaveAsIcon />,
                callback: () => console.log('Export > FT1 > O1 clicked'),
              },
              {
                label: 'Option 2',
                leftIcon: <SaveAsIcon />,
                callback: () => console.log('Export > FT1 > O2 clicked'),
              },
            ],
          },
          {
            label: 'File Type 2',
            callback: () => console.log('Export > FT2 clicked'),
          },
        ],
      },
    ],
  };

  return (
    <NestedDropdown
      variant='contained'
      sx={{ borderRadius: '50px' }}
      data={fileDropdownData}
    />
  );
}