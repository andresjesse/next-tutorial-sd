import React from "react";
import Link from "next/link";

export default function Computers() {
  return (
    <div>
      <h1>Computers</h1>

      <Link href="/computers/linux">
        <a>Linux</a>
      </Link>

      <Link href="/computers/windows">
        <a>Windows</a>
      </Link>
    </div>
  );
}
