import { ListItem, ListItemText } from "@mui/material";
import moment from "moment";

export const Todo = ({ id, timestamp, title, detail }) => {
  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("MMM dd, yyy")}
      />
    </ListItem>
  );
};
