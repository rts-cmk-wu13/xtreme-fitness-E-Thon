'use client'

import Link from "next/link";
import { useEffect } from "react";
import "./style/error-handling/_Error.scss"

export default function Error({
  error, 
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <div>
        <button className="btn" onClick={() => reset()}>Try again</button>
        <Link href="/">Go to home</Link>
      </div>
    </div>
  )
}
