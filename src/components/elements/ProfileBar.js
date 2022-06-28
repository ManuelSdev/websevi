
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from './Link'
import { toPlainString } from '../../lib/utils/stringTools';
import { resetCategories } from '../../lib/api/category';
import { resetProducts } from '../../lib/api/product';
import initialsCategories from '../../assets/initialsCategories';
import initialsProducts from '../../assets/initialsProducts';
import { useDispatch } from 'react-redux';

const ProfileBar = ({ sections, profile }) => {

    const dispatch = useDispatch()

    const restartCategs = async () => {
        await resetCategories(initialsCategories)
        await resetProducts(initialsProducts)
    }

    return (
        <Paper>
            <MenuList>
                {sections.map(section => section.name === 'Reiniciar estado' ?
                    <MenuItem key={section.name}
                        onClick={restartCategs}
                    >
                        <ListItemIcon>
                            {section.icon}
                        </ListItemIcon>
                        <ListItemText>{section.name}</ListItemText>
                    </MenuItem>
                    :
                    <MenuItem key={section.name}
                        onClick={section.action ? () => dispatch(section.action) : undefined}

                        component={Link}
                        href={profile === 'admin' ?
                            `/admin/${toPlainString(section.name)}`
                            :
                            section.action ?
                                '/'
                                :
                                `/user/${toPlainString(section.name)}`
                        }
                    >
                        <ListItemIcon>
                            {section.icon}
                        </ListItemIcon>
                        <ListItemText>{section.name}</ListItemText>
                    </MenuItem>
                )
                }
            </MenuList>
        </Paper >
    )
}

export default ProfileBar