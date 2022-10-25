import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MemoryIcon from '@mui/icons-material/Memory';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useSelector } from 'react-redux';
import { getDrawer } from '../../app/store/selectors';
import { toPlainString } from '../../lib/utils/stringTools';
import { Link } from '@mui/material';

export default function NestedDrawer({ onClose, categories }) {

    const [parentCategory, setParentCategory] = React.useState('root');

    const { categDrawerIsOpen: isOpen } = useSelector(getDrawer)

    const handleParent = parent => ev => {
        setParentCategory(parent)
    };

    const handleClose = () => {
        onClose()
        setParentCategory('root')
    }
    const list = () => (
        <Box role="presentation">
            <List>
                {categories.map((category, index) => (
                    category.parent === parentCategory &&
                    (
                        category.parent === 'root' ?
                            <ListItem onClick={handleParent(category.path)} button key={category.path} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {category.path === 'componentes' ?
                                            <MemoryIcon />
                                            :
                                            category.path === 'perifericos' ?
                                                <MouseOutlinedIcon />
                                                :
                                                <DesktopWindowsIcon />
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={category.name} />
                                </ListItemButton>
                                {category.parent === 'root' && <ChevronRightIcon />}
                            </ListItem>
                            :
                            <ListItem
                                key={category.path}
                                disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={`/${toPlainString(category.path)}`}
                                >
                                    <ListItemText primary={category.name} />
                                </ListItemButton>
                                {category.parent === 'root' && <ChevronRightIcon />}
                            </ListItem>
                    )
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            anchor={'left'}
            open={isOpen}
            onClose={handleClose}
        >
            {parentCategory !== 'root' && (
                <Box>
                    <ListItem button onClick={handleParent('root')} >
                        <ListItemText primary="Volver" />
                        <ChevronLeftIcon />
                    </ListItem>
                    <Divider />
                </Box>
            )}
            {list()}
        </Drawer>
    );
}
