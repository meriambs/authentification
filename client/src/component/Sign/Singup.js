// import React ,{useState} from 'react'
//  import './style.css'
//  import { postContact } from '../../api/userApi';
//  import { useNavigate } from 'react-router';
// const Singup = () => {
//     let navigate = useNavigate();
//   const [name,setName]=useState('')
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')
//   const handleSubmit=async(value)=>{
//     await postContact(value)
//     // console.log('addingContact',handleSubmit),
//      navigate('/signin')
    
//       }
//   return (
//     <div> <section class="signup">
//     <div class="container">
//         <div class="signup-content">
//             <div class="signup-form">
//                 <h2 class="form-title">Sign up</h2>
//                 <form method="POST" class="register-form" id="register-form">
//                     <div class="form-group">
//                         <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
//                         <input type="text" name="name" id="name" placeholder="Your Name" value={name}
//           onChange={(e)=>setName(e.target.value)}/>
//                     </div>
//                     <div class="form-group">
//                         <label for="email"><i class="zmdi zmdi-email"></i></label>
//                         <input type="email" name="email" id="email" placeholder="Your Email" value={email}
//           onChange={(e)=>setEmail(e.target.value)} />
//                     </div>
//                     <div class="form-group">
//                         <label for="pass"><i class="zmdi zmdi-lock"></i></label>
//                         <input type="password" name="pass" id="pass" placeholder="Password" value={password}
//           onChange={(e)=>setPassword(e.target.value)} />
//                     </div>
                  
//                     <div class="form-group">
//                         <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
//                         <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
//                     </div>
//                     <div class="form-group form-button">
//                         <button class="form-submit" onClick={()=>handleSubmit({name,email,password})} >register</button>
//                         {/* <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/> */}
//                     </div>
//                 </form>
//             </div>
//             <div class="signup-image">
//                 <figure><img src="https://as1.ftcdn.net/v2/jpg/04/27/59/94/1000_F_427599401_mbTarDavJSHMpkg1u0JmmaGhjWnQgOUI.jpg" alt="sing up image"/></figure>
//                 <a href="#" class="signup-image-link">I am already member</a>
//             </div>
//         </div>
//     </div>
// </section></div>
//   )
// }

// export default Singup