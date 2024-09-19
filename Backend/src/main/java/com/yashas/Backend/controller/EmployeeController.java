package com.yashas.Backend.controller;

import com.yashas.Backend.model.Employee;
import com.yashas.Backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee){
        return service.addEmployee(employee);
    }
    @DeleteMapping("/employee/{id}")
    public String deleteEmployee(@PathVariable Long id){
        return service.deleteEmployee(id);
    }
    @GetMapping("employees")
    public List<Employee> getAllEmployee(){
        return service.getAllEmployee();
    }
    @GetMapping("employee/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return service.getEmployeeById(id);
    }
    @PutMapping("employee/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        return service.updateEmployee(id,employee);
    }
}
