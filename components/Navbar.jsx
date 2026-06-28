import Link from 'next/link';
import React from 'react';

function Navbar({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-orange-600">
        <Icon className="text-2xl sm:hidden" />
        <h1 className="uppercase font-bold hidden sm:inline text-sm">
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default Navbar;
