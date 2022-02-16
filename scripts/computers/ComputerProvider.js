let computers = []

export const getComputers = () => {
    return fetch("http://localhost:8088/computers")
        .then(res => res.json())
        .then((computerData) => {
            computers = computerData
        })
}

export const useComputers = () => {
    return computers.slice()
}

