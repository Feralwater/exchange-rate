import React, {useEffect, useState} from 'react';
import "./Main.less"
import axios from "axios";

const Main = () => {

  async function getData() {
    const response = await axios.get(` https://www.nbrb.by/api/exrates/rates?periodicity=0`)
    return response.data
      }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    }
    fetchData();
  }, []);


  return (
    <div>
      {data.map(el=><div>{el["Cur_Name"] + ":" + el["Cur_OfficialRate"]}</div>)}
    </div>
  );
};

export default Main;