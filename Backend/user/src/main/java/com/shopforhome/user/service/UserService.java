package com.shopforhome.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.shopforhome.user.entity.User;
import com.shopforhome.user.entity.UserDto;
import com.shopforhome.user.entity.UserMessage;
import com.shopforhome.user.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository ur;
	
//	read user
	public User getUser(int id) {
		return ur.findById(id).get();
	}
//read all user
	public List<User> getAllUsers(){
		
		return (List<User>)ur.findAll();
	}
//	save user

	public UserMessage saveUser(User u) throws Exception {
		UserMessage msg=new UserMessage();
		User existuser=null;
		existuser=ur.findByUsername(u.getUsername());
		User existmobile=null;
		existmobile=ur.findByMobile(u.getMobile());
		User existemail=null;
		existemail=ur.findByEmail(u.getEmail());
		if(existuser==null) {
			
			if(existemail==null) {
				if(existmobile==null) {
						ur.save(u);	
						msg.setMessage("Registration success!");
				}else {msg.setMessage("Mobile number already register with us.");}
			}else {
				msg.setMessage("Email id already register with us.");
			}
		}else {
			msg.setMessage("Username already register with us");
		}
		return msg;
	
		
	
	}
//	update user
	public User updateUser(User u,Integer id) {
		User usr= ur.findById(id).get();
		usr.setFirstname(u.getFirstname());
		usr.setLastname(u.getLastname());
		usr.setEmail(u.getEmail());
		usr.setMobile(u.getMobile());
		usr.setPassword(u.getPassword());
		usr.setRole(u.getRole());
		usr.setStatus(u.getStatus());
		usr.setUsername(u.getUsername());
		return ur.save(usr);
	}
//	delete single user 
	public void deleteById(Integer id) {
		
		ur.deleteById(id);

	}
	
	//login
		public UserDto login(User u) throws Exception {
			
			UserDto ud=new UserDto();
			
			
			User user=null;
			user=ur.findByUsername(u.getUsername());
			if(user!=null) {
				
				if(user.getPassword().equals(u.getPassword())){
					
					ud.setId(user.getId());
					ud.setFirstname(user.getFirstname());
					ud.setLastname(user.getLastname());
					ud.setEmail(user.getEmail());
					ud.setRole(user.getRole());
					ud.setStatus(user.getStatus());
					ud.setToken("SKU123456");
					ud.setMobile(user.getMobile());
					ud.setUsername(user.getUsername());
					
					
					return ud;
					
				}else {
					throw new Exception("invalid password");
				}
				
			}else {
				 throw new Exception("invalid user");
				
			}
			
		}
	
}
