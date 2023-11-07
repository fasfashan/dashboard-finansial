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
    <aside className="px-4 col-span-1 py-8 flex flex-col justify-between min-h-screen  border-r-2 border-neutral200">
      <ul className="flex flex-col gap-2">
        <li className="p-3">
          <HomeIcon />
        </li>
        <li className="p-3">
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
      <ul className="flex justify-center flex-col gap-2">
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
    </aside>
  );
}
