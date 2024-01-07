<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>sign uppage</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='register.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
</head>
<body>
    
    <div class="login-box">
        <h2>Sign Up</h2>
        <form id="form">
          <div class="user-box">
            <input type="text" name="username" required="" id="username">
            <label for="username">Name</label>
            <div class="error"></div>
          </div>
          <div class="user-box">
            <input type="password" name="email" required="" id="email">
            <label for="email">Email</label>
            <div class="error"></div>
          </div>
          <div class="user-box">
            <input type="password" name="password" required=""id="password">
            <label for="password">New Password</label>
            <div class="error"></div>
          <div class="user-box">
            <input type="password" name="cpassword" required="" id="cpassword">
            <label for="cpassword">Confirm Password</label>
            <div class="error"></div>
          </div>
        <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button> 
        </form>
      </div>
      <script>
      const form = document.getElementById("form")
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const cpassword = document.getElementById("cpassword");
      
      form.addEventListener('submit',(e)=>{
          
          if(!validateInputs()){
              e.preventDefault();
          }
      })
      
      function validateInputs(){
          const usernameVal = username.value.trim()
          const emailVal = email.value.trim();
          const passwordVal = password.value.trim();
          const cpasswordVal = cpassword.value.trim();
          let success = true
      
          if(usernameVal===''){
              success=false;
              setError(username,'Username is required')
          }
          else{
              setSuccess(username)
          }
      
          if(emailVal===''){
              success = false;
              setError(email,'Email is required')
          }
          else if(!validateEmail(emailVal)){
              success = false;
              setError(email,'Please enter a valid email')
          }
          else{
              setSuccess(email)
          }
      
          if(passwordVal === ''){
              success= false;
              setError(password,'Password is required')
          }
          else if(passwordVal.length<8){
              success = false;
              setError(password,'Password must be atleast 8 characters long')
          }
          else{
              setSuccess(password)
          }
      
          if(cpasswordVal === ''){
              success = false;
              setError(cpassword,'Confirm password is required')
          }
          else if(cpasswordVal!==passwordVal){
              success = false;
              setError(cpassword,'Password does not match')
          }
          else{
              setSuccess(cpassword)
          }
      
          return success;
      
      }
      //element - password, msg- pwd is reqd
      function setError(element,message){
          const inputGroup = element.parentElement;
          const errorElement = inputGroup.querySelector('.error')
      
          errorElement.innerText = message;
          inputGroup.classList.add('error')
          inputGroup.classList.remove('success')
      }
      
      function setSuccess(element){
          const inputGroup = element.parentElement;
          const errorElement = inputGroup.querySelector('.error')
      
          errorElement.innerText = '';
          inputGroup.classList.add('success')
          inputGroup.classList.remove('error')
      }
      
      const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
      </script>

</body>
</html>
