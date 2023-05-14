import React,{useState} from 'react'
import {SearchOutlined } from "@ant-design/icons"
import { AutoComplete } from 'antd';

function Sidebar() {
 const onSelect=(e)=>{
    console.log(e);
  }


  return (
    <div className='m-0 p-0  ' >
        <div>
       
        <AutoComplete
        // options={options}
        style={{
          width: "100%",
        }}
        onSelect={onSelect}
        onSearch={(text) => ["jfgsdfhj","gfdgdhfg"]}
        placeholder="input here"
      />
  
</div>

       
    </div>
  )
}

export default Sidebar