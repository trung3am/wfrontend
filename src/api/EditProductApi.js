
const axios = require('axios')



async function EditProductApi (id,name, category, price, color, quantity, jwt)  {
  var data = JSON.stringify({
    id: parseInt(id),
    name: name,
    category: category,
    price: parseInt(price),
    color: color,
    quantity: parseInt(quantity)

    })
  
  var config = {
    method: 'put',
    url: 'http://localhost/index.php/product/edit',
    headers: {
        Authorization: "Bearer " + jwt
     },
    data: data
  };
  console.log(config)
  console.log(jwt)
  try {
    const response = await axios(config);
    console.log('res', response);

    console.log('data', response.data);

    return response.data;    
  
  } catch(error) {
      console.log(error);
    };
    
}

export default EditProductApi;