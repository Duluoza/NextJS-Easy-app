import { Navigation } from "./nav";
import Head from "next/head";

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content='js,next,react'/>
      </Head>

      <Navigation/>

      <main>
        {children}
      </main>

    </>
  )
}