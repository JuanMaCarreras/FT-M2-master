import React from 'react';
import validate from './Validate';

export default function  Form() {

        let [input, setInput] = React.useState({
            user:'',
            password:''
        })
        
        let [errors, setErrors] = React.useState({})
        
        // const [user, setUser] = React.useState('');
        // const [password, setPassword] = React.useState('');
        const handlerChangeInput = (event) =>{
          setInput({ ...input,[event.target.name]: event.target.value
          });

          setErrors(validate({...input,[event.target.name]: event.target.value}));
        }
       

    return (
      <div>
          <h2>Ejercicio de Formulario</h2>
        <form className={errors && 'danger'}>
          <div> 
             <label>Username:</label>

             <input type='text'
                name='username'
                onChange={handlerChangeInput} 
                value={input.username}
                className={errors.username && 'danger'}
              />{
                errors.username && <p style={{color:'red'}}>{errors.username}</p>
              }
          </div>     
           <br/>
          <div> 
             <label>Password:</label>
          
             <input type='password'
                name='password'
                onChange ={handlerChangeInput}
                value={input.password}
                className={errors.password && 'danger'}
              />{
                errors.password && <p style={{color:'red'}}>{errors.password}</p>
              }
                
          </div>
              <input type='submit' value='submit'/>

        </form>
      </div>
  )
}
