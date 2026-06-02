import { FormConnectsUI } from "../../components/layout";
import { useState } from "react";

export default function FormConnects(){
    const [name, setName] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [nameTouched, setNameTouched] = useState(false);
    const [telepgoneTouched, setTelephoneTouched] = useState(false);
    const [textTouched, setTextTouched] = useState(false);
    return <FormConnectsUI 
                name={name}
                telephone={telephone}
                text={text}
                setName={setName}
                setTelephone={setTelephone}
                setText={setText}
                nameValid={name.length > 2}
                telephoneValid={telephone.length > 4}
                textValid={text.length > 10}
                nameTouched={nameTouched}
                telephoneTouched={telepgoneTouched}
                textTouched={textTouched}
                setNameTouched={setNameTouched}
                setTelephoneTouched={setTelephoneTouched}
                setTextTouched={setTextTouched}
                buttonDisabled={name.length > 2 && telephone.length > 4}
                />
}