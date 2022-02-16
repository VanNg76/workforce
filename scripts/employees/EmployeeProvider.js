let employees = []

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then((employeeData) => {
            employees = employeeData
        })
}

export const useEmployees = () => {
    return employees.slice()
}

