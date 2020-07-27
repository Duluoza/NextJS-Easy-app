import Link from 'next/link';
import classes from '../styles/nav.module.scss'

export function Navigation() {
  return (
    <>
      <nav className={classes.nav}>
        <Link href='/'><a>Main</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
    </>
  )
}
