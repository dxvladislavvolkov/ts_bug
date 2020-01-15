import * as vueType from 'vue';

const Vue = vueType.default || vueType;

type AccessibleOptions = Pick<any,
  "onClick" |
  "visible" |
  "width"
>;

interface Button extends AccessibleOptions {
  readonly instance?: any;
}
const MyButton = Vue.extend({
  props: {
    onClick: Function,
    visible: Boolean,
    width: [Function, Number, String]
  },
  computed: {
    instance(): Button {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_hasTranscludedContent = true;
  }
});

export default MyButton;
export {
    MyButton
};
