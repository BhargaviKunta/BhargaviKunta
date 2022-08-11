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
import com.shopforhome.product.entity.ProductCatagory;
import com.shopforhome.product.service.ProductCatagoryService;


@RestController

@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductCatagoryController {
	
	@Autowired
	ProductCatagoryService pcs;
	
	//	Read single data
	@RequestMapping("/read/{id}")
	public ProductCatagory getOne(@PathVariable("id") int id) {
		
		return pcs.getOne(id);
	}
	
	// Read All
		@GetMapping("/all")
		@CrossOrigin(origins = "http://localhost:4200")
		public List<ProductCatagory> getAll(){
			
			return pcs.getAll();
		}
	 
	
	// Save operation
    @PostMapping("/insert")
    @CrossOrigin(origins = "http://localhost:4200")
    public void save(@RequestBody ProductCatagory u)
    {
        pcs.save(u);
    }
    
    // Update operation
    @PutMapping("/update/{id}")
    public void update(@RequestBody ProductCatagory u,
                     @PathVariable("id") Integer uid)
    {
        pcs.update(u, uid);
    }
 
    // Delete operation
    @DeleteMapping("/delete/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public String delete(@PathVariable("id")
                                       Integer delid)
    {
        pcs.deleteById(delid);
        return "deleted";
        
    }
    

}
