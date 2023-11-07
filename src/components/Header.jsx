import DollarIcon from "../assets/icons/DollarIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import OutlinedButton from "./Buttons/OutlinedButton";
import PrimaryButton from "./Buttons/PrimaryButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
export default function Header() {
  const buttonStyle = {
    borderColor: "#CDD5DF",
    color: "#364152",
    fontSize: "14px",
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  return (
    <header className="mb-10   space-y-6 col-span-12">
      <div className="flex col-span-12 justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-extraLarge font-semibold">
            Dashboard Finansialmu
          </h1>
          <p className="text-medium text-neutral500">Welcome back, Aris!</p>
        </div>
        <div className="flex  gap-3">
          <OutlinedButton text="Deposit" icon={<DollarIcon />} />
          <PrimaryButton text="Kirim Uang" />
        </div>
      </div>
      <div className="flex col-span-8 justify-between items-center">
        <div>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button style={buttonStyle}>12 bulan</Button>
            <Button style={buttonStyle}>30 hari</Button>
            <Button style={buttonStyle}>7 hari</Button>
            <Button style={buttonStyle}>24 jam</Button>
          </ButtonGroup>
        </div>
        <div className="flex  gap-3">
          <OutlinedButton text="Pilih tanggal" icon={<CalendarIcon />} />
          <OutlinedButton text="Filter" icon={<FilterIcon />} />
        </div>
      </div>
    </header>
  );
}
