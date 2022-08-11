package com.shopforhome.discount.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopforhome.discount.entity.Discount;

@Repository
public interface DiscountRepository extends JpaRepository<Discount, Integer> {


	public Discount findByCode(String code);
	
}
