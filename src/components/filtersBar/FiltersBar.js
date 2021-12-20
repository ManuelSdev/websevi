import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { mapFilters } from '../../lib/mapFilters';

import Link from '../elements/Link'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toPlainString } from '../../lib/utils/stringTools';
import useForm from '../../hooks/useForm';
import { useRouter } from 'next/router';
const FiltersBar = ({ filtersProps }) => {
    const { hasLink, filters } = filtersProps
    const router = useRouter()
    const { categoryPath, slug } = router.query

    const firstRender = React.useRef(true);
    //const [checkedFilters, setCheckedFilters] = React.useState([])
    console.log('#########', router.query)
    const { formValue, handleChange: onChange, setFormValue } = useForm({
        checkedFilters: slug ? slug : [],
    });

    const { checkedFilters } = formValue

    const handleChange = ev => {

        const { name, checked, value: filterValue } = ev.target;
        console.log('ev.target', name)
        //onChange recibe un objeto similar al objeto event
        onChange({
            target: {
                name,
                value: checked ?
                    [...checkedFilters, filterValue]
                    :
                    checkedFilters.filter(v => v !== filterValue),
            },
        });
    };

    /**
     * Cada vez que se modifica el array de filtros checkedFilters, se construye una url con el 
     * nombre de la categoría(url actual)+los nombres de los filtros seleccionados y se redirecciona
     * a ella
     */
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        const a = { b: `/${categoryPath}` }
        checkedFilters.map(filter => {
            a.b = a.b.concat('/', filter)
        }
            /*
              const newPath = { basePath: `/${categoryPath}` }
                    checkedFilters.map(filter => {
                        newPath.basePath = newPath.basePath.concat('/', filter)
                    }
            
                    )
                    */

        )
        console.log('+++++++++++', a.b)
        router.push(a.b)
    }, [checkedFilters])

    //const filtersKeys
    // console.log('filters en FiltersBar.js', filters)
    /*
    const handleChange = a => event => {
        //setChecked(event.target.checked);
        console.log(a, event.target.name);

    };
    */
    //Genera un array con los índices del array filters como strings
    //Lo recibe la propiedad , que recibe valores en este formato defaultExpanded={['1', '2'...]}
    //para desplegar por defecto los componentes TreeItem cuyo nodeId coincida con un número del array de strings
    const arrayOfIndexString = filters.map((filter, index) => `${index}`)
    return (
        <Paper>
            <TreeView
                //defaultExpanded={['1']}
                defaultExpanded={[...arrayOfIndexString]}
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            //sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                {
                    filters.map((filter, index) => {
                        const filterKey = Object.keys(filter)
                        const filtersBlock = hasLink ?
                            <Link color='black' href={`/${toPlainString(filter)}`}>
                                <TreeItem sx={{ pt: 2 }} nodeId={index} label={filter}>
                                    <TreeItem />
                                </TreeItem>
                            </Link>
                            :
                            <TreeItem sx={{ pt: 2 }} nodeId={`${index}`} label={filterKey}>
                                <FormGroup>

                                    {filter[`${filterKey}`].map(filterValue =>

                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={handleChange}
                                                    name='checkedFilters'
                                                    value={filterValue}
                                                    checked={checkedFilters.includes(filterValue)}
                                                />
                                            }
                                            label={filterValue}
                                        />

                                    )}



                                </FormGroup>
                            </TreeItem>
                        return filtersBlock
                    })

                }

            </TreeView>
        </Paper >

    )
}

export default FiltersBar

/*
         {filter[`${filterKey}`].map(filterValue =>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onClick={handleChange('hhhhhhhhhh')}
                                                    name={filterValue}
                                                    value={'hola'}
                                                />
                                            }

                                            label={filterValue}

                                        />
                                    )
                                    }
*/