const axios = require('axios')



async function CheckOutApi (order, user, payment)  {


    const products = []
    order.forEach(e => {
        products.push({product_id: e.id, quantity: e.quantity, sizes: e.sizes})
    });

  var data = JSON.stringify({
        payment: payment,
        phone_number: parseInt(user.phoneNumber),
        user_name: user.fullName,
        address: user.address,
        email : user.email,
        products: products
    })
  console.log(data)
  var config = {
    method: 'post',
    url: 'http://localhost/index.php/order/create',
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
export default CheckOutApi;