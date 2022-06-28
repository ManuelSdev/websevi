import Collapse from "@mui/material/Collapse"
import HeaderButton from "./CollapseCategsButton"
import MemoryIcon from '@mui/icons-material/Memory';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { ListItemText, MenuItem, MenuList, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Link from '../../components/elements/Link'
import { useEffect, useState } from "react";
import { toPlainString } from "../../lib/utils/stringTools";


const CollapsedCategs = ({ isCollapsed, setCollapsed, categories, selectedCategoryChilds, setSelectedCategoryChilds }) => {
    //console.log(categories)
    // const [isCollapsed, setCollapsed] = useState(false)
    //Extrae el primer elemento del array, que es un objeto y del objeto extrae la propiedad childs
    const [{ childs: initialChilds }] = categories
    // const [selectedCategoryChilds, setSelectedCategoryChilds] = useState([])
    const [className, setClassName] = useState('hover')

    useEffect(() => {
        setClassName('hover')
    }, [isCollapsed])

    const handleChange = category => ev => {
        setClassName('')
        setSelectedCategoryChilds(category.childs)
    };

    const handleChangeCollapsed = () => {

        setCollapsed((prev) => !prev);

    };

    return (
        <Collapse
            // collapsedSize='100px'
            sx={{
                zIndex: 'tooltip', bgcolor: 'white', position: 'fixed', resize: 'none', height: '100%',
                //minWidth: '400px',
                width: '100% !important',
                //  borderTop: '0.1rem solid',
                //borderColor: 'black',
                // border: '0.1rem solid',
                //overflowX: 'hidden',
                //  overflowY: 'auto',
                // pr: '2em'
                '& .MuiCollapse-wrapperInner': { width: '100%' },
            }}
            orientation="horizontal"
            in={isCollapsed}
        >
            <Stack
                spacing={0}
                direction="row"
                sx={{
                    //  height: '100%',
                }}
            >
                <Box
                    sx={{
                        //   height: '100%',
                        //borderTop: '1px',
                        //   borderTopColor: 'black',
                        // mt: '-1px',
                    }}
                >
                    <Stack
                        //direction="row"
                        sx={{
                            // zIndex: 'tooltip', position: 'relative',
                            //   outline: '1px solid black',
                            // overflow: 'scroll'
                            //     height: '100%',
                            //      overflowX: 'hidden',
                            //    overflowY: 'auto',
                        }}
                        spacing={0}
                    >
                        {categories.length > 0 && categories.map((category, index) =>
                            category.level === 1 &&
                            <HeaderButton
                                onClick={handleChange(category)}
                                className={index === 0 && className}
                                key={category._id}
                                text={category.name}
                                IconComponent={category.path === 'componentes' ?
                                    MemoryIcon
                                    :
                                    category.path === 'perifericos' ?
                                        MouseOutlinedIcon
                                        :
                                        DesktopWindowsIcon
                                } />
                        )}
                    </Stack>
                </Box>
                <Box
                    sx={{
                        //   outline: '1px solid black',
                        width: '100%',
                        //  height: '100%',
                        //     overflowX: 'hidden',
                        //   overflowY: 'auto',
                    }}
                >
                    <MenuList
                        sx={{
                            width: '100%', flexGrow: 1, bgcolor: 'white',

                            zIndex: 'fab',
                            height: '100%',
                            border: 1,

                        }}
                    >
                        {selectedCategoryChilds.map(child =>
                            <MenuItem key={child}
                            //    onClick={restartCategs}
                            >
                                <ListItemText
                                    onClick={handleChangeCollapsed}
                                >
                                    <Link
                                        href={`/${toPlainString(child)}`}
                                        sx={{
                                            color: 'black',
                                            '& :hover': {
                                                color: "white",
                                            },
                                        }}
                                    >
                                        {child}
                                    </Link>
                                </ListItemText>
                            </MenuItem>
                        )}
                    </MenuList>
                </Box>
            </Stack >
        </Collapse >
    )
}

export default CollapsedCategs