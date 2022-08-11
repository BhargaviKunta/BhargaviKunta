package com.shopforhome.order.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	int userid;
	@ManyToMany
	@JoinColumn(name="order_process")
	List<Product> product;
	int quantity;
	String status="confirm";

	@CreationTimestamp
	Date orderdate=new Date();
	
	@UpdateTimestamp
	Date updateat=new Date();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}



	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}

	public Date getUpdateat() {
		return updateat;
	}

	public void setUpdateat(Date updateat) {
		this.updateat = updateat;
	}

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}
