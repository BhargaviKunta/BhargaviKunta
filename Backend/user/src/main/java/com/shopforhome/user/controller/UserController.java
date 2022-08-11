package com.shopforhome.user.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopforhome.user.entity.User;
import com.shopforhome.user.entity.UserDto;
import com.shopforhome.user.entity.UserMessage;
import com.shopforhome.user.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	@Autowired
	UserService us;
	
	//	Read single data
	@RequestMapping("/read/{userid}")
	public User getUserById(@PathVariable("userid") int userid) {
		
		return us.getUser(userid);
	}
	
	// Read All
		@GetMapping("/all")
		@CrossOrigin(origins="http://localhost:4200")
		public List<User> getUsers(){
			
			return us.getAllUsers();
		}
	 
	
	// Save operation
    @PostMapping("/insert")
    @CrossOrigin(origins="http://localhost:4200")
    public UserMessage saveUser(@RequestBody User u) throws Exception
    {
        
        return us.saveUser(u);
    }
    
    // Update operation
    @PutMapping("/update/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public void updateUser(@RequestBody User u,
                     @PathVariable("id") Integer uid)
    {
    	
        us.updateUser(u, uid);
    }
 
    // Delete operation
    @DeleteMapping("/delete/{id}")
    @CrossOrigin(origins="http://localhost:4200")
    public void deleteDepartmentById(@PathVariable("id")
                                       Integer delid)
    {
        us.deleteById(delid);
        
    }
    
    //login
    @PostMapping("/login")
    @CrossOrigin(origins="http://localhost:4200")
    public UserDto login(@RequestBody User u) throws Exception {
    	return us.login(u);
    }

}
