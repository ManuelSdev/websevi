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
import { Box } from '@mui/system';
import { Slider } from '@mui/material';
import usePriceSlider from '../../hooks/usePriceSlider';
const FiltersBar = ({ filtersProps, priceSliderProps }) => {
    const { hasLink, filters, maxPrice } = filtersProps
    const router = useRouter()
    const { categoryPath, slug } = router.query
    const firstRender = React.useRef(true);

    const { formValue, handleChange: onChange, setFormValue } = useForm({
        checkedFilters: slug ? slug : [],
    });

    const { checkedFilters } = formValue
    /**Slider */
    const { priceRange, handlePrice, valuetext, marks, initialMaxPrice } = priceSliderProps


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
        const newPath = { path: `/${categoryPath}` }
        checkedFilters.map(filter => {
            newPath.path = newPath.path.concat('/', filter)
        })
        router.push(newPath.path)
    }, [checkedFilters])


    //Genera un array con los índices del array filters como strings
    //Lo recibe la propiedad , que recibe valores en este formato defaultExpanded={['1', '2'...]}
    //para desplegar por defecto los componentes TreeItem cuyo nodeId coincida con un número del array de strings
    const arrayOfIndexString = filters.map((filter, index) => `${index}`)
    return (
        <Paper>
            <TreeView
                //defaultExpanded={['1']}
                defaultExpanded={hasLink ? [] : [...arrayOfIndexString, 'price']}
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            //sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                {
                    filters.map((filter, index) => {
                        const filterKey = Object.keys(filter)
                        console.log('*****', filter)
                        const filtersBlock = hasLink ?
                            <Link color='black' key={filter} href={`/${toPlainString(filter)}`}>
                                <TreeItem sx={{ pt: 2 }} nodeId={`${index}`} label={filter}>
                                    <TreeItem nodeId={`${filter}`} />
                                </TreeItem>
                            </Link>
                            :
                            <TreeItem key={filterKey} sx={{ pt: 2 }} nodeId={`${index}`} label={filterKey}>
                                <FormGroup>

                                    {filter[`${filterKey}`].map(filterValue =>

                                        <FormControlLabel
                                            key={filterValue}
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
                {hasLink ||
                    <TreeItem sx={{ pt: 2 }} nodeId={'price'} label={'Precio'}>
                        <Box sx={{ width: '90%', pl: 1 }}>
                            <Slider
                                getAriaLabel={() => 'Rango de precios'}
                                value={priceRange}
                                onChange={handlePrice}
                                valueLabelDisplay="off"
                                getAriaValueText={valuetext}
                                marks={marks}
                                disableSwap
                                max={initialMaxPrice}

                            />
                        </Box>
                    </TreeItem>

                }
                <TreeItem sx={{ pt: 2 }} nodeId={'price'} label={'Precio'}>
                    <Box sx={{ width: 200 }}>
                        DDDDDDDDDDDDDD
                    </Box>
                </TreeItem>
            </TreeView>
        </Paper >

    )
}

export default FiltersBar

