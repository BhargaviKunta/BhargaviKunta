package com.shopforhome.discount.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.shopforhome.discount.entity.Discount;
import com.shopforhome.discount.service.DiscountService;

@RestController
@RequestMapping("/coupon")
@CrossOrigin(origins="http://localhost:4200")
public class DiscountController {
	
	@Autowired DiscountService ds;
	
//	insert
	@PostMapping("/insert")
	@CrossOrigin(origins="http://localhost:4200")
	public void insert(@RequestBody Discount e) {
		ds.save(e);
	}
//	read single data
	@GetMapping("/read/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public Discount readById(@PathVariable("id") Integer id) {
		return ds.fetchById(id);
		}
//	read all data
	@GetMapping("/all")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Discount> readAll() {return ds.fetchAll();}
//	update data
	@PutMapping("/update/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public String update(@RequestBody Discount d,@PathVariable("id") Integer id) {		
		return ds.update(d, id);
	}
//	delete single data
	@DeleteMapping("/delete/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public String deleteById(@PathVariable("id") Integer id) {
		return ds.deleteById(id);
	}
	
	//get by name
	@PostMapping("/code")
	@CrossOrigin(origins="http://localhost:4200")
	public Discount discount(@RequestBody Discount code) {
		
		return ds.getValue(code.getCode());
	}

}
