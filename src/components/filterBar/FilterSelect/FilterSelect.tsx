import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useGlobalContext } from '../../context/context.tsx';
import { sortArray } from '../../../util/sortBy.ts';

const FilterSelect = () => {
  const { data, setFilteredData } = useGlobalContext();


  const sortHandler = (value) => {
    
    if(value) {
      const { method, sortBy } = value
      if(method && sortBy) {
        const sortedArray = sortArray(data, method, sortBy)
  
        setFilteredData([...sortedArray])
      }
    }
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={[
        {id: 0 , label: 'Descending sorting by count', value: {
          method: 'desc',
          sortBy: 'count'
        }},
        {id: 1 , label: 'Descending sorting by name', value: {
          method: 'desc',
          sortBy: 'name'
        }},
        {id: 2, label: 'Ascending sorting  by count', value: {
          method: 'asc',
          sortBy: 'count'
        }},
        {id: 3, label: 'Ascending sorting  by name', value: {
          method: 'asc',
          sortBy: 'name'
        }}
      ]}
      sx={{ width: 300 }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, option) => sortHandler(option?.value)}
      renderInput={(params) => <TextField {...params}  label="Sorting method" />}
    />
  );
}

export default FilterSelect
