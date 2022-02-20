import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const links = [{ label: 'Basic Scene', path: '/basic-scene' }]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>

      <div>
        <ul>
          {links.map(link => (
            <li key={link.path}>
              <Link href={link.path}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
