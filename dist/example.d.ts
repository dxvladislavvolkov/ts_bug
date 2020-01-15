declare type AccessibleOptions = Pick<any, "onClick" | "visible" | "width">;
interface Button extends AccessibleOptions {
    readonly instance?: any;
}
declare const MyButton: import("vue/types/vue").ExtendedVue<vueType.default, unknown, unknown, {
    instance: Button;
}, {
    onClick: Function;
    visible: boolean;
    width: string | number | Function;
}>;
export default MyButton;
export { MyButton };
