package com.shopforhome.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.shopforhome.product.bulk.CSVManager;
import com.shopforhome.product.entity.Product;
import com.shopforhome.product.response.ResponseCSVMessage;
import com.shopforhome.product.service.CsvService;



@Controller
@RequestMapping("/csv")
@CrossOrigin(origins = "http://localhost:4200")
public class CSVController {
  @Autowired
  CsvService fileService=new CsvService();
  @PostMapping("/upload")
  @CrossOrigin(origins = "http://localhost:4200")
  public ResponseEntity<ResponseCSVMessage> uploadFile(@RequestParam("file") MultipartFile file) {
    String message = "";
    if (CSVManager.hasCSVFormat(file)) {
      try {
        fileService.save(file);
        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseCSVMessage(message));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!"+e.getMessage();
        
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseCSVMessage(message));
      }
    }
    message = "Please upload a csv file!";
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseCSVMessage(message));
  }
  @GetMapping("/Products")
  public ResponseEntity<List<Product>> getAllProducts() {
    try {
      List<Product> Products = fileService.getAllProducts();
      if (Products.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(Products, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}