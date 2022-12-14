import styles from './NavItem.module.scss';
import { NavLink, NavLinkProps } from "react-router-dom";

interface NavItemProps extends NavLinkProps {
    text: string
    to: string
}

export const NavItem = (props : NavItemProps) => {

    const className = ({ isActive }: { isActive: boolean}): string => {
        const classes = [styles.container]
        if (isActive) {
            classes.push(styles.selected)
        }
        return classes.join(' ')
    }

    return (
        <NavLink {...props} className={className}>
            <div>{props.text}</div>
            <div className={styles.bar} />
        </NavLink>
    );
}