package com.shopforhome.order.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopforhome.order.entity.Order;
import com.shopforhome.order.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired OrderRepository or;

	public String save(Order o) {
		or.save(o);
		return "order taken";
		
	}

	public List<Order> getData(int id) {
		
		return or.findByUseridAndStatus(id,"process");
	}

	public String updateSingle(Order o) {
		List<Order> u=or.findByUseridAndStatus(o.getId(),"process");
		if(o.getStatus().equals("confirm")) {
			for(Order s:u) {
				s.setStatus("confirm");
			
				or.save(s);
			}
			
		}else if(o.getStatus().equals("cancel")) {
			for(Order s:u) {
				s.setStatus("cancel");
			
				or.save(s);
			}
		}
		return null;
	}
	
	

}
