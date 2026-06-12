import styles from "./Footer.module.css";
import { Logo } from "../../ui";

export default function Footer() {
    return  <footer className={`${styles.footer} bg-light py-5 border-top`}>
    <div className="container">
        <div className="row gy-4 justify-content-between align-items-start">
            
            <div className="col-12">
                <h3 className="fw-bold mb-0 text-secondary">Связь со мной</h3>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="d-flex flex-column gap-1">
                    <span className="text-muted small fw-semibold text-uppercase tracking-wider">Телефон</span>
                    <a className="link-dark text-decoration-none fs-5 fw-medium" href="tel:+79060592259">
                        8 (906) 059-22-59
                    </a>
                    <span className="text-muted small">Ежедневно с 9:00 до 21:00</span>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="d-flex flex-column gap-1">
                    <span className="text-muted small fw-semibold text-uppercase tracking-wider">Электронная почта</span>
                    <a href="mailto:slavorossovav@mail.ru" className="link-dark text-decoration-none fs-5 fw-medium text-break">
                        slavorossovav@mail.ru
                    </a>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="d-flex flex-column gap-1">
                    <span className="text-muted small fw-semibold text-uppercase tracking-wider">Адрес</span>
                    <address className="fs-5 fw-medium mb-0 text-dark">
                        РФ, г. Москва
                    </address>
                </div>
            </div>

            <div className="col-12 pt-4 mt-4 border-top d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
                <p className="text-muted small mb-0">2026 © Все права защищены</p>
                <p className="text-muted small mb-0">Разработано с душой</p>
            </div>

        </div>
    </div>
</footer>
}