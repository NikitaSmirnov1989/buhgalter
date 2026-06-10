import styles from "./Success.module.css";
import { useNavigate } from "react-router";

export default function Success(){

   const navigate = useNavigate();

    return  <div className={styles.success}>
                 <div className="container d-flex align-items-center justify-content-center">
                    <div className="row justify-content-center w-100">
                        <div className="col-12 col-md-8 col-lg-6">
                        <div className="card border-0 shadow-lg text-center p-4 p-sm-5 rounded-4">
                        
                            <div className="mb-4 d-flex justify-content-center">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center shadow-sm p-4 fs-1">
                                    <svg 
                                    xmlns="http://w3.org" 
                                    width="48" 
                                    height="48" 
                                    fill="currentColor" 
                                    className="bi bi-check-circle-fill text-success" 
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="fw-bold text-dark mb-3">Данные успешно отправлены!</h2>
                            <p className="text-secondary mb-4 fs-5 lh-base">
                                Я свяжусь с Вами в ближайшее время для обсуждения деталей!
                            </p>

                            <hr className="text-muted opacity-25 my-4" />

                            <div className="bg-light p-3 rounded-3 mb-4 text-start">
                            <small className="text-muted d-block mb-1">Режим работы:</small>
                            <strong className="text-dark">Ежедневно с 9:00 до 21:00</strong>
                            </div>

                            {/* Кнопка действия */}
                            <div className="d-grid gap-2">
                            <button 
                                onClick={() => navigate("/")}
                                className="btn btn-primary btn-lg rounded-3 fw-medium shadow-sm py-3"
                                type="button">
                                Вернуться на главную
                            </button>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
}