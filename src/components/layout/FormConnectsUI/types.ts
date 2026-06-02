export type FormConnectionsUIProps = {
    name: string;
    telephone: string;
    text: string;

    setName: React.Dispatch<React.SetStateAction<string>>;
    setTelephone: React.Dispatch<React.SetStateAction<string>>;
    setText: React.Dispatch<React.SetStateAction<string>>;

    nameValid: boolean;
    telephoneValid: boolean;
    textValid: boolean;

    nameTouched: boolean;
    telephoneTouched: boolean;
    textTouched: boolean;

    setNameTouched: React.Dispatch<React.SetStateAction<boolean>>;
    setTelephoneTouched: React.Dispatch<React.SetStateAction<boolean>>;
    setTextTouched: React.Dispatch<React.SetStateAction<boolean>>;

    buttonDisabled: boolean;
}