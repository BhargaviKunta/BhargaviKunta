package com.shopforhome.order.entity;

import java.util.List;

import javax.persistence.*;

@Entity
@Table
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String name;
	String description;
	Double price;
	Integer quantity;
	Integer catagoryid;
	String imgurl;
//	@ManyToMany
//	List<Order> orders;
	
	
	
	
	public Product(String name, String description, Double price, Integer quantity, Integer catagoryid,
			Integer discountid, String imgurl) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.catagoryid = catagoryid;
	
		this.imgurl = imgurl;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Integer getCatagoryid() {
		return catagoryid;
	}
	public void setCatagoryid(Integer catagoryid) {
		this.catagoryid = catagoryid;
	}

//	public List<Order> getOrders() {
//		return orders;
//	}
//	public void setOrders(List<Order> orders) {
//		this.orders = orders;
//	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
