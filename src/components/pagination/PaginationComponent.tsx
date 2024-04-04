import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationPropsType } from "../../util/types/types";
import { useGlobalContext } from "../context/context.tsx";

const PaginationComponent = () => {
  const {productPerPage, setTags, filteredData, data} = useGlobalContext()
  const [page, setPage] = useState<number>(1)
  
  const paginStart = (Number(page) - 1) * (Number(productPerPage))
  const end = paginStart + Number(productPerPage)
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if(filteredData) {
      setTags(filteredData?.slice(paginStart, end))
    }
    setTags(data?.slice(paginStart, end))
  }, [filteredData, page, data, end, paginStart, setTags])

  return (
    <Pagination
      count={Math.ceil(data?.length / Number(productPerPage))}
      page={page}
      onChange={handleChange}
    ></Pagination>
  );
};

export default PaginationComponent;
