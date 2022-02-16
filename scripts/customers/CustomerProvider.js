let customers = []

export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then((customerData) => {
            customers = customerData
        })
}

export const useCustomers = () => {
    return customers.slice()
}

