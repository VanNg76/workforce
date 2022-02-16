let employeeCustomers = []

export const getEmployeeCustomers = () => {
    return fetch("http://localhost:8088/employeeCustomers")
        .then(res => res.json())
        .then((employeeCustomerData) => {
            employeeCustomers = employeeCustomerData
        })
}

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}

