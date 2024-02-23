import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
      <div className="w-full fixed bottom-0 z-10 bg-white shadow border-t-2">
        <div id="tabs" className="flex justify-between">
          <Link href="/" className="flex flex-col items-center justify-center w-full pt-2 pb-1">
              <Image src="/home.png" alt="Home" width={50} height={50} priority />
          </Link>
          <Link href="/calender" className="flex flex-col items-center justify-center w-full pt-2 pb-1">
              <Image src="/calender.png" width={50} height={50} priority />
          </Link>
          <Link href="/search" className="flex flex-col items-center justify-center w-full pt-2 pb-1">
              <Image src="/search.png" width={50} height={50} priority />
          </Link>
          <Link href="/favorite" className="flex flex-col items-center justify-center w-full pt-2 pb-1">
              <Image src="/favorite.png" width={50} height={50} priority />
          </Link>
          <Link href="/mypage" className="flex flex-col items-center justify-center w-full pt-2 pb-1">
              <Image src="/user.png" width={50} height={50} priority />
          </Link>
        </div>
      </div>
    );
  }
