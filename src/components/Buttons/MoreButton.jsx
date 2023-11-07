import MoreVerticalIcon from "../../assets/icons/MoreVerticalIcon";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
const options = ["Share", "Report"];
const ITEM_HEIGHT = 48;
export default function MoreButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        sx={{ padding: 0 }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVerticalIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{ "aria-labelledby": "long-button" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            sx={{ fontFamily: "Inter" }}
            key={option}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
