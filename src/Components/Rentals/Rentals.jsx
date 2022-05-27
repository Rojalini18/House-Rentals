import { useState, useEffect } from 'react';
import './Rentals.css';

export const Rentals = () => {
  const [inf, setInf] = useState([]);
  const [serach, setSearch] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch('http://localhost:8080/house');
      let data = await res.json();
      setInf(data);
    };
    getData();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const sortById = () => {
    inf.sort((a, b) => a.id - b.id);
    {
      status ? setStatus(false) : setStatus(true);
    }
  };
  const rentLowToHigh = () => {
    inf.sort((a, b) => a.rent - b.rent);
    {
      status ? setStatus(false) : setStatus(true);
    }
  };
  const rentHighToLow = () => {
    inf.sort((a, b) => b.rent - a.rent);
    {
      status ? setStatus(false) : setStatus(true);
    }
  };
  const areaLowToHigh = () => {
    inf.sort((a, b) => a.areaCode - b.areaCode);
    {
      status ? setStatus(false) : setStatus(true);
    }
  };
  const areaHighToLow = () => {
    inf.sort((a, b) => b.areaCode - a.areaCode);
    {
      status ? setStatus(false) : setStatus(true);
    }
  };
  return (
    <div className='rentalContainer'>
      <div className='sortingButtons'>
        <button onClick={sortById} className='sortById'>
          Sort by ID
        </button>
        <button onClick={rentLowToHigh} className='sortByRentAsc'>
          Rent Low to high
        </button>
        <button onClick={rentHighToLow} className='sortByRentDesc'>
          Rent High to low
        </button>
        <button onClick={areaLowToHigh} className='sortByAreaAsc'>
          Area Low to high
        </button>
        <button onClick={areaHighToLow} className='sortByAreaDesc'>
          Area High to Low
        </button>
      </div>
      <input
        onChange={handleChange}
        value={serach}
        className='searchAddress'
        type='text'
        placeholder='Search Address'
      />
      <table className='table' border='1'>
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {inf.map((house, index) => {
            return (
              <tr key={house.id} className='houseDetails'>
                <td className='houseId'>{house.id}</td>
                <td className='houseName'>{house.name} </td>
                <td className='ownersName'>{house.ownerName}</td>
                <td className='address'>{house.address}</td>
                <td className='areaCode'>{house.areaCode}</td>
                <td className='rent'>{house.rent}</td>
                <td className='preferredTenants'>
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.married ? 'married' : 'bachelor'}
                </td>
                <td className='houseImage'>
                  <img className='houseimage' src={house.image} alt='house' />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
