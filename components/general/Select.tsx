"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Chip, Select as SelectMUI, SelectChangeEvent, BaseSelectProps } from "@mui/material";
import { useTheme } from "@/providers/ThemeProvider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // backgroundColor: "#20252a",
      // color: "var(--white)",
    },
    sx: {
      "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "var(--neutral-gray)",
      },
    },
  },
};

interface SelectProps extends BaseSelectProps {
  options: string[];
  value?: string[];
  setValues?: (values: string[]) => void;
  width?: number;
}

const Select = (props: SelectProps) => {
  const { options } = props;
  const [selectedValues, setSelectedValues] = useState<string[]>(props.value || []);
  const { theme } = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;
    const valueArray = typeof value === "string" ? value.split(",") : value;
    setSelectedValues(valueArray);
    props.setValues && props.setValues(valueArray as string[]);
  };

  const handleDelete = (e: any, value: string) => {
    e.stopPropagation();
    setSelectedValues((prev) => prev.filter((name) => name !== value));
    props.setValues && props.setValues(selectedValues.filter((name) => name !== value));
  };

  return (
    <SelectMUI
      className="h-[40px] p-2"
      displayEmpty
      labelId="demo-multiple-chip-label"
      id="demo-multiple-chip"
      multiple
      value={selectedValues}
      onChange={(e: any) => handleChange(e)}
      renderValue={(selected: any) => (
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            overflowX: "scroll",
            maxWidth: 300,
          }}
        >
          {selected.length === 0 && (
            <span className="text-(--dark-gray) text-lg">Filter By Tags</span>
          )}
          {selected.map((value: any) => (
            <div className="flex items-center" key={value}>
              <Chip
                key={value}
                label={value}
                onMouseDown={(e) => e.stopPropagation()}
                onDelete={(e) => handleDelete(e, value)}
                sx={{
                  backgroundColor: theme === "dark" ? "var(--dark-gray)" : "var(--light-gray)",
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              />
            </div>
          ))}
        </Box>
      )}
      MenuProps={MenuProps}
      sx={{
        width:"100%",
        // maxWidth: props.width || 300, 
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
          backgroundColor: "var(--light-gray)",
          transition: "background-color 0.2s ease",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiSelect-icon": {
          color: theme === "dark" ? "var(--white)" : "var(--black)",
        },
      }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </SelectMUI>
  );
};

export default Select;
