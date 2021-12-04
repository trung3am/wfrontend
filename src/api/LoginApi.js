const axios = require('axios')



async function LoginApi (displayName, password)  {
  var data = JSON.stringify({
      user_name: displayName,
      password: password
  })  
  console.log(data)
  
  var config = {
    method: 'post',
    url: 'http://localhost/index.php/admin/login',
    headers: {
        'Content-Type': 'application/json'
     },
    data: data
  };
  console.log(config)
  try {
    const response = await axios(config);

    return response.data;    
  
  } catch(error) {
      console.log(error);
    };
    
}

export default LoginApi;