package com.shopforhome.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.shopforhome.product.entity.ProductCatagory;

@Repository
public interface ProductCatagoryRepository extends JpaRepository<ProductCatagory, Integer> {

}
