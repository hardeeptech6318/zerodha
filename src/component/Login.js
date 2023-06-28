import React,{useRef,useState} from 'react'
import { useSigninMutation } from '../features/api/apiSlice';

function Login() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [signIn, response] = useSigninMutation()

    const addtomrket=()=>{
        signIn({
        username,
        password
        })
        .unwrap()
        .then((res) =>localStorage.setItem('token',res.token))
        .then((error) => {
          console.log(error)
        })
      }
    

    const ref = useRef(null);

    const inputfocus=(showlabel)=>{
        
        let id = document.getElementsByClassName(showlabel);
  id[0].classList.add("loginlabel");
    }

    
  return (
    <div className='loginpage '>
        <div className= 'loginpadding    bg-white border shadow-smd-flex flex-column justify-content-center align-items-center'>
        <div className='text-center w-100 '>
        <img
                className="loginlogo mb-5 "
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                alt="logo"
              />
        </div>
        <div className='text-center mb-3 '>
            <h2>Login to Kite</h2>
        </div>
        <div className='w-100 pb-4 position-relative '>
            <label className='showuser'  htmlFor='userid' style={{display:'none'}}>User ID</label>
            <input ref={ref} onChange={(e)=>setusername(e.target.value)} onFocus={()=>inputfocus('showuser')}   className='logininput ' id='userid' type='text' placeholder='User ID(eg:AB0001)'/>
        </div>
        
        <div  className='w-100 pb-4 position-relative'>
        <label>Password</label>
            <input  className= 'logininput ' type='password' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div  className='w-100'>
        
            <button className=' btn w-100  btn-danger text-white' onClick={addtomrket} >Login</button>
            </div>
        <div className='modal_order opacity75 text-center mt-2 mb-3'>
            Forget user ID or passowrd
        </div>
        </div>
        <div className='text-center'>

<div className='mb-3     mt-5'>
    <img className='me-4 loginimage' src='https://kite.zerodha.com/static/images/android.svg' alt='kite-android'/>
<img className='loginimage' src='https://kite.zerodha.com/static/images/apple.svg'/>
</div>
<div>
    <img  src='https://kite.zerodha.com/static/images/zerodha-logo.svg'/>
</div>
<div className='modal_order opacity75 my-2'>
Don't have an account? Signup now!
</div>
<div className='headerdim opacity75 lighttext '>
Zerodha Broking Limited: Member of NSE, BSE  SEBI Reg. no. <br/>  INZ000031633, CDSL  SEBI Reg. no. IN-DP-431-2019 | Zerodha <br/> Commodities Pvt. Ltd.: MCX  SEBI Reg. no. INZ000038238
</div>
<div className='headerdim opacity75 my-2 lighttext'>
v3.0.14
</div>


        </div>
    </div>
  )
}

export default Login