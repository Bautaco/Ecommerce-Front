import {string, email,  }from 'valibot';

export const userSchema ={

  name :  string("Este campo es requerido"),
  lastname:string("Este campo es requerido"),
  email :email("Ingrese un email valido"),
  password : string("Ingerse un password")

} 
