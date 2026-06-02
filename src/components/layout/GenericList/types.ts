export type GenericListType<T> = {
    items: T[];
    renderFn: (item: T) => React.ReactNode;
    classNameList: string; 
}
