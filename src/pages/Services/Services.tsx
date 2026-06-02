import styles from "./Services.module.css";
import { Image, Button } from "../../components/ui";
import accounting from "../../../src/assets/icons/services/accounting.svg";
import bank from "../../../src/assets/icons/services/bank.svg"; 
import calculation from "../../../src/assets/icons/services/calculation.svg"; 
import consultation from "../../../src/assets/icons/services/consultation.svg"; 
import government from "../../../src/assets/icons/services/government.svg"; 
import hr from "../../../src/assets/icons/services/hr.svg"; 
import payroll from "../../../src/assets/icons/services/payroll.svg"; 
import reporting from "../../../src/assets/icons/services/reporting.svg"; 


export default function Services(){
    return  <div className={styles.services}>
                <div className="container">
                    <div className="text-center mb-3">
                        <span className="text-primary fw-bold text-uppercase small d-block mb-2" style={{ letterSpacing: '0.075rem' }}>
                            Тарифные планы
                        </span>
                        <h2 className="display-5 fw-extrabold text-dark mb-3">
                            Мои услуги <span className="text-primary">(регулярное обслуживание)</span>
                        </h2>
                        <p className="text-muted col-md-8 col-lg-6 mx-auto small">
                            Фиксированная стоимость без скрытых платежей. Выберите подходящий пакет услуг для стабильного ведения вашей бухгалтерии.
                        </p>
                    </div>

                      {/* Сетка с карточками */}
                    <div className="row g-4 g-xl-5 justify-content-center">
                        {/* КАРТОЧКА 1: Минимум */}
                        <div className="col-12 col-md-9 col-xl-4 d-flex">
                            <div className="card w-100 border border-light-subtle shadow-lg rounded-4 overflow-hidden bg-white">
                                <div className="card-body p-4 p-sm-5 p-xl-4 d-flex flex-column h-100">
                                    <div className="text-center mb-4">
                                        <h3 className="fw-bold text-dark fs-4 mb-2">Пакет «Минимум»</h3>
                                        <p className="text-muted small mb-0 px-2">Для ИП и ООО без сотрудников и без активных операций</p>
                                    </div>
                                    <div className="text-center bg-body-tertiary rounded-3 p-3 mb-4">
                                        <span className="text-secondary small d-block mb-1">Цена пакета</span>
                                        <span className="fs-3 fw-bold text-primary">от 3 500 ₽</span>
                                        <span className="text-muted small"> / мес.</span>
                                    </div>
                                    <div className="mb-4 flex-grow-1">
                                        <p className="fw-bold text-secondary small text-uppercase tracking-wider mb-3" style={{ fontSize: '0.7rem' }}>Что входит в стоимость:</p>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-flex align-items-start mb-3">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Сдача нулевой отчётности <span className="text-muted small">(2 000 ₽ / усл.)</span></span>
                                            </li>
                                            <li className="d-flex align-items-start mb-3">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Составление декларации <span className="text-muted small">(1 500 ₽ / усл.)</span></span>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Мониторинг личного кабинета налоговой</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Button disabled={false} className="btn btn-primary btn-lg w-100 rounded-3 py-2.5 fw-bold shadow-sm mt-auto" onClick={() => console.log("Оставить заявку")} type="button">Оставить заявку</Button>
                                </div>
                            </div>
                        </div>

                        {/* КАРТОЧКА 2: Оптимальный */}
                        <div className="col-12 col-md-9 col-xl-4 d-flex">
                            <div className="card w-100 border border-light-subtle shadow-lg rounded-4 overflow-hidden bg-white">
                                <div className="card-body p-4 p-sm-5 p-xl-4 d-flex flex-column h-100">
                                    <div className="text-center mb-4">
                                        <h3 className="fw-bold text-dark fs-4 mb-2">Пакет «Оптимальный (УСН)»</h3>
                                        <p className="text-muted small mb-0 px-2">Для работающего малого бизнеса на упрощенной системе</p>
                                    </div>
                                    <div className="text-center bg-body-tertiary rounded-3 p-3 mb-4">
                                        <span className="text-secondary small d-block mb-1">Цена пакета</span>
                                        <span className="fs-3 fw-bold text-primary">от 5 000 ₽</span>
                                        <span className="text-muted small"> / мес.</span>
                                    </div>
                                    <div className="mb-4 flex-grow-1">
                                        <p className="fw-bold text-secondary small text-uppercase tracking-wider mb-3" style={{ fontSize: '0.7rem' }}>Что входит в стоимость:</p>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-flex align-items-start mb-3">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Бухгалтерия УСН (Доходы или Доходы-Расходы)</span>
                                            </li>
                                            <li className="d-flex align-items-start mb-3">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Ведение бухгалтерского и налогового учёта в полном объёме</span>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Сдача текущей отчётности <span className="text-muted small">(3 000 ₽ / усл.)</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Button disabled={false} className="btn btn-primary btn-lg w-100 rounded-3 py-2.5 fw-bold shadow-sm mt-auto" onClick={() => console.log("Оставить заявку")} type="button">Оставить заявку</Button>
                                </div>
                            </div>
                        </div>

                        {/* КАРТОЧКА 3: ВЭД и Масштаб */}
                        <div className="col-12 col-md-9 col-xl-4 d-flex">
                            <div className="card w-100 border border-light-subtle shadow-lg rounded-4 overflow-hidden bg-white">
                                <div className="card-body p-4 p-sm-5 p-xl-4 d-flex flex-column h-100">
                                    <div className="text-center mb-4">
                                        <h3 className="fw-bold text-dark fs-4 mb-2">Пакет «ВЭД и Масштаб»</h3>
                                        <p className="text-muted small mb-0 px-2">Для компаний, торгующих с зарубежными партнерами или с НДС</p>
                                    </div>
                                    <div className="text-center bg-body-tertiary rounded-3 p-3 mb-4">
                                        <span className="text-secondary small d-block mb-1">Цена пакета</span>
                                        <span className="fs-3 fw-bold text-primary">от 18 000 ₽</span>
                                        <span className="text-muted small"> / мес.</span>
                                    </div>
                                    <div className="mb-4 flex-grow-1">
                                        <p className="fw-bold text-secondary small text-uppercase tracking-wider mb-3" style={{ fontSize: '0.7rem' }}>Что входит в стоимость:</p>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-flex align-items-start mb-3">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Полное сопровождение ВЭД <span className="text-muted small">(15 000 ₽ / мес.)</span></span>
                                            </li>
                                            <li className="d-flex align-items-start mb-3">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Ведение учета в полном объеме</span>
                                            </li>
                                            <li className="d-flex align-items-start">
                                                <span className="text-success me-2 fw-bold">✓</span>
                                                <span className="text-dark small">Сдача декларации по НДС <span className="text-muted small">(3 000 ₽ / усл.)</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Button disabled={false} className="btn btn-primary btn-lg w-100 rounded-3 py-2.5 fw-bold shadow-sm mt-auto" onClick={() => console.log("Оставить заявку")} type="button">Оставить заявку</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 g-xl-5 justify-content-center mt-5 pt-3 pt-md-5">
                        <div className="text-center mb-3">
                            <span className="text-uppercase text-primary fw-bold small tracking-wider mb-2 d-block">Дополнительный сервис</span>
                            <h2 className="fw-extrabold text-dark h1 mb-3">
                                Разовые услуги и <span className="text-primary">наведение порядка</span>
                            </h2>
                            <p className="text-muted fs-6">
                                Помогаем исправить ошибки прошлых периодов, сдать декларации и решить рутинные кадровые вопросы.
                            </p>
                        </div>
                        {/*Карточка №1*/}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow border-0 rounded-3">
                                <div className="card-body d-flex flex-column p-4">
                                    <h3 className="card-title text-center h4 mb-4 fw-semibold text-primary">Наведение порядка и аудит</h3>
                                    <div className="list-group list-group-flush mb-4 flex-grow-1">
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Исправление ошибок в бухгалтерском учёте</h5>
                                            <p className="text-muted small mb-2">
                                                Если прошлый бухгалтер бросил базу или допустил критические ошибки
                                            </p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 10 000 ₽ / усл.</span>
                                        </div>

                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">
                                                Восстановление бухгалтерского учёта
                                            </h5>
                                            <p className="text-muted small mb-2">
                                                Полное воссоздание учета за прошлые кварталы или годы
                                            </p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 9 000 ₽ / усл.</span>
                                        </div>
                                    </div>

                                    <Button
                                        className="btn btn-primary w-100 py-2 mt-auto text-uppercase fw-bold tracking-wider"
                                        onClick={() => console.log("Оставить заявку")}
                                        disabled={false}
                                        type="button"
                                    >Оставить заявку</Button>
                                </div>
                            </div>
                        </div>

                        {/*Карчтока №2*/}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow border-0 rounded-3">
                                <div className="card-body d-flex flex-column p-4">
                                    <h3 className="card-title text-center h4 mb-4 fw-semibold text-primary">Рутинные задачи и кадры</h3>
                                    <div className="list-group list-group-flush mb-4 flex-grow-1">
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Расчёт заработной платы</h5>
                                            <p className="text-muted small mb-2">
                                                Расчет выплат и ведение отчетности за одного сотрудника
                                            </p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 1 000 ₽ / сотр.</span>
                                        </div>
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Ведение первичной документации</h5>
                                            <p className="text-muted small mb-2">Систематизация и ввод актов, накладных, счетов-фактур</p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 300 ₽ / усл.</span>
                                        </div>
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Налоговое консультирование</h5>
                                            <p className="text-muted small mb-2">Разбор и решение сложных вопросов, оптимизация нагрузок</p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 2 000 ₽ / усл.</span>
                                        </div>
                                    </div>
                                    <Button
                                        className="btn btn-primary w-100 py-2 mt-auto text-uppercase fw-bold tracking-wider"
                                        onClick={() => console.log("Оставить заявку")}
                                        disabled={false}
                                        type="button"
                                        >Оставить заявку</Button>
                                </div>
                            </div>
                        </div>

                        {/*Картояка №3*/}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow border-0 rounded-3">
                                <div className="card-body d-flex flex-column p-4">
                                    <h3 className="card-title text-center h4 mb-4 fw-semibold text-primary">Разовая отчетность и декларации</h3>
                                    <div className="list-group list-group-flush mb-4 flex-grow-1">
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Сдача декларации 3-НДФЛ</h5>
                                            <p className="text-muted small mb-2"> Подготовка и отправка отчетности для физических лиц и ИП</p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 1 500 ₽ / усл.</span>
                                        </div>
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Заполнение КУДиР</h5>
                                            <p className="text-muted small mb-2">Составление книги учёта доходов и расходов (отдельная услуга)</p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 3 000 ₽ / усл.</span>
                                        </div>
                                        <div className="list-group-item px-0 py-3">
                                            <h5 className="mb-1 h6 fw-bold text-dark">Сдача разовой отчётности</h5>
                                            <p className="text-muted small mb-2">Формирование и отправка отдельных отчетов по требованию</p>
                                            <span className="badge bg-light text-dark border fw-medium fs-6">от 3 000 ₽ / усл.</span>
                                        </div>
                                    </div>
                                    <Button
                                        className="btn btn-primary w-100 py-2 mt-auto text-uppercase fw-bold tracking-wider"
                                        onClick={() => console.log("Оставить заявку")}
                                        disabled={false}
                                        type="button"
                                    >Оставить заявку</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

/*
Учет - accounting
Расчет - calculation
Отчетность - reporting
Заработная плата - payroll
Кадры - hr
Госорганы - government
Консультация - consultation
Банк - bank
*/{/* <div className="row flex-wrap justify-content-evenly gap-2">
                        <h2 className="col-12 text-center">
                            Разовые услуги и наведение порядка (Списки)
                        </h2>
                        <div className="card col-10 col-md-5 shadow-lg">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="col-12 text-center h3">Наведение порядка и аудит</h3>
                                <ul className="list-group text-start w-100">
                                    <li className="list-group-item">Исправление ошибок в бухгалтерском учёте</li>
                                    <li className="list-group-item">(Если прошлый бухгалтер бросил базу или допустил критические ошибки)</li>
                                    <li className="list-group-item">от 10 000 ₽ / усл.</li>
                                </ul>
                                <ul className="list-group text-start w-100">
                                    <li className="list-group-item">Восстановление бухгалтерского учёта</li>
                                    <li className="list-group-item">Полное воссоздание учета за прошлые кварталы или годы</li>
                                    <li className="list-group-item">от 9 000 ₽ / усл.</li>
                                </ul>
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => console.log("Оставить заявку")}
                                    disabled={false}
                                    type='button'
                                    >Оставить заявку</Button>
                            </div>
                        </div>
                        <div className="card col-10 col-md-5 shadow-lg">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="col-12 text-center h3">Рутинные задачи и кадры</h3>
                                <ul className="list-group text-start col-12 w-100">
                                    <li className="list-group-item">Расчёт заработной платы</li>
                                    <li className="list-group-item">от 1 000 ₽ / усл. (За сотрудника)</li>
                                </ul>
                                <ul className="list-group text-start col-12 w-100">
                                    <li className="list-group-item">Ведение первичной документации</li>
                                    <li className="list-group-item">от 300 ₽ / усл. (Ввод актов, накладных)</li>
                                </ul>
                                <ul className="list-group text-start col-12 w-100">
                                    <li className="list-group-item">Налоговое консультирование</li>
                                    <li className="list-group-item">от 2 000 ₽ / усл. (Решение сложных вопросов)</li>
                                </ul>
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => console.log("Оставить заявку")}
                                    disabled={false}
                                    type='button'
                                    >Оставить заявку</Button>
                            </div>
                        </div>
                        <div className="card col-10 col-md-5 shadow-lg">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="col-12 text-center h3">Разовая отчетность и декларации</h3>
                                <ul className="list-group text-start col-12 w-100">
                                    <li className="list-group-item">Сдача декларации 3-НДФЛ</li>
                                    <li className="list-group-item">от 1 500 ₽ / усл. (Для физлиц и ИП)</li>
                                </ul>
                                <ul className="list-group text-start col-12 w-100">
                                    <li className="list-group-item">Заполнение КУДиР (отдельно)</li>
                                    <li className="list-group-item">от 3 000 ₽ / усл.</li>
                                </ul>
                                <ul className="list-group text-start col-12 w-100">
                                    <li className="list-group-item">Сдача разовой отчётности</li>
                                    <li className="list-group-item">от 3 000 ₽ / усл.</li>
                                </ul>
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => console.log("Оставить заявку")}
                                    disabled={false}
                                    type='button'
                                    >Оставить заявку</Button>
                            </div>
                        </div>
                    </div> */}