import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { getDrawer } from '../../app/store/selectors';
import { userPageSections } from '../../items/profilePageSections';
import { toPlainString } from '../../lib/utils/stringTools';
import Link from '../elements/Link';
import { toggleUserDrawer } from '../../app/store/drawerSlice';
export default function UserPageDrawer({ onClose }) {

    const dispatch = useDispatch()
    const sections = userPageSections
    const { userDrawerIsOpen: isOpen } = useSelector(getDrawer)
    const handleDrawer = () => dispatch(toggleUserDrawer())
    const list = () => (
        <Box role="presentation">
            <List>
                {sections.map((section, index) => (
                    <ListItem
                        key={section.name}
                        disablePadding
                    >
                        <ListItemButton
                            onClick={section.action ? () => dispatch(section.action) : handleDrawer}
                            component={Link}
                            href={section.action ? '/' : `/user/${toPlainString(section.name)}`}
                        >
                            <ListItemIcon>
                                {section.icon}
                            </ListItemIcon>
                            <ListItemText primary={section.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
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
