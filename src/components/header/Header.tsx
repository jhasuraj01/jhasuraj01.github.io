import { NavLink } from "react-router-dom";
import { NavItem } from "../nav-item/NavItem";
import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.title}>suraj.</NavLink>
            <div className={styles.nav}>
                <NavItem to='/' text='home' />
                {/* <NavItem link='/gallery' text='gallery' /> */}
                {/* <NavItem link='/programming' text='programming' /> */}
                <NavItem to='//jhasuraj.com/blog' text='blog' target={'_blank'} />
                <NavItem to='/projects' text='projects' />
                <NavItem to='/links' text='links' />
            </div>
        </header>
    );
}