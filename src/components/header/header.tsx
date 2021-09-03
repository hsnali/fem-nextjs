import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link href="/">
        <a>Note App</a>
      </Link>

      <Link href="/notes">
        <a>notes</a>
      </Link>
    </nav>
  </header>
);

export default Header;
