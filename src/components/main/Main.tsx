import React, { useEffect } from "react";
import TagList from "../tagList/TagList.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";
import Loader from "../loader/Loader.tsx";
import ErrorPage from "../errorPage/ErrorPage.tsx";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../util/getTags.ts";
import styles from "./Main.module.scss";
import FilterBar from "../filterBar/FilterBar.tsx";
import { useGlobalContext } from "../context/context.tsx";

const Main = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  });
  const { setData } = useGlobalContext();

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.main}>
      <FilterBar></FilterBar>
      <TagList></TagList>
      <PaginationComponent></PaginationComponent>
    </div>
  );
};

export default Main;
