const axios = require('axios')



async function EditUserApi (phoneNumber, email, newPassword, jwt)  {
  var data;
  if (newPassword) {
    data = JSON.stringify({
        phone_number: phoneNumber,
        password: newPassword,
        email : email
    })
  }else {
    data = JSON.stringify({
        phone_number: phoneNumber,
        
        email : email
    })
  }
  var config = {
    method: 'put',
    url: 'http://localhost/index.php/user/edituser',
    headers: {
        Authorization: "Bearer " + jwt
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

export default EditUserApi;