package com.koderunner;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
public class EmployeeControler {

	@RequestMapping("/test")
	String testController() {
		return "Message from Controller";
	}
	
}
