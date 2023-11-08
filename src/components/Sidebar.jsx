import HomeIcon from "../assets/icons/HomeIcon";
import BarChartIcon from "../assets/icons/BarChartIcon";
import LayerIcon from "../assets/icons/LayerIcon";
import CheckSquareIcon from "../assets/icons/CheckSquareIcon";
import FlagIcon from "../assets/icons/FlagIcon";
import UsersIcon from "../assets/icons/UsersIcon";
import LifeBuoyIcon from "../assets/icons/LiefBuoyIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import Avatar from "@mui/material/Avatar";
export default function Sidebar() {
  return (
    <aside className="px-4  scroll min-h-screen col-span-1  flex flex-col   border-r-2 border-neutral200">
      <div className="flex  sticky -top-0  min-h-screen flex-col justify-between">
        <div className="flex flex-col  ">
          <ul className="flex h-80 justify-between flex-col gap-1">
            <li className="p-3">
              <HomeIcon />
            </li>
            <li className="p-3 bg-neutral100 rounded-lg">
              <BarChartIcon />
            </li>
            <li className="p-3">
              <LayerIcon />
            </li>
            <li className="p-3">
              <CheckSquareIcon />
            </li>
            <li className="p-3">
              <FlagIcon />
            </li>
            <li className="p-3">
              <UsersIcon />
            </li>
          </ul>
        </div>
        <ul className="space-y-3">
          <li className="p-3">
            <LifeBuoyIcon />
          </li>
          <li className="p-3">
            <SettingsIcon />
          </li>
          <hr className="border border-neutral200" />
          <li className="">
            <Avatar
              sx={{ width: 48, height: 48 }}
              alt="Fasha F"
              src="/Avatar.png"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
