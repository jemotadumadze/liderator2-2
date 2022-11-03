import {LitElement, html, css} from "lit-element";
class BaseElement extends LitElement {

    constructor() {
        super();
        const properties = this.constructor.properties;
        for (let key in properties) {
            this._setPropertyValue(key, properties);
        }
    }

    update(props) {
        const properties = this.constructor.properties;
        props.forEach((oldValue, name) => {
            if (this[properties[name].observer]) {
                this[properties[name].observer].apply(this, [this[name], oldValue])
            }
        });
        super.update(props);
    }

    _setPropertyValue(key, properties) {
        let value;
        if (!properties[key].hasOwnProperty('value')) {
            if (properties[key].type) {
                if (properties[key].type === Number) {
                    value = null;
                }
                if (properties[key].type === String) {
                    value = '';
                }
                if (properties[key].type === Array) {
                    value = [];
                }
                if (properties[key].type === Object) {
                    value = {};
                }

            }
        } else {
            value = properties[key].value;
        }
        this[key] = value;
    }


    sendCustomEvent(name, detail = {}) {
        this.dispatchEvent(
            new CustomEvent(name, {
                    detail,
                    bubbles: true,
                    composed: true,
                },
            ))
    }
}

export {BaseElement, html, css}