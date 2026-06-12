import styles from "./Contacts.module.css";
import { Image } from "../../components/ui";
import fb from "../../../src/assets/icons/social/fb.svg";
import ins from "../../../src/assets/icons/social/ins.svg"
import twit from "../../../src/assets/icons/social/twit.svg";
import linkedin from "../../../src/assets/icons/social/linkedin.svg";
import email from "../../../src/assets/icons/connection/email.svg";
import location from "../../../src/assets/icons/connection/location.svg";
import telephone from "../../../src/assets/icons/connection/telephone.svg";

export default function Contacts(){
    return  <div className={styles.contacts}>
                <div className="container">
                    <div className="row mb-5">
                        <h2 className="col-12 h2 display-5 text-dark mb-4">Как связаться со мной?</h2>
                    </div>

                    <div className="row g-4 justify-content-center mb-5">
                        {/* Телефон */}
                        <div className="col-12 col-md-4">
                            <div className={`card h-100 border-0 shadow-sm text-center p-4 position-relative overflow-hidden transition-all ${styles.hover_lift}`}>
                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                                    <Image url={telephone} alt="Номер телефона" width="30px" height="30px" objectFit="cover" />
                                </div>
                                <h5 className="text-muted small text-uppercase fw-bold mb-2">Телефон</h5>
                                <a className="stretched-link text-dark text-decoration-none fw-semibold fs-5" href="tel:+79060592259">
                                    8 (906) 059-22-59
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-12 col-md-4">
                            <div className={`card h-100 border-0 shadow-sm text-center p-4 position-relative overflow-hidden transition-all ${styles.hover_lift}`}>
                                <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                                    <Image url={email} alt="Адрес электронной почты" width="30px" height="30px" objectFit="cover" />
                                </div>
                                <h5 className="text-muted small text-uppercase fw-bold mb-2">Электронная почта</h5>
                                <a className="stretched-link text-dark text-decoration-none fw-semibold fs-5 text-break" href="mailto:slavorossovav@mail.ru">
                                    slavorossovav@mail.ru
                                </a>
                            </div>
                        </div>

                        {/* Локация */}
                        <div className="col-12 col-md-4">
                            <div className={`card h-100 border-0 shadow-sm text-center p-4 position-relative overflow-hidden transition-all ${styles.hover_lift}`}>
                                <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                                    <Image url={location} alt="Местоположение" width="30px" height="30px" objectFit="cover" />
                                </div>
                                <h5 className="text-muted small text-uppercase fw-bold mb-2">Локация</h5>
                                <span className="text-dark fw-semibold fs-5">
                                    РФ, г. Москва
                                </span>
                            </div>
                        </div>
                    </div>
    
                   <div className="row justify-content-center">
                        <div className="col-12 col-md-8 text-center">
                            <div className="p-3 bg-light rounded-4 d-inline-block border shadow-sm px-4">
                                <span className="text-dark fw-semibold d-block d-md-inline mb-2 mb-md-0 me-md-3">
                                    Время работы: Ежедневно, с 9:00 до 21:00 (по МСК)
                                </span>
                                <span className="text-muted small d-block d-md-inline">
                                    Ответ на email в течение 2 часов
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
}
