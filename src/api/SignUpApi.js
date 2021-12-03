const axios = require('axios')



async function SignUpApi (displayName, email, password)  {
  var data = JSON.stringify({
      user_name: displayName,
      password: password,
      email : email
  })  
  var config = {
    method: 'post',
    url: 'http://localhost/index.php/user/createuser',
    headers: {
        
     },
    data: data
  };
  try {
    const response = await axios(config);
    console.log('res', response);

    console.log('data', response.data);

    return response.data;    
  
  } catch(error) {
      console.log(error);
    };
    
}

export default SignUpApi;