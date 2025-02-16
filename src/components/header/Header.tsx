import Link from "next/link"
import { GrTechnology } from "react-icons/gr";
import styles from "./header.module.css";



const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <Link href="/" className={styles.logo}>
            CLOUD
            <GrTechnology />
            HOSTING
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <Link className={styles.navLink} href="/">Home</Link>
          <Link className={styles.navLink} href="/admin">Admin</Link>
          <Link className={styles.navLink} href="/about">About</Link>
          <Link className={styles.navLink} href="/articles/search">Articles</Link>
          
        </ul>
      </nav>
<div className={styles.right}>
<Link className={styles.btn} href="/login">Login</Link><br/>
<Link className={styles.btn} href="/register">Register</Link>
</div>
    </header>

  )
}

export default Header
