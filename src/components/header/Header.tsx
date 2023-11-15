import { NavLink } from "react-router-dom";
import { NavItem } from "../nav-item/NavItem";
import styles from "./Header.module.scss";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useTheme } from "../../providers/ThemeProvider";

<Classic duration={750} />
export const Header = () => {
  const { themeName, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.title}>suraj.</NavLink>
      <div className={styles.nav}>
        <NavItem to='/' text='home' />
        {/* <NavItem link='/gallery' text='gallery' /> */}
        {/* <NavItem link='/programming' text='programming' /> */}
        <NavItem to='/projects' text='projects' />
        <NavItem to='/links' text='links' />
        <NavItem to='//jhasuraj.com/blog' text='blog' target='_blank' />
        <Classic
          duration={200}
          toggled={themeName === 'light'}
          toggle={toggleTheme}
          style={{
              aspectRatio: '1/1',
              fontSize: '24px',
              color: 'var(--color-primary_theme)'
          }}
        />
      </div>
    </header>
  );
}