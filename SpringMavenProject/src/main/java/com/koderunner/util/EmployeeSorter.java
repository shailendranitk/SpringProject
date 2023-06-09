package com.koderunner.util;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.stream.Collectors;

import com.koderunner.vo.EmployeeVO;

public class EmployeeSorter {

	public static void main(String[] args) {

		EmployeeVO emp1 = new EmployeeVO("Akshay", "IT", "abcd1", 30000);
		EmployeeVO emp2 = new EmployeeVO("Chandu", "HR", "abcd2", 40000);
		EmployeeVO emp3 = new EmployeeVO("Palak", "Accounts", "abcd3", 80000);
		EmployeeVO emp4 = new EmployeeVO("Alex", "IT", "abcd1", 35000);
		EmployeeVO emp5 = new EmployeeVO("Hari", "HR", "abcd2", 68000);
		EmployeeVO emp6 = new EmployeeVO("Rajesh", "Accounts", "abcd3", 55000);

		ArrayList<EmployeeVO> empList = new ArrayList<EmployeeVO>();

		empList.add(emp2);
		empList.add(emp3);
		empList.add(emp1);
		empList.add(emp4);
		empList.add(emp5);
		empList.add(emp6);

		System.out.println(empList);

		ArrayList<EmployeeVO> sortedList = (ArrayList<EmployeeVO>) empList.stream().sorted()
				.collect(Collectors.toList());

		System.out.println(sortedList);

		System.out.println(
				empList.stream().sorted(Comparator.comparing(EmployeeVO::getDept)).collect(Collectors.toList()));

		System.out.println(
				empList.stream().sorted(Comparator.comparing(EmployeeVO::getName)).collect(Collectors.toList()));

		System.out.println(
				empList.stream().filter(e -> e.getDept().equalsIgnoreCase("HR")).mapToDouble(e -> e.getSalary()).sum());

		System.out.println(empList.stream().filter(e -> e.getSalary() > 50000).collect(Collectors.toList()));

	}

}
