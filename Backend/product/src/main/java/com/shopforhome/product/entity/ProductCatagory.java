package com.shopforhome.product.entity;

import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table
public class ProductCatagory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String name;
	String description;
	@CreationTimestamp
	Date createat=new Date();
	@UpdateTimestamp
	Date updateat=new Date();
	
	
	public Date getCreateat() {
		return createat;
	}
	public void setCreateat(Date createat) {
		this.createat = createat;
	}
	public Date getUpdateat() {
		return updateat;
	}
	public void setUpdateat(Date updateat) {
		this.updateat = updateat;
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
	public ProductCatagory() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
