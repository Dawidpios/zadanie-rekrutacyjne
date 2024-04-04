import React, { useState, createContext, useContext } from "react";
import { TagsType } from "../../util/types/types";

type Global = {
  productPerPage: number;
  setProductPerPage: (value: number) => void;
  data: TagsType;
  setData: (value: TagsType) => void;
  tags: TagsType
  setTags: (value: TagsType) => void;
  filteredData: TagsType;
  setFilteredData: (value: TagsType) => void;
};

export const GlobalContext = createContext<Global | null>(null);

export default function ContextProvider({ children }: any) {
  const [productPerPage, setProductPerPage] = useState(4);
  const [data, setData] = useState<TagsType>([]);
  const [tags, setTags] = useState<TagsType>([]);
  const [filteredData, setFilteredData] = useState<TagsType>([]);
  
  return (
    <GlobalContext.Provider value={{ productPerPage, setProductPerPage, tags, setTags, filteredData, setFilteredData, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) {
    throw new Error("Global context must be used inside GlobalContextProvider");
  }
  return ctx;
};
