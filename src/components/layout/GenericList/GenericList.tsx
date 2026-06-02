import { GenericListType } from "./types";

export default function GenericList<T extends {id: string | number}>(props: GenericListType<T>) {
    const {items, renderFn, classNameList} = props;
    return  <ul className={props.classNameList}>
                {items.map((el) => {
                    return renderFn(el);
                })}
            </ul>
}