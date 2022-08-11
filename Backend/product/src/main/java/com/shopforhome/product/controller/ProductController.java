package com.shopforhome.product.controller;

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

import com.shopforhome.product.dto.ProductDto;
import com.shopforhome.product.entity.Product;
import com.shopforhome.product.service.ProductService;



@RestController

@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	@Autowired
	ProductService ps;
	
	//	Read single data
	@RequestMapping("/read/{Productid}")
	public Product getProductById(@PathVariable("Productid") int Productid) {
		
		return ps.getProduct(Productid);
	}
	
	// Read All
		@GetMapping("/all")
		@CrossOrigin(origins = "http://localhost:4200")
		public List<Product> getProducts(){
			
			return ps.getAllProducts();
		}
	 
	
	// Save operation
    @PostMapping("/insert")
    @CrossOrigin(origins = "http://localhost:4200")
    public void saveProduct(@RequestBody Product u)
    {
        ps.saveProduct(u);
    }
    
    // Update operation
    @PutMapping("/update/{id}")
    public void updateProduct(@RequestBody Product u,
                     @PathVariable("id") Integer uid)
    {
        ps.updateProduct(u, uid);
    }
 
    // Delete operation
    @DeleteMapping("/delete/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public String deleteDepartmentById(@PathVariable("id")
                                       Integer delid)
    {
        ps.deleteById(delid);
        return "deleted";
        
    }
    
    
    //search
    @GetMapping("/search/{q}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Product> search(@PathVariable("q") String s) {
    	return ps.SearchByName(s);
    }
    
    
 

}
