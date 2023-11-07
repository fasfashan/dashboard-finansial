import MoreButton from "./Buttons/MoreButton";
import Avatar from "@mui/material/Avatar";
export default function Transaction() {
  return (
    <div className="mt-6 grid grid-cols-12 ">
      <div className="bg-white space-y-6 rounded-lg border p-6 col-span-4 border-neutral200 shadow-md">
        <div className="flex justify-between">
          <p className="text-large font-medium">Deposit Terakhir</p>
          <MoreButton />
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Avatar.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-small text-neutral500">
                  Expiry 06/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp25,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Avatar.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-small text-neutral500">
                  Expiry 06/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp25,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Avatar.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-small text-neutral500">
                  Expiry 06/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp25,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Avatar.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-small text-neutral500">
                  Expiry 06/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp25,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Avatar.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-small text-neutral500">
                  Expiry 06/2024
                </span>
              </div>
            </div>
            <p className="text-success500"> + Rp25,000</p>
          </div>
          <hr className="border border-neutral200" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src="/Avatar.png" alt="" />

              <div className="flex flex-col">
                <p className="text-smalll font-medium">Visa ending in 8495</p>
                <span className="text-small text-neutral500">
                  Expiry 06/2024
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
    </div>
  );
}
