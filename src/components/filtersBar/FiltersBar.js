import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { mapFilters } from '../../lib/mapFilters';

import Link from '../elements/Link'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
const FiltersBar = ({ filter }) => {
    // console.log('@@@@@@@@@@@@@@@@@@', filter)
    const { hasLink, filters } = filter

    return (
        <Paper>
            <TreeView
                defaultExpanded={['1']}
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            //sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                {

                    filters.map((filter, index) =>
                        hasLink ?
                            <Link color='black' href='/'>
                                <TreeItem sx={{ pt: 2 }} nodeId={index} label={filter}>
                                    <TreeItem />
                                </TreeItem>
                            </Link>
                            :

                            <TreeItem sx={{ pt: 2 }} nodeId={index} label={filter}>
                                <FormGroup>

                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </TreeItem>





                    )
                }

            </TreeView>
        </Paper >

    )
}

export default FiltersBar