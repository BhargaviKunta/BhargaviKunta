package com.shopforhome.user.repository;



import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.shopforhome.user.entity.User;


@org.springframework.stereotype.Repository
public interface UserRepository extends CrudRepository<User, Integer>{

	//check for duplicate entry
		public User findByUsernameOrEmailOrMobile(String username,String email,long mobile);
		//check for authentication
		public User findByUsername(String user);
		//check role
		public List<User> findByRole(String role);
		
		public User findByEmail(String email);
	
		public User findByMobile(long mobile);
	
	
	
}
