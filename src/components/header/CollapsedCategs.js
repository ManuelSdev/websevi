import Collapse from "@mui/material/Collapse"
import ProfileBar from "../elements/ProfileBar"
import HeaderButton from "./HeaderButton"
import MemoryIcon from '@mui/icons-material/Memory';
import { ListItem, ListItemText, MenuItem, MenuList, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";

import { useState } from "react";

const CollapsedCategs = ({ isCollapsed, categories }) => {
    console.log(categories)

    const [{ name: initialTarget }] = categories
    const [target, setTarget] = useState([])

    const handleChange = cat => ev => {
        setTarget(cat.childs)
        console.log(ev.target.name)
        console.log(cat)

    };
    return (
        <Collapse
            // collapsedSize='100px'
            sx={{
                zIndex: 'tooltip', bgcolor: 'white', position: 'fixed', resize: 'none', height: '100%',
                //minWidth: '400px',
                width: '100% !important',
                // pr: '2em'
            }}
            orientation="horizontal"
            in={isCollapsed}>


            <Stack
                spacing={0}
                direction="row"

            >
                <Box>
                    <Stack
                        //direction="row"
                        //sx={{ minWidth: '155px' }}
                        spacing={0}>
                        {categories.length > 0 && categories.map(category =>
                            category.level === 1 &&
                            <Box key={category._id}
                            //  sx={{ p: 1, m: 1, }}
                            >
                                <HeaderButton onClick={handleChange(category)} IconComponent={MemoryIcon} text={category.name} />
                            </Box>
                        )}
                    </Stack>
                </Box>
                <MenuList
                    sx={{ width: '100%', }}
                >
                    {target.map(section =>
                        <MenuItem key={section}
                        //    onClick={restartCategs}
                        >

                            <ListItemText>{section}</ListItemText>
                        </MenuItem>
                    )
                    }
                </MenuList>


            </Stack>






        </Collapse >

    )
}

export default CollapsedCategs