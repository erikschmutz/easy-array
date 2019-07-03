/**
 * @param {*} tag name of the item in which you want
 *                to remove.
 */
function remove(tag) {
    this.splice(this.indexOf(tag), 1);
    return this;
}

/**
 * @param {*} Make sure that each item in the list
 *            only appears once.
 */
function makeUnique() {
    const newList = {};
    for (let i = 0; i < this.length; i++) {
        newList[this[i]] = ""
    }
    this.length = 0;
    let i = 0;
    for (let key in newList) {
        this[i] = (key)
        i++;
    }
    return this;
}


Object.defineProperty(Array.prototype, 'remove', {
    enumerable: false,
    value: remove
});
Object.defineProperty(Array.prototype, 'makeUnique', {
    enumerable: false,
    value: makeUnique
});

