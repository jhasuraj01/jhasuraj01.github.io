import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import { NavItem } from "../nav-item/NavItem";
import styles from "./Header.module.scss";

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
        <Expand
          duration={200}
          toggled={themeName === 'dark'}
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