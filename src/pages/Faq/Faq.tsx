import styles from "./Faq.module.css";
import { Button, Image } from "../../components/ui";
import { useAppSelector, useAppDispatch } from "../../features/store";
import { changeShow } from "../../features/faq/faqSlice";
import GenericList from "../../components/layout/GenericList";
import open from "../../../src/assets/icons/important/open.svg";
import close from "../../../src/assets/icons/important/close.svg";


export default function Faq(){
    const {faq} = useAppSelector(data => data);
    const dispatch = useAppDispatch();
    return  <div className={styles.contacts}>
                <div className="container">
                    <div className="row">
                        <div className="row mb-5">
                            <h2 className="col-12 h2 display-5 text-dark mb-4">Как связаться со мной?</h2>
                        </div>
                        <div className="col-12 col-md-10 col-lg-8 mx-auto text-start">
                            <GenericList
                                classNameList="accordion accordion-flush shadow-sm rounded border"
                                items={faq}
                                renderFn={(item) => {
                                    return (
                                        <div className="accordion-item border-bottom">
                                            {/* Шапка вопроса */}
                                            <h3 className="accordion-header">
                                                <button
                                                    onClick={() => dispatch(changeShow(item.id))}
                                                    disabled={false}
                                                    type="button"
                                                    className={`accordion-button w-100 d-flex align-items-center justify-content-between text-start border-0 bg-transparent py-4 px-4 fs-5 fw-medium text-dark shadow-none ${!item.show ? 'collapsed' : ''}`}
                                                    style={{ transition: 'all 0.2s ease-in-out' }}
                                                >
                                                    <span>{item.title}</span>
                                                    
                                                    {/* Иконка-стрелка, которая плавно вращается при открытии */}
                                                    <div 
                                                        className="ms-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                                        style={{ 
                                                            transform: item.show ? 'rotate(180deg)' : 'rotate(0deg)', 
                                                            transition: 'transform 0.3s ease' 
                                                        }}
                                                    >
                                                    </div>
                                                </button>
                                            </h3>

                                            {/* Блок ответа (условный рендеринг сохранен) */}
                                            {item.show && (
                                                <div className="accordion-collapse">
                                                    <div className="accordion-body px-4 pb-4 pt-0 text-muted lh-base fs-6">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
}
