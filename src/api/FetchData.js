const axios = require('axios')



async function FetchProductData ()  {
  
  var config = {
    method: 'get',
    url: 'http://localhost/index.php/product/all',
    headers: { }
  };
  try {
  const response = await axios(config);
  console.log('res', response);
  var temp;
  var temp1;
  var temp2;
  response.data.forEach(e => {
    temp = e['sizes'];
    if (temp!==null) {
      temp = temp.split('-')
    }    
    e['sizes'] = temp;
    temp1 = e['shipped_from_abroad']
    temp2 = e['sale']
    if (temp1 === '1') {
      e['shipped_from_abroad'] = true
    }
    if (temp2 === '1') {
      e['sale'] = true
    }

    if (temp1 === '0') {
      e['shipped_from_abroad'] = false
    }
    if (temp2 === '0') {
      e['sale'] = false
    }
  });
  console.log('data', response.data);
  return response.data;
  } catch(error) {
      console.log(error);
    };
    
}

export default FetchProductData;