package com.shopforhome.product.bulk;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;

import com.shopforhome.product.entity.Product;

public class CSVManager {

	public static String TYPE = "text/csv";
	  static String[] HEADERS = { "name", "description", "price","quantity","categotyid","discountid","imgurl" };
	  public static boolean hasCSVFormat(MultipartFile file) {
	    if (!TYPE.equals(file.getContentType())) {
	      return true;
	    }
	    return true;
	    
	  }
	  public static List<Product> csvToProduct(InputStream is) {
	    try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        CSVParser csvParser = new CSVParser(fileReader,
	            CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {
	      List<Product> products = new ArrayList<Product>();
	      Iterable<CSVRecord> csvRecords = csvParser.getRecords();
	      for (CSVRecord csvRecord : csvRecords) {
	        Product product = new Product(
	              csvRecord.get("name"),
	              csvRecord.get("description"),
	              Double.parseDouble(csvRecord.get("price")),
	              Integer.parseInt(csvRecord.get("quantity")),
	              Integer.parseInt(csvRecord.get("categoryid")),
	              Integer.parseInt(csvRecord.get("discountid")),
	              csvRecord.get("imgurl")
	            );
	        products.add(product);
	      }
	      return products;
	    } catch (IOException e) {
	      throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
	    }
	  }
	
}
