import axios from "axios";

const BASE_URL = "http://localhost:8080/employees";
export const listEmployees = () =>{
    return axios.get(BASE_URL);
}
export const createEmployee = (employee) =>{
    return axios.post("http://localhost:8080/employee",employee)
}
export const deleteEmployee = (id) =>{
    return axios.delete(`http://localhost:8080/employee/${id}`)
}
export const getEmployee = (employeeId) =>{
    return axios.get(`http://localhost:8080/employee/${employeeId}`)
}
export const updateEmployee = (id,employee) =>{
    return axios.put(`http://localhost:8080/employee/${id}`,employee)
}