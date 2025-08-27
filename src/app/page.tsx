import React from 'react'
import Link from 'next/link';
import { AccordionDemo } from './components/AccordionDemo';

export default function page() {
  return (
    <>
      <AccordionDemo />
      <div>
        <ul>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
