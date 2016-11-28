package com.koderunner.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.koderunner.dao.SDUserDAO;

@RestController
public class SDRestController {

	@Autowired
    private SDUserDAO userDAO;
	
	@RequestMapping(path = "/rest/customer/{id}")
	@ResponseBody
	public ResponseEntity getUserDetails(@PathVariable("id")String id) {
		
		return new ResponseEntity("Shailendra", HttpStatus.OK);
	}
	
}
