

function Tablesort(data,key,type) {
 
   
    const data2 = [...data].sort((a, b) =>{
    return b[key]-a[key] 
   })


return data2


}

export default Tablesort