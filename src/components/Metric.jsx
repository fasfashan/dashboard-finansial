import { PieChart } from "@mui/x-charts/PieChart";
import MoreVerticalIcon from "../assets/icons/MoreVerticalIcon";
import MoreButton from "./Buttons/MoreButton";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
const options = ["Share", "Report"];
const ITEM_HEIGHT = 48;
export default function Metric() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const palette = ["#155EEF", "#2970FF", "#528BFF", "#84ADFF", "#D1E0FF"];
  const palette2 = ["#4B5565", "#697586", "#9AA4B2", "#CDD5DF", "#F8FAFC"];
  const data = [
    { label: "A1", value: 20 },
    { label: "A2", value: 35 },
    { label: "B1", value: 10 },
    { label: "B2", value: 15 },
    { label: "B3", value: 10 },
  ];

  return (
    <div className=" grid gap-6 grid-cols-12 ">
      <div className="flex items-center col-span-6 rounded-lg border border-neutral200 shadow-md p-4">
        <div>
          <PieChart
            colors={palette}
            series={[
              {
                innerRadius: 60,
                outerRadius: 80,
                data,
              },
            ]}
            margin={{ right: 5 }}
            width={200}
            height={200}
            legend={{ hidden: true }}
          />
        </div>

        <div className="flex gap-16 justify-between flex-col grow">
          <div className="flex justify-between">
            <p className="text-medium font-medium">Akun utama</p>
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
          </div>
          <div className="flex flex-col">
            <p className="text-smalll  text-neutral500">Saldo Saat ini</p>
            <div className="flex justify-between items-center">
              <h3 className="text-extraLarge font-medium">Rp57.250.000</h3>
              <span className="bg-success50 text-xs flex px-2 py-1 rounded-full gap-1 items-center text-success700">
                <ArrowUpIcon />
                7.2%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center col-span-6 rounded-lg border border-neutral200 shadow-md p-4">
        <div>
          <PieChart
            colors={palette2}
            series={[
              {
                innerRadius: 60,
                outerRadius: 80,
                data,
              },
            ]}
            margin={{ right: 5 }}
            width={200}
            height={200}
            legend={{ hidden: true }}
          />
        </div>

        <div className="flex gap-16 justify-between flex-col grow">
          <div className="flex justify-between">
            <p className="text-medium font-medium">Akun sampingan</p>
            <MoreButton />
          </div>
          <div className="flex flex-col">
            <p className="text-smalll  text-neutral500">Saldo Saat ini</p>
            <div className="flex justify-between items-center">
              <h3 className="text-extraLarge font-medium">Rp57.250.000</h3>
              <span className="bg-red-50 text-xs flex px-2 py-1 rounded-full gap-1 items-center text-red-700">
                <ArrowDownIcon />
                7.2%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
