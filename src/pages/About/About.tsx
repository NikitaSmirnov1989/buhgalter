import styles from "./About.module.css";
import { Image } from "../../components/ui";
import vik4 from "../../../src/assets/images/vik4.png";


export default function About(){
    return  <div className={styles.about}>
                <div className="container">
                    <div className="row g-4 g-lg-5 align-items-center justify-content-between mb-5">
                        {/* Текстовое приветствие */}
                        <div className="col-12 col-md-7 text-start">
                            <span className="text-primary fw-bold text-uppercase small d-block mb-2" style={{ letterSpacing: '0.075rem' }}>
                                Опыт более 20 лет
                            </span>
                            <h1 className="display-5 fw-extrabold text-dark mb-4">
                                Профессиональные бухгалтерские услуги для всех <span className="text-primary">видов бизнеса</span>
                            </h1>
                            
                            <h3 className="h3 fw-semibold text-secondary mb-3">
                                Приветствую! Меня зовут Виктория.
                            </h3>
                            
                            <p className="text-muted lead lh-base mb-0">
                                Я — дипломированный практикующий бухгалтер со стажем работы более 20 лет. 
                                За мою карьеру я прошла путь от помощника бухгалтера до главного бухгалтера крупной торговой компании. 
                                Сегодня я помогаю предпринимателям выстраивать понятную и безопасную бухгалтерию на удаленной основе.
                            </p>
                        </div>
                        
                        {/* Фотография Виктории */}
                        <div className="col-12 col-md-5 col-lg-4 text-center">
                            <div className="position-relative d-inline-block">
                                <div className="rounded-4 border-0 img-fluid overflow-hidden">
                                    <Image
                                        url={vik4}
                                        alt="Славороссова Виктория"
                                        width="100%"
                                        height="auto"
                                        objectFit="cover"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 pt-4">
                        <h2 className="h3 fw-bold text-dark mb-4 text-start">
                            Чем конкретно я могу быть полезна вашему бизнесу:
                        </h2>
                        <div className="row g-4">
                            {/* Компетенция 1 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Постановка и ведение учета с нуля</h4>
                                        <p className="text-muted small mb-0">Помогу выбрать выгодную систему налогообложения (УСН, Патент, ОСНО) еще на этапе регистрации, чтобы вы не переплачивали лишнего с первого дня.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 2 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Расчет налогов и сдача отчетности</h4>
                                        <p className="text-muted small mb-0">Вовремя сформирую декларации, рассчитаю авансовые платежи и страховые взносы. Заполню КУДиР. Все отчеты уйдут в ИФНС и СФР точно в срок.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 3 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Бухгалтерский учет ВЭД (Импорт и Экспорт)</h4>
                                        <p className="text-muted small mb-0">Полное сопровождение сделок с иностранными контрагентами, включая страны ЕАЭС (Беларусь, Казахстан и др.) и дальнее зарубежье.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 4 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Валютный контроль без стресса</h4>
                                        <p className="text-muted small mb-0">Поставлю контракт на учет в банк, вовремя подготовлю СВО (справки о валютных операциях) и подтверждающие документы. Никаких штрафов.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 5 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Экспорт и подтверждение 0% НДС</h4>
                                        <p className="text-muted small mb-0">Соберу полный пакет документов для налоговой, чтобы подтвердить нулевую ставку НДС в установленный законом срок (180 дней) и вернуть налог из бюджета.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 6 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Учет курсовых разниц</h4>
                                        <p className="text-muted small mb-0">Правильно отражу в 1С операции в иностранной валюте, переоценку валютных остатков и операции по покупке/продаже валюты.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 7 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Кадровый учет и зарплата</h4>
                                        <p className="text-muted small mb-0">Оформлю сотрудников по ТК РФ, рассчитаю отпускные, больничные, декретные и налоги с фонда оплаты труда (ФОТ).</p>
                                    </div>
                                </div>
                            </div>

                            {/* Компетенция 8 */}
                            <div className="col-12 col-md-6">
                                <div className="card h-100 border-0 shadow-sm rounded-3 bg-light p-3">
                                    <div className="card-body">
                                        <h4 className="h5 fw-bold text-primary mb-2">Взаимодействие с налоговой (ИФНС)</h4>
                                        <p className="text-muted small mb-0">Возьму на себя ответы на требования о предоставлении документов, разблокировку расчетных счетов и регулярное прохождение сверок.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}