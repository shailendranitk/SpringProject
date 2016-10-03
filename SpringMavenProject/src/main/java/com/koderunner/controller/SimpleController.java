package com.koderunner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SimpleController {
	public static void main(String[] args) {
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public String sayHello(ModelMap model){
		
		model.addAttribute("greeting", "Hello Welcome to code runner");
		return "welcome";
		
	}
	
}
