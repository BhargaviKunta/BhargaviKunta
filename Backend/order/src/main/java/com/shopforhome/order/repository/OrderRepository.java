package com.shopforhome.order.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopforhome.order.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Integer> {
	public List<Order> findByUseridAndStatus(int id,String status);
	public List<Order> findByStatusAndProduct(String status);
	

}
