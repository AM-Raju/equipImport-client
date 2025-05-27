import Link from "next/link";
import React from "react";

const Logo = () => {
  // https://i.ibb.co/pvYQc5Sp/indugrow-logo.webp
  const image = "";

  return (
    <Link href="/" className="text-2xl font-bold text-primary-green">
      {image ? (
        <img src={image} alt="Logo" width={250} height={80} />
      ) : (
        <h1 className="text-3xl">Gastext</h1>
      )}
    </Link>
  );
};

export default Logo;
