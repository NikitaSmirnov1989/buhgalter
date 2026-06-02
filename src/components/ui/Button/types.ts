export type ButtonProps = {
    onClick: () => void; /*Обработчик события кнопки*/
    disabled: boolean; /*Активна или неактивна кнопка во время*/
    type: 'submit' | 'reset' | 'button' /*Значение кнопки*/
    className: string /*Класс*/
    children: React.ReactNode | string; /*Дочерний элемент*/
}