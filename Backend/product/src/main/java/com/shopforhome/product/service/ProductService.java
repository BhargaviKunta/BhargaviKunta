package com.shopforhome.product.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopforhome.product.dto.ProductDto;
import com.shopforhome.product.entity.Product;
import com.shopforhome.product.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository pr;
	
//	read user
	public Product getProduct(int id) {
		return pr.findById(id).get();
	}
//read all user
	public List<Product> getAllProducts(){
		
		return (List<Product>)pr.findAll();
	}
//	save user
	public void saveProduct(Product p) {
		
		pr.save(p);
		System.out.println("inserted");
	}
//	update user
	public Product updateProduct(Product u,Integer id) {
		Product prod= pr.findById(id).get();

		prod.setCatagoryid(u.getCatagoryid());
		prod.setDescription(u.getDescription());
		prod.setDiscountid(u.getDiscountid());
		prod.setImgurl(u.getImgurl());
		prod.setName(u.getName());
		prod.setPrice(u.getPrice());
		prod.setQuantity(u.getQuantity());

    
    return pr.save(prod);
		
	}
//	delete single user 
	public void deleteById(Integer id) {
		
		pr.deleteById(id);
		

	}
	
	//search
	public List<Product> SearchByName(String s) {
		return pr.findByNameLike("%"+s+"%");
	}

	
	

}
