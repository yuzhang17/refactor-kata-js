class Order {
    constructor(data) {
        this._number = data.number;
        this._customer = registerCustomer(data.customer)
// load other data
    }

    get customer() {
        return this._customer;
    }
}

class Customer {
    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }
}


let _repositoryData;
export function initialize() {
    _repositoryData = {};
    _repositoryData.customers = new Map();
}
export function registerCustomer(id) {
    if (! _repositoryData.customers.has(id))
        _repositoryData.customers.set(id, new Customer(id));
    return findCustomer(id);
}
export function findCustomer(id) {
    return _repositoryData.customers.get(id);
}