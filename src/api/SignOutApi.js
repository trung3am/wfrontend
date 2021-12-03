const axios = require('axios')



async function SignOutApi (jwt)  {
  
  var config = {
    method: 'put',
    url: 'http://localhost/index.php/user/logout',
    headers: { 
        Authorization: "Bearer " + jwt
    }
  };
  try {
  const response = await axios(config);
  
  console.log('data', response.data);
  return response.data;
  } catch(error) {
      console.log(error);
    };
    
}

export default SignOutApi;