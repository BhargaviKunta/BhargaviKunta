package com.shopforhome.product.service;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.shopforhome.product.bulk.CSVManager;
import com.shopforhome.product.entity.Product;
import com.shopforhome.product.repository.ProductRepository;

@Service
public class CsvService {
	 @Autowired
	  ProductRepository repository;
	  public void save(MultipartFile file) {
	    try {
	      List<Product> products = CSVManager.csvToProduct(file.getInputStream());
	      repository.saveAll(products);
	    } catch (IOException e) {
	      throw new RuntimeException("fail to store csv data: " + e.getMessage());
	    }
	  }
	  public List<Product> getAllProducts() {
	    return (List<Product>) repository.findAll();
	  }
}
