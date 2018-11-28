'use strict';

const setValue = (fn) => ([a, b]) => fn(a, b);

module.exports = (fn, obj) => {
    Object
        .entries(obj)
        .forEach(setValue(fn));
};

