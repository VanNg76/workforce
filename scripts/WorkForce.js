import { useEmployees, getEmployees } from "./employees/EmployeeProvider.js"
import { useComputers, getComputers } from "./computers/ComputerProvider.js"
import { useDepartments, getDepartments } from "./departments/DepartmentProvider.js"
import { useLocations, getLocations } from "./locations/LocationProvider.js"
import { getCustomers, useCustomers } from "./customers/CustomerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "./employeeCustomers/EmployeeCustomerProvider.js"

const targetContent = document.querySelector(".container")

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
            const employees = useEmployees()
            const computers = useComputers()
            const departments = useDepartments()
            const locations = useLocations()
            const customers = useCustomers()
            const employeeCustomers = useEmployeeCustomers()

            const foundComputer = (id) => { 
                return computers.find(computer => computer.id === id)
            }
            const findDepartment = (id) => {
                return departments.find(department => department.id === id)
            }
            const findLocation = (id) => {
                return locations.find(location => location.id === id)
            }
            const findEmployeeCustomers = (employeeId) => {
                return employeeCustomers.filter(employeeCustomer => employeeCustomer.employeeId === employeeId)
            }
            const findCustomer = (id) => {
                return customers.find(customer => customer.id === id)
            }

            targetContent.innerHTML = `
            ${employees.map(employee => {
                const foundEmployeeComputer = foundComputer(employee.computerId)
                const foundDepartment = findDepartment(employee.departmentId)
                const foundLocation = findLocation(employee.locationId)
                const foundEmployeeCustomers = findEmployeeCustomers(employee.id)

                return `<div class="employee">
                            <header class="employee__name">
                                <h1>${employee.firstName} ${employee.lastName}</h1>
                            </header>
                            <section class="employee__computer">
                                Currently using a ${foundEmployeeComputer.year} ${foundEmployeeComputer.model}
                            </section>
                            <section class="employee__department">
                                Works in the ${foundDepartment.name}
                            </section>
                            <section class="employee__location">
                                Works at the ${foundLocation.name}
                            </section>
                            <section class="employee__customers">
                                Has worked for the following customers.
                                <ul>
                                    ${
                                        foundEmployeeCustomers.map(foundEmployeeCustomer => {
                                            const foundCustomer = findCustomer(foundEmployeeCustomer.customerId)
                                            return `<li>${foundCustomer.name}</li>`
                                        }).join("")
                                    }
                                </ul>
                            </section>
                        </div>
                        `
            }).join("")
            }
            `
        })
}

