import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useGlobalContext } from "../context/context.tsx";

const TagList = () => {
  const { tags } = useGlobalContext()
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1024,
        height: 370,
        bgcolor: "background.paper",
        border: "1px solid black",
        overflow: 'auto',
      }}
    >
      {tags &&
        tags.map((tag, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Name: ${tag.name}`} secondary={`Count ${tag.count}`} />
          </ListItem>
        ))}
    </List>
  );
};

export default TagList;
