import styles from "./NotFound.module.css";
import { Button } from "../../components/ui";
import { useNavigate } from "react-router";

export default function NotFound(){

    const navigate = useNavigate();

    return  <div className={styles.notfound}>
                <div className="container d-flex align-items-center justify-content-center py-3">
                    <div className="row justify-content-center text-center w-100">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="display-1 fw-extrabold text-primary mb-2" style={{ fontSize: 'calc(4rem + 4vw)', letterSpacing: '-2px', lineHeight: '1' }}>
                                404
                            </div>
                            <h2 className="h2 fw-bold text-dark mb-3">
                                Страница не найдена
                            </h2>
                            <p className="text-muted mb-5 fs-5 mx-auto" style={{ maxWidth: '400px' }}>
                                Возможно, адрес набран неправильно или страница была перемещена.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                                <Button
                                    onClick={() => navigate("/")}
                                    disabled={false}
                                    type="button"
                                    className="btn btn-primary btn-lg px-4 py-3 fw-semibold shadow-sm text-nowrap"
                                >
                                    На главную
                                </Button>
                                <Button
                                    onClick={() => navigate(-1)}
                                    disabled={false}
                                    type="button"
                                    className="btn btn-outline-secondary btn-lg px-4 py-3 fw-semibold text-nowrap"
                                >
                                    Назад
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}