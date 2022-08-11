package com.shopforhome.user.entity;

import javax.persistence.*;

@Entity
@Table
public class UserAddress {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
	String address_1;
	String address_2;
	String city;
	Integer pin;
	String state;
	String country;
	Integer userid;
	
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getAddress_1() {
		return address_1;
	}


	public void setAddress_1(String address_1) {
		this.address_1 = address_1;
	}


	public String getAddress_2() {
		return address_2;
	}


	public void setAddress_2(String address_2) {
		this.address_2 = address_2;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public Integer getPin() {
		return pin;
	}


	public void setPin(Integer pin) {
		this.pin = pin;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public Integer getUserid() {
		return userid;
	}


	public void setUserid(Integer userid) {
		this.userid = userid;
	}


	public UserAddress() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
