import { FormConnectionsUIProps } from "./types";
import { Button } from "../../ui";
import {PatternFormat} from "react-number-format";

export default function FormConnectsUI(props: FormConnectionsUIProps){
    const {
            name, 
            telephone, 
            text, 
            setName, 
            setTelephone, 
            setText, 
            nameValid, 
            telephoneValid, 
            textValid, 
            nameTouched,
            telephoneTouched,
            textTouched,
            setNameTouched,
            setTelephoneTouched,
            setTextTouched,
            buttonDisabled
        } = props;
    return  <div className="container py-5">
    <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
            {/* Карточка формы */}
            <div className="card border-0 shadow-sm rounded-4 p-4 p-sm-5 bg-white">
                
                {/* Заголовок ровно в вашем стиле, но по центру карточки */}
                <h4 className="display-5 text-dark mb-3">
                    Заполните данные и я свяжусь с Вами!
                </h4>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4 text-start">
                        <label htmlFor="validationServer01" className="form-label small fw-semibold text-secondary mb-2">
                            Введите имя
                        </label>
                        <input 
                            placeholder="Петров Сергей Владимирович"
                            type="text"
                            className={`form-control form-control-lg fs-6 rounded-3 px-3 py-2.5 shadow-none ${
                                nameTouched ? (nameValid ? 'is-valid' : 'is-invalid') : 'bg-light border-0'
                            }`} 
                            id="validationServer01"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameTouched(true);
                            }}
                        />
                        {nameTouched && (
                            nameValid 
                                ? <div className="valid-feedback ps-1">Отлично</div> 
                                : <div className="invalid-feedback ps-1">Короткое имя</div>
                        )}
                    </div>

                    <div className="mb-4 text-start">
                        <label htmlFor="validationServer02" className="form-label small fw-semibold text-secondary mb-2">
                            Введите номер телефона
                        </label>
                        <PatternFormat
                            format="+7 (###) ### ## ##"
                            placeholder="+7 (910) 123 45 67"
                            className={`form-control form-control-lg fs-6 rounded-3 px-3 py-2.5 shadow-none ${
                                telephoneTouched ? (telephoneValid ? 'is-valid' : 'is-invalid') : 'bg-light border-0'
                            }`}
                            id="validationServer02"
                            value={telephone}
                            onValueChange={(values) => {
                                const {value} = values;
                                setTelephone(value);
                                setTelephoneTouched(true);
                            }}
                            />

                        {telephoneTouched && (
                            telephoneValid 
                                ? <div className="valid-feedback ps-1">Отлично</div> 
                                : <div className="invalid-feedback ps-1">Некорректный номер</div>
                        )}
                    </div>

                    <div className="d-grid mt-4">
                        <Button 
                            className={`btn btn-lg py-3 fw-semibold rounded-3 shadow-sm transition-all ${!buttonDisabled ? "btn-secondary opacity-50" : "btn-primary"}`} 
                            type="submit" 
                            disabled={!buttonDisabled}
                            onClick={() => console.log(/*Кнопка временно не работает*/)}
                        >
                            Отправить данные
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
}