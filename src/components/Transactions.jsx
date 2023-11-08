import * as React from "react";
import MoreButton from "./Buttons/MoreButton";
import LinearProgress from "@mui/material/LinearProgress";
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import OutlinedButton from "./Buttons/OutlinedButton";
const series = [
  {
    type: "bar",
    stack: "",
    color: "#004EEB",
    yAxisKey: "eco",
    data: [2, 5, 3, 4, 1, 8, 2, 5, 3, 4, 1, 8],
  },
  {
    type: "bar",
    stack: "",
    color: "#2970FF",
    yAxisKey: "eco",
    data: [5, 6, 2, 8, 9, 8, 5, 6, 2, 8, 9, 8],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "blue",
    data: [
      1000, 1500, 3000, 5000, 10000, 15000, 7000, 8000, 1000, 6000, 1000, 7000,
    ],
  },
];
export default function Transaction() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="mt-6 gap-6 grid grid-cols-12 ">
      <div className="bg-white space-y-6 rounded-lg border p-6 col-span-5 border-neutral200 shadow-md">
        <div className="flex justify-between">
          <p className="text-large font-medium">Deposit Terakhir</p>
          <MoreButton />
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/VISA.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-smalll text-neutral500">
                  Expiry 06/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp785,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Jago.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Jago ending in 4731</p>
                <span className="text-smalll text-neutral500">
                  cynthia@halofigma.com
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp85,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Apple.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Apple Pay</p>
                <span className="text-smalll text-neutral500">
                  handi@halofigma.com
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp125,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Mastercard.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">
                  Mastercard ending in 4829
                </p>
                <span className="text-smalll text-neutral500">
                  Expiry 03/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp65,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Paypal.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Paypal deposit</p>
                <span className="text-smalll text-neutral500">
                  arka@halofigma.com
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp10,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/BCA.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">BCA ending in 1163</p>
                <span className="text-small text-neutral500">
                  Expiry 03/2025
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp25,000</p>
          </div>
        </div>
        <div>
          <a className="text-medium text-primary500 font-medium" href="">
            Show more
          </a>
        </div>
      </div>
      <div className="flex  content-end  flex-col gap-6 col-span-7">
        <div className="bg-white space-y-6 rounded-lg border p-6 col-span-7 border-neutral200 shadow-md">
          <div className="flex justify-between">
            <p className="text-large font-medium">Balance sepanjang waktu</p>
            <MoreButton />
          </div>
          <div className="overflow-scroll">
            <ChartContainer
              series={series}
              width={1000}
              height={400}
              xAxis={[
                {
                  id: "month",
                  data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mei",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  scaleType: "band",
                  valueFormatter: (value) => value.toString(),
                },
              ]}
              yAxis={[
                {
                  id: "eco",
                  scaleType: "linear",
                },
                {
                  id: "pib",
                  scaleType: "log",
                },
              ]}
            >
              <BarPlot />
              <ChartsXAxis label="Month" position="bottom" axisId="month" />
            </ChartContainer>
          </div>
        </div>
        <div className="bg-white flex flex-col  space-y-6 rounded-lg border p-6  border-neutral200 shadow-md">
          <div className="flex justify-between">
            <p className="text-large font-medium">Kartu Anda</p>
            <MoreButton />
          </div>
          <div className="flex gap-6">
            <div className="flex space-y-4 grow flex-col">
              <div className="flex text-white justify-between flex-col grow p-4 h-48 bg-gradient-to-r rounded-md from-blue-700 to-blue-500">
                <div className=" grow flex justify-between">
                  <p className=" font-medium ">BCA</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                  >
                    <path
                      d="M14 1C15.8144 4.1924 17 8.31373 17 12C17 15.6863 15.8144 18.8076 14 22M10 3C11.4152 5.49007 12 9.12471 12 12C12 14.8753 11.4152 17.5099 10 20M5 5C6.02332 6.81967 7 8.89883 7 11C7 13.1012 6.02332 15.1803 5 17M1 8C1.73749 9.13384 2 10.6635 2 12C2 13.3365 1.73749 13.8662 1 15"
                      stroke="white"
                      stroke-width="2.44123"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex grow justify-between">
                    <p className="font-medium">MAS ARIS</p>
                    <p>04/24</p>
                  </div>
                  <div className="flex justify-between grow">
                    <p className="tracking-wider">4821 1234 1234 1234</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="30"
                      viewBox="0 0 43 30"
                      fill="none"
                    >
                      <rect
                        width="43"
                        height="30"
                        rx="4"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 20.981C20.5176 22.2403 18.5975 23 16.5 23C11.8056 23 8 19.1944 8 14.5C8 9.80558 11.8056 6 16.5 6C18.5975 6 20.5176 6.75974 22 8.01903C23.4824 6.75974 25.4025 6 27.5 6C32.1944 6 36 9.80558 36 14.5C36 19.1944 32.1944 23 27.5 23C25.4025 23 23.4824 22.2403 22 20.981Z"
                        fill="#ED0006"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.0002 20.9814C23.8359 19.4223 25.0008 17.0972 25.0008 14.5C25.0008 11.9028 23.8359 9.57774 22.0002 8.0186C23.4826 6.75956 25.4025 6 27.4997 6C32.1942 6 35.9997 9.80558 35.9997 14.5C35.9997 19.1944 32.1942 23 27.4997 23C25.4025 23 23.4826 22.2404 22.0002 20.9814Z"
                        fill="#F9A000"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 20.981C23.8354 19.4218 25 17.0969 25 14.5C25 11.9031 23.8354 9.57818 22 8.01904C20.1646 9.57818 19 11.9031 19 14.5C19 17.0969 20.1646 19.4218 22 20.981Z"
                        fill="#FF5E00"
                      />
                    </svg>
                  </div>
                </div>
                <div></div>
              </div>
              <div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="font-medium">Pengeluaran bulan ini</p>
                    <span className="text-neutral500">Rp2.190.000</span>
                  </div>
                  <LinearProgress
                    sx={{ height: 8, borderRadius: "8px" }}
                    variant="determinate"
                    value={progress}
                  />
                </div>
              </div>
            </div>
            <div className="flex space-y-4 grow flex-col">
              <div className="flex text-white justify-between flex-col grow p-4 h-48 bg-gradient-to-r rounded-md from-neutral-800 to-neutral-500">
                <div className=" grow flex justify-between">
                  <p className=" font-medium ">DBS</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                  >
                    <path
                      d="M14 1C15.8144 4.1924 17 8.31373 17 12C17 15.6863 15.8144 18.8076 14 22M10 3C11.4152 5.49007 12 9.12471 12 12C12 14.8753 11.4152 17.5099 10 20M5 5C6.02332 6.81967 7 8.89883 7 11C7 13.1012 6.02332 15.1803 5 17M1 8C1.73749 9.13384 2 10.6635 2 12C2 13.3365 1.73749 13.8662 1 15"
                      stroke="white"
                      stroke-width="2.44123"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex grow justify-between">
                    <p className="font-medium">LYDIA</p>
                    <p>09/24</p>
                  </div>
                  <div className="flex justify-between grow">
                    <p className="tracking-wider">7981 1234 1234 1234</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="30"
                      viewBox="0 0 43 30"
                      fill="none"
                    >
                      <rect
                        width="43"
                        height="30"
                        rx="4"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 20.981C20.5176 22.2403 18.5975 23 16.5 23C11.8056 23 8 19.1944 8 14.5C8 9.80558 11.8056 6 16.5 6C18.5975 6 20.5176 6.75974 22 8.01903C23.4824 6.75974 25.4025 6 27.5 6C32.1944 6 36 9.80558 36 14.5C36 19.1944 32.1944 23 27.5 23C25.4025 23 23.4824 22.2403 22 20.981Z"
                        fill="#ED0006"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.0002 20.9814C23.8359 19.4223 25.0008 17.0972 25.0008 14.5C25.0008 11.9028 23.8359 9.57774 22.0002 8.0186C23.4826 6.75956 25.4025 6 27.4997 6C32.1942 6 35.9997 9.80558 35.9997 14.5C35.9997 19.1944 32.1942 23 27.4997 23C25.4025 23 23.4826 22.2404 22.0002 20.9814Z"
                        fill="#F9A000"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 20.981C23.8354 19.4218 25 17.0969 25 14.5C25 11.9031 23.8354 9.57818 22 8.01904C20.1646 9.57818 19 11.9031 19 14.5C19 17.0969 20.1646 19.4218 22 20.981Z"
                        fill="#FF5E00"
                      />
                    </svg>
                  </div>
                </div>
                <div></div>
              </div>
              <div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="font-medium">Pengeluaran bulan ini</p>
                    <span className="text-neutral500">Rp2.500.000</span>
                  </div>
                  <LinearProgress
                    sx={{ height: 8, borderRadius: "8px" }}
                    variant="determinate"
                    value={progress}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="items-center flex justify-between">
            <a className="text-medium text-primary500 font-medium" href="">
              Tambah kartu
            </a>
            <OutlinedButton text="Pengaturan kartu" />
          </div>
        </div>
      </div>
    </div>
  );
}
