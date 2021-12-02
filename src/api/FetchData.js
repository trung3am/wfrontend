const axios = require('axios')



async function FetchProductData (log)  {
  console.log('1', log)
  var config = {
    method: 'get',
    url: 'http://localhost/index.php/product/all',
    headers: { }
  };
  try {
  const response = await axios(config);
  console.log('res', response);
  var temp;
  response.data.forEach(e => {
    temp = e['sizes'];
    if (temp!==null) {
      temp = temp.split('-')
    }    
    e['sizes'] = temp;

  });
  console.log('data', response.data);
  return response.data;
  } catch(error) {
      console.log(error);
    };
    
}

export default FetchProductData;