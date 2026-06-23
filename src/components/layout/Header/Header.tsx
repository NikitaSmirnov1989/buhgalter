import styles from "./Header.module.css";
import {NavLink} from "react-router";


export default function Header(){

    {/*Отдельная переменная дли стилей списка li*/}
    const li_styles: string = 'nav-item px-2';

    {/*Отдельная переменная стилей ссылок a*/}
    const a_styles = (isActive: boolean) => `nav-item nav-link ${isActive ? "active text-light" : ""}`;

    return  <header className={styles.header}>
                <div className="container">
                     <nav className="navbar navbar-expand-lg">
                                <button className="mb-3 navbar-toggler shadow-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav nav-pills">
                                        <li className={li_styles}>
                                            <NavLink className={({ isActive}) => a_styles(isActive)} to="/">Обо мне</NavLink>
                                        </li>
                                        <li className={li_styles}>
                                            <NavLink className={({ isActive}) => a_styles(isActive)} to="/contacts">Контактные данные</NavLink>
                                        </li>
                                        <li className={li_styles}>
                                            <NavLink className={({ isActive}) => a_styles(isActive)} to="/services">Мои услуги</NavLink>
                                        </li>
                                        <li className={li_styles}>
                                            <NavLink className={({ isActive}) => a_styles(isActive)} to="/important">Важное</NavLink>
                                        </li>
                                        <li className={li_styles}>
                                            <NavLink className={({ isActive}) => a_styles(isActive)} to="/advantages">Преимущества</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                </div>
            </header>
}