'use strict';

export default {
    validateName,
    create

};

function validateName(name) {
    if (name === '') {
        throw TypeError("Name must not be blank")
    }
}

function create(name) {
    return {
        id: cuid(),
        name: name,
        checked: false,

    }
}