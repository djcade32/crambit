import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface ContextMenuProps {
  anchorEl: null | SVGSVGElement | HTMLElement;
  onClose: (event: React.MouseEvent<HTMLLIElement>) => void;
  menuItems: MenuItemProps[];
  open?: boolean; // Optional prop to control the open state of the menu
}

interface MenuItemProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  color?: string; // Optional color prop for the menu item
}

const ContextMenu = ({ anchorEl, onClose, menuItems, open }: ContextMenuProps) => {
  const menuOpen = open || Boolean(anchorEl); // Use the open prop if provided, otherwise use anchorEl

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={menuOpen}
      onClose={onClose}
      slotProps={{
        list: {
          "aria-labelledby": "basic-button",
        },
      }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "var(--white)",
          borderRadius: "5px",
        },
      }}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          onClick={item.onClick}
          sx={{
            color: item?.color || "var(--black)",
            "&:hover": { backgroundColor: "var(--neutral-gray)" },
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ContextMenu;
