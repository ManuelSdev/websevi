
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Link from './Link'
import { toPlainString } from '../../lib/utils/stringTools';
const ProfileBar = ({ sections, profile }) => {
    // const router = useRouter()
    // const { userSlug } = router.query

    // const handlePush = sectionName => router.push(`/user/${toPlainString(sectionName)}`)
    return (
        <Paper>
            <MenuList>
                {sections.map(section =>
                    <MenuItem key={section.name}
                        component={Link}
                        href={profile === 'admin' ?
                            `/admin/${toPlainString(section.name)}`
                            :
                            `/user/${toPlainString(section.name)}`
                        }
                    //onClick={handlePush(section.name)}
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