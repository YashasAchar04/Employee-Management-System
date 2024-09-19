package com.yashas.Backend.service;

import com.yashas.Backend.model.Employee;
import com.yashas.Backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {



    @Autowired
    private EmployeeRepository repo;

    public Employee addEmployee(Employee e){
         repo.save(e);
         return e;
    }
    public String deleteEmployee(Long id){
        repo.deleteById(id);
        return "Successfully deleted the employee "+id;
    }

    public List<Employee> getAllEmployee() {
        return repo.findAll();
    }

    public Employee getEmployeeById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Employee updateEmployee(Long id,Employee updatedEmployee) {
        Employee currentEmployee = repo.findById(id).orElse(null);
        assert currentEmployee != null;
        currentEmployee.setFirstName(updatedEmployee.getFirstName());
        currentEmployee.setLastName(updatedEmployee.getLastName());
        currentEmployee.setEmail(updatedEmployee.getEmail());
        repo.save(currentEmployee);
        return currentEmployee;
    }
}
