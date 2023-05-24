

function Tablesort(data,key,type) {
 
   
    const data2 = [...data].sort((a, b) =>{
    return b[key]<a[key]?b[key]-a[key]:a[key]-b[key] 
   })


return data2


}

export default Tablesort