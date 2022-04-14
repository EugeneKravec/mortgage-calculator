import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink
                    to="/banks"
                // className={(navData) => (navData.isActive ? s.active : s.item)}
                >
                    Banks
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/countmortgage"
                // className={(navData) => (navData.isActive ? s.active : s.item)}
                >
                    CountMortgage
                </NavLink>
            </div>
        </nav>)
}

export default Navbar;