"use strict";
var _a, _b;
module.exports = (_b = class MySet {
        constructor(values) {
            this.data = [];
            this[_a] = '^_^';
            if (values) {
                values.forEach((value) => {
                    this.add(value);
                });
            }
        }
        get size() {
            return this.data.length;
        }
        add(value) {
            if (!this.has(value)) {
                this.data.push(value);
            }
            return this;
        }
        clear() {
            this.data = [];
        }
        delete(value) {
            const size = this.size;
            this.data = this.data.filter((item) => item !== value);
            return this.size !== size;
        }
        forEach(callbackfn, thisArg) {
            for (let i = 0; i < this.size; i++) {
                callbackfn.apply(thisArg, [this.data[i], this.data[i], this]);
            }
        }
        has(value) {
            return this.data.includes(value);
        }
        *entries() {
            for (let i = 0; i < this.size; i++) {
                yield [this.data[i], this.data[i]];
            }
        }
        keys() {
            return this.values();
        }
        *values() {
            for (let i = 0; i < this.size; i++) {
                yield this.data[i];
            }
        }
        [Symbol.iterator]() {
            return this.values();
        }
    },
    _a = Symbol.toStringTag,
    _b);
