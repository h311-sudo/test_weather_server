const got = require('got');

const weatherInfo = async(address) =>{
    if(!address){
        return res.send('you must provide a address!')
    }

    address = encodeURIComponent(address);
    const url = `http://api.weatherstack.com/current?access_key=4595fb3c1cab1143c66bf890bc68d42d&query=${address}`;
    try{

       const response =  await got(url).json();
       if('success' in response){
           return {
               error:"Please provide a valid name!"
           };
       }
       return response;

    }
    catch(error){

        return {
            error:'There is something wrong maybe internet connection?'
        };
    }


};

module.exports  = {
    weatherInfo
}