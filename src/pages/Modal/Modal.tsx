import styles from "./Modal.module.css";
import { useEffect } from "react";
import { ModalProps } from "./types";
import { Button, Image } from "../../components/ui";
import close from "../../assets/icons/icons/close.svg"

export function Modal({title, children, onClose}: ModalProps){

    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            e.key === 'Escape' && onClose();
        }
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        }
    }, [onClose]);

    return  <div className={styles.modal}>
               
                   <div className={`modal-dialog ${styles.modal}`} role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
               
                <div className={styles.overlay} onClick={() => onClose()}></div>
            </div>
}
