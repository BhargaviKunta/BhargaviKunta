package com.shopforhome.discount.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.shopforhome.discount.entity.Discount;
import com.shopforhome.discount.repository.DiscountRepository;

@Service
public class DiscountService {

	@Autowired DiscountRepository dr;
	
//	insert
	public void save(Discount e) {
		dr.save(e);
	}
//	read by id
	public Discount fetchById(Integer id) {
			return dr.findById(id).get();
	}
//	read all
	public List<Discount> fetchAll(){
		
		return (List<Discount>)dr.findAll();
	}
//	update	
	public String update(Discount u,Integer id) {
		Discount ds=dr.findById(id).get();
		ds.setName(u.getName());
		ds.setDescription(u.getDescription());
		ds.setPercentage(u.getPercentage());
		ds.setType(u.getType());
		ds.setStatus(u.getStatus());
		ds.setExpiry(u.getExpiry());
		ds.setCode(u.getCode());
		dr.save(ds);
		return "updated";
	}
//	delete by id
	public String deleteById(Integer id) {
		
		dr.deleteById(id);
		return "Deleted";

	}
	
	public Discount getValue(String code) {
		return dr.findByCode(code);
		
	}
	
	
}
