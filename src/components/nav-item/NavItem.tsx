import styles from './NavItem.module.scss';
import { NavLink } from "react-router-dom";

interface NavItemProps {
    text: string
    link: string
}

export const NavItem = ({ text, link}: NavItemProps) => {

    const className = ({ isActive }: { isActive: boolean}): string => {
        const classes = [styles.container]
        if (isActive) {
            classes.push(styles.selected)
        }
        return classes.join(' ')
    }

    return (
        <NavLink to={link} className={className}>
            <div>{text}</div>
            <div className={styles.bar} />
        </NavLink>
    );
}