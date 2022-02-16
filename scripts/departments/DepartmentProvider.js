let departments = []

export const getDepartments = () => {
    return fetch("http://localhost:8088/departments")
        .then(res => res.json())
        .then((departmentData) => {
            departments = departmentData
        })
}

export const useDepartments = () => {
    return departments.slice()
}

