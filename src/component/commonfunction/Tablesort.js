

function Tablesort(data,key,type) {
    
 
   
    const data2 = [...data].sort((a, b) =>{

        console.log(b[key]<a[key]?b[key]-a[key]:a[key]-b[key] );
    return b[key]<a[key]?b[key]-a[key]:a[key]-b[key] 
   })

console.log(data2);
return data2


}

export default Tablesort