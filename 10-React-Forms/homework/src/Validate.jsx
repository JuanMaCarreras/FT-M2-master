import React from "react";


    

export default function validate(input){

    
    let errors = {};

   if (!input.username){

      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)){

     errors.username = 'Username is invalid';
    };

    if (!input.password){

        errors.password = 'Password is required';
      } else if (!/\S+@\S+\.\S+/.test(input.password)){
  
       errors.password = 'Password is invalid';
      };

      return errors;
}




