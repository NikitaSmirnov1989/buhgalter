import styles from "./Toast.module.css";
import { ToastProps } from "./type";
import { Button } from "../../ui";

export default function Toast({onClose}: ToastProps){
    const style = {
        "zIndex": 1111};
    
    return   <div className="toast-container position-fixed bottom-0 mx-auto p-3 w-100">
                <div 
                    className="toast show bg-dark text-white mx-auto" 
                    role="alert" 
                    aria-live="assertive" 
                    aria-atomic="true"
                    >
                    <div className="toast-body d-flex align-items-center justify-content-between p-3">
                        <div>
                            <p className="mb-0 small me-3">
                                🍪 Нажимая «Принять все», вы соглашаетесь с использованием cookie-файлов
                            </p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <Button 
                                type="button" 
                                className="btn btn-primary btn-sm text-nowrap" 
                                onClick={()=> onClose()}
                                disabled={false}
                                >
                            Принять всё
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
}