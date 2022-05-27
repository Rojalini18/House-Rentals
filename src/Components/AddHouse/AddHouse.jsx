import { useState } from "react";
import './AddHouse.css'
const initData = {
  "name": "",
  "ownerName": "",
  "address": "",
  "areaCode": "",
  "rent": "",
  "bachelor": "",
  "married": false,
  "image": ""
}
export const AddHouse = () => {
  const [fdata,setData] = useState(initData);

  const handleChange = (e) => {
    console.log("change");
    let {name,type,value,checked} = e.target;
    value = type === "checkbox" ? checked : value;
    setData({...fdata,[name]:value})
  }
  const handleSubmit = async(e) => {
    console.log("submit");
    e.preventDefault();
    try{
      let res = await fetch("http://localhost:8080/house",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(fdata)
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input name="name" type="text" className="name" value={fdata.name} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input name="ownerName" value={fdata.ownerName} type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input name="address" value={fdata.address} type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input name="areaCode" value={fdata.areaCode} type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input name="rent" value={fdata.rent} type="text" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input name="bachelor" checked={fdata.bachelor} type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input name="married" checked={fdata.married} type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input name="image" value={fdata.image} type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
