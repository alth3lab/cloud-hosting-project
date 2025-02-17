import Link from "next/link";
import Navbar from "./navbar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.right}>
        <Link className={styles.btn} href="/login">
          Login
        </Link>
        <br />
        <Link className={styles.btn} href="/register">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
