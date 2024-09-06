'use client';

import { usePathname, useParams, useRouter, useSearchParams } from "next/navigation";


import React from 'react'

const Path = () => {
    const pathname = usePathname();
    const params = useParams();

  return (
    <div>
      <h1>Path: {pathname}</h1>
      <h1>Params: {JSON.stringify(params)}</h1>
    </div>
  )
}

export default Path