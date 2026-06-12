import styles from "./Advantages.module.css";
import { useNavigate, useLocation } from "react-router";
import { Image, Button } from "../../components/ui";
import { useState } from "react";
import GenericList from "../../components/layout/GenericList";
import agreement from "../../assets/icons/advantages/agreement.svg";
import intouch from "../../assets/icons/advantages/in_touch.svg";
import itsclear from "../../assets/icons/advantages/its_clear.svg";


export default function Advantages(){

    const listInitial = [
      {
        id: 0,
        title: "Работаю по договору",
        description: "В нем четко прописана моя материальная ответственность. Если по моей вине случится ошибка — я сама оплачу штраф (но такого еще не было)",
        url: agreement,
      },
      {
        id: 1,
        title: "Всегда на связи",
        description: "Вам больше не придется вылавливать главбуха, который «занят» или «болеет» в отчетный период",
        url: intouch,
      },
      {
        id: 2,
        title: "Говорю на понятном языке",
        description: "Объясню сложные требования налоговой без профессионального сленга, проводок и дебета с кредитом. Вы будете четко понимать, за что платите",
        url: itsclear
      },
    ];
    const [list, setList] = useState(listInitial);
    const navigate = useNavigate();
   
    return  <div className={styles.advantages}>
                <div className="container">
                        <div className="text-center mb-3">
                            <span className="text-primary fw-bold text-uppercase small d-block mb-2" style={{ letterSpacing: '0.075rem' }}>
                                Почему выбирают меня
                            </span>
                            <h2 className="display-5 text-dark mb-3">
                                Преимущества работы <span className="text-primary">(со мной)</span>
                            </h2>
                            <p className="text-muted col-md-8 col-lg-6 mx-auto small">
                                Профессиональный подход к вашим финансам. Узнайте, какие ценности и стандарты качества я гарантирую каждому клиенту в повседневной работе.
                            </p>
                        </div>
                        <GenericList
                            classNameList="list-unstyled row g-4 g-xl-5 justify-content-center mb-5 p-0"
                            items={listInitial}
                            renderFn={(item) => <li className="col-12 col-md-6 col-lg-4 d-flex" key={item.id}>
                                                    <div className="card h-100 shadow border-0 rounded-3">
                                                        <div className="card-body d-flex flex-column p-4 text-center">
                                                            
                                                            {/* Контейнер для иконки с легким круглым фоном */}
                                                            <div className="d-flex align-items-center justify-content-center mb-3 mx-auto rounded-circle bg-light" style={{ width: '80px', height: '80px' }}>
                                                                <Image
                                                                    alt="иконка"
                                                                    objectFit="contain"
                                                                    height="45px"
                                                                    width="45px"
                                                                    url={item.url}
                                                                />
                                                            </div>
                                                            <h3 className="card-title h5 mb-3 fw-semibold text-primary">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-muted small mb-0 flex-grow-1">
                                                                {item.description}
                                                            </p>
                                                            
                                                        </div>
                                                    </div>
                                                </li>}/>
                                                <Button
                                                    onClick={() => navigate('/form-connects')}
                                                    disabled={false}
                                                    type="button"
                                                    children="Оставить заявку"
                                                    className="btn btn-primary btn-lg w-50 rounded-3 py-2.5 fw-bold shadow-sm mt-auto"
                                                />
                </div>
            </div>
}