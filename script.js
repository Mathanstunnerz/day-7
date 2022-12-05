 var request = new XMLHttpRequest ( );
 
 request.open('GET', 'https://restcountries.com/v2/all', true)  ;
 request.send();
 request.onload= function(){ 

     var date = request.response
    var result = JSON.parse(date);
   var arr = result.filter((ele)=>{
    for(let index in ele.currencies) {
        if(ele.currencies[index].code === 'USD') {
            console.log(ele.name);
        }

  } })
   
}
//