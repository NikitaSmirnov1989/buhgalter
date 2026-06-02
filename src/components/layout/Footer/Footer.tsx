import styles from "./Footer.module.css";
import { Logo } from "../../ui";

export default function Footer() {
    return  <footer className={styles.footer}>
                <div className="container">
                    <div className="row my-4 text-md-start text-sm-center">
                        <h2 className="col-12 mb-4">
                            Связь со мной
                        </h2>
                        <div className="col-12 col-md-3 mb-2">
                            <p className="fw-bold mb-sm-1">
                                Телефон:
                            </p>
                            <p>
                                <a className="link-dark text-decoration-none" href="tel:+79060592259" >8 (906) 059-22-59</a>
                                (с 10:00 до 20:00 МСК)
                            </p>
                        </div>
                        <div className="col-12 col-md-3 mb-2">
                            <p className="fw-bold mb-sm-1">Электронная почта:</p>
                            <a href="mailto:slavorossovav@mail.ru" className="link-dark text-decoration-none">slavorossovav@mail.ru</a>
                        </div>
                        <div className="col-12 col-md-3 mb-2">
                            <p className="fw-bold mb-sm-1">Адрес:</p>
                            <p>РФ, г. Москва</p>
                        </div>
                        <div className="col-4 col-md-2 ms-md-auto mx-sm-auto mx-auto">
                            <Logo/>
                        </div>
                        {/* <ul className="list-group text-start">
                            <li className="list-group-item">8(910)456-68-21</li>
                            <li className="list-group-item">slavorossovav@mail.ru</li>
                            <li className="list-group-item"><Logo/></li>
                        </ul> */}
                        <p className="col-12 mt-4">2026 © Все права защищены</p>
                    </div>
                </div>
            </footer>
}