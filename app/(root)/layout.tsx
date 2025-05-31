import Link from 'next/link';
import React from 'react'
import { ReactNode } from 'react'
import Image from 'next/image';

import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div>
      <nav>
      <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
        {children}
      </nav>
    </div>
  )
}

export default Rootlayout;