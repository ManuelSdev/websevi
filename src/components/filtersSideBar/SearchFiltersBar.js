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
const SearchFiltersBar = ({ filtersProps, selectedPricesRange, handlePrice, valuetext, checkedFilters, onChange }) => {

    const firstRender = React.useRef(true);

    const router = useRouter()
    const { categoryPath, slug } = router.query

    const { hasLink, filters, pricesRange } = filtersProps
    const [minPrice, maxPrice] = pricesRange

    const [minSelectedPrice, maxSelectedPrice] = selectedPricesRange

    const marks = [
        {
            value: minPrice,
            label: `${minSelectedPrice}`,
        },

        {
            value: maxPrice,
            label: `${maxSelectedPrice}`,
        },
    ];


    /**Slider */
    const handleChange = ev => {
        const { name, checked, value: filterValue } = ev.target;
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


    //Genera un array con los índices del array filters como strings
    //Lo recibe la propiedad , que recibe valores en este formato defaultExpanded={['1', '2'...]}
    //para desplegar por defecto los componentes TreeItem cuyo nodeId coincida con un número del array de strings
    const arrayOfIndexString = filters.map((filter, index) => `${index}`)
    return (
        <Paper>
            <TreeView
                //Key : https://stackoverflow.com/questions/54364872/a-component-is-changing-an-uncontrolled-input-of-type-checkbox-to-be-controlled
                key={`treeview-${categoryPath}`}
                defaultExpanded={hasLink ? [] : [...arrayOfIndexString, 'price']}
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                {
                    filters.map((filter, index) => {
                        const filterKey = Object.keys(filter)
                        const filtersBlock =
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
                {!hasLink &&
                    < TreeItem sx={{ pt: 2 }} nodeId={'price'} label={'Precio'}>
                        <Box sx={{ width: '90%', pl: 1 }}>
                            <Slider
                                getAriaLabel={() => 'Rango de precios'}
                                value={selectedPricesRange}
                                onChange={handlePrice}
                                valueLabelDisplay="off"
                                getAriaValueText={valuetext}
                                marks={marks}
                                disableSwap
                                step={10}
                                max={maxPrice}
                                min={minPrice}
                            />
                        </Box>
                    </TreeItem>
                }
            </TreeView>
        </Paper >
    )
}

export default SearchFiltersBar

