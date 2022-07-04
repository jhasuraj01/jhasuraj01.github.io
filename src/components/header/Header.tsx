import { NavItem } from "../nav-item/NavItem";
import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>suraj.</div>
            <div className={styles.nav}>
                <NavItem link='/' text='home' />
                <NavItem link='/gallery' text='gallery' />
                <NavItem link='/programming' text='programming' />
                <NavItem link='/projects' text='projects' />
                <NavItem link='/contact' text='contact' />
            </div>
        </header>
    );
}