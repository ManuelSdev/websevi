
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

const ProfileBar = ({ sections, handlePush }) => {

    return (
        <Paper>
            <MenuList>
                {sections.map(section =>
                    <MenuItem key={section.name} onClick={handlePush}>
                        <ListItemIcon>
                            {section.icon}
                        </ListItemIcon>
                        <ListItemText>{section.name}</ListItemText>

                    </MenuItem>
                )

                }


            </MenuList>
        </Paper>
    )
}

export default ProfileBar