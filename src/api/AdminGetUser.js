const axios = require('axios')



async function AdminGetUser (jwt)  {
  
  var config = {
    method: 'get',
    url: 'http://localhost/index.php/admin/getuser',
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

export default AdminGetUser;