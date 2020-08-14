import item from './item.js';
let items = [];
let hideCheckedItems = false;






function findById(id) {
    return store.items.find(el => el.id === id)
}

function addItem(name){
    try {
        item.validateName(name);
        items.push(item.create(name));
        render();
    } 
    catch (error) {
        console.log(`Cannot update name: ${error.message}`)
    }
}

function findAndToggleChecked(id) {
    console.log(this.findById(id));
    console.log(this.findById(id).checked = !this.findById(id).checked);
}

function findAndUpdateName(id, newName){
    try {
        item.validateName(newName);
        findById(id);

    }
    catch {
        console.log(`Cannot update name: ${error.message}`)

    }
}

function findAndDelete(id) {
    let target = this.items.filter(function (i) {
        if (i.id !== id) {
            return id;
        }
    });
    this.items = target;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,

};