const axios = require('axios')



async function GetOrderAdminApi (jwt)  {
  
  var config = {
    method: 'get',
    url: 'http://localhost/index.php/order/all',
    headers: { 
        Authorization: "Bearer " + jwt
    }
  };
  try {
  const response = await axios(config);
  
    console.log(response)
  return response.data;
  } catch(error) {
      console.log(error);
    };
    
}

export default GetOrderAdminApi;