"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vueType = require("vue");
var Vue = vueType.default || vueType;
var MyButton = Vue.extend({
    props: {
        onClick: Function,
        visible: Boolean,
        width: [Function, Number, String]
    },
    computed: {
        instance: function () {
            return this.$_instance;
        }
    },
    beforeCreate: function () {
        this.$_hasTranscludedContent = true;
    }
});
exports.MyButton = MyButton;
exports.default = MyButton;
