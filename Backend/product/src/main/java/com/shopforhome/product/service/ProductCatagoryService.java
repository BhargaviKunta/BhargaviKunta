package com.shopforhome.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.shopforhome.product.entity.ProductCatagory;
import com.shopforhome.product.repository.ProductCatagoryRepository;

@Service
public class ProductCatagoryService {

	@Autowired
	ProductCatagoryRepository pcr;
	
//	read category
	public ProductCatagory getOne(int id) {
		return pcr.findById(id).get();
	}
//read all category
	public List<ProductCatagory> getAll(){
		
		return (List<ProductCatagory>)pcr.findAll();
	}
//	save category
	public void save(ProductCatagory p) {
		
		pcr.save(p);
		System.out.println("inserted");
	}
//	update Category
	public ProductCatagory update(ProductCatagory u,Integer id) {
		ProductCatagory prod= pcr.findById(id).get();

	
		prod.setDescription(u.getDescription());
		prod.setName(u.getName());
		

    
    return pcr.save(prod);
		
	}
//	delete single category 
	public void deleteById(Integer id) {
		
		pcr.deleteById(id);
		
	}
	
}
