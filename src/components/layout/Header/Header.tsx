import styles from "./Header.module.css";
import { Logo, Image } from "../../ui";
import Theme from "../Theme";
import {Link, NavLink} from "react-router";
import logo from "../../../assets/icons/logo.svg";

export default function Header(){
    return  <header className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="nav nav-pills nav-fill flex-column flex-sm-row my-4">
                                <NavLink className={({ isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/">Обо мне</NavLink>
                                <NavLink className={({ isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/contacts">Контактные данные</NavLink>
                                <NavLink className={({ isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/services">Мои услуги</NavLink>
                                <NavLink className={({ isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/important">Важное</NavLink>
                                <NavLink className={({ isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/advantages">Преимущества</NavLink>
                            </nav>
                        </div>
                    </div>
                   {/*  <div className="row">
                        <div className="col-12">
                            <Theme/>
                        </div>
                    </div> */}
                </div>
            </header>
}