import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { useGlobalContext } from "../context/context.tsx";
import FilterSelect from "./FilterSelect/FilterSelect.tsx";
import styles from './FilterBar.module.scss'

const FilterBar = () => {
  const { setProductPerPage } = useGlobalContext();

  const changeProductPerPage = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = Number(event.target?.value);
    if (value > 0) {
      setProductPerPage(value);
    }
    else {
      setProductPerPage(4)
    }
  };
  return (
    <div className={styles.filterBar}>
      <TextField
        placeholder="Set product per page"
        onChange={(event) => changeProductPerPage(event)}
        type="number"
      />
      <FilterSelect></FilterSelect>
    </div>
  );
};

export default FilterBar;
