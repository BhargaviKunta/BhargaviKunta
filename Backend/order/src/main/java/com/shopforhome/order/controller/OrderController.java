package com.shopforhome.order.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopforhome.order.entity.Order;
import com.shopforhome.order.service.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderController {
	
	@Autowired OrderService os;

	@PostMapping("/insert")
	@CrossOrigin("*")
	public void insert(@RequestBody Order o) {
		
		os.save(o);
		
		
	}
	
	@GetMapping("/{id}")
	@CrossOrigin("*")
	public List<Order> getOrders(@PathVariable("id") int id){
		return os.getData(id);
	}
	
	@PostMapping("/status")
	@CrossOrigin("*")
	public String update(@RequestBody Order o){
		return os.updateSingle(o);
	}
	
	
	
}
