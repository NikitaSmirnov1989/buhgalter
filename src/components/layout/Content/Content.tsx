import styles from "./Content.module.css";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import {
     About,
     Contacts,
     NotFound,
     Services,
     Important,
     Advantages,
     Modal,
     FormConnects
} from "../../../pages";

export default function Content(){

     const navigate = useNavigate();
     const location = useLocation();
     const prevLocation = location.state?.prevLocation;

    return  <div className={styles.content}>
               <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/important" element={<Important/>}/>
                    <Route path="/advantages" element={<Advantages/>}/>
                    <Route path="/form-connects" element={<FormConnects/>}/>
                    <Route path="*" element={<NotFound/>}/>
               </Routes>
               {/* {
                    prevLocation &&
                    <Routes>
                        <Route 
                              path="/modal" 
                              element={<Modal title="Модальное окно" children="Модальное окно" onClose={() => navigate(-1)}/>}
                         />
                    </Routes>
               } */}
            </div>
}