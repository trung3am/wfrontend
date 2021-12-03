const axios = require('axios')



async function SignInApi (displayName, password)  {
  var data = JSON.stringify({
      user_name: displayName,
      password: password
  })  
  console.log(data)
  
  var config = {
    method: 'post',
    url: 'http://localhost/index.php/user/login',
    headers: {
        'Content-Type': 'application/json'
     },
    data: data
  };
  console.log(config)
  try {
    const response = await axios(config);
    console.log('res', response);

    console.log('data', response.data);

    return response.data;    
  
  } catch(error) {
      console.log(error);
    };
    
}

export default SignInApi;