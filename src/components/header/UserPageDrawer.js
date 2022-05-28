import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import { getDrawer } from '../../app/store/selectors';
import { userPageSections } from '../../items/profilePageSections';
import { Link } from '@mui/material';
import { toPlainString } from '../../lib/utils/stringTools';

export default function UserPageDrawer({ onClose }) {

    const sections = userPageSections

    const { userDrawerIsOpen: isOpen } = useSelector(getDrawer)


    const list = () => (
        <Box role="presentation">
            <List>
                {sections.map((section, index) => (
                    <ListItem
                        key={section.name}
                        disablePadding>
                        <ListItemButton
                            component={Link}
                            href={`/user/${toPlainString(section.name)}`}
                        >
                            <ListItemIcon>
                                {section.icon}
                            </ListItemIcon>
                            <ListItemText primary={section.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Drawer
            anchor={'right'}
            open={isOpen}
            onClose={onClose}
        >
            {list()}
        </Drawer>
    );
}
