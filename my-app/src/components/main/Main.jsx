import React, {useEffect, useState} from 'react';
import "./Main.css"
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

  function formatDate() {
    const nowDate = new Date();

    let dd = nowDate.getDate();
    dd < 10 && (dd = '0' + dd);

    let mm = nowDate.getMonth() + 1;
    mm < 10 && (mm = '0' + mm);

    return dd + '.' + mm + '.' + nowDate.getFullYear();
  }


  return (
    <div className="container">
      <div>
        Официальный курс белорусского рубля по отношению к иностранным валютам,
        устанавливаемый Национальным банком Республики Беларусь ежедневно, на {formatDate()}
      </div>
      <table>
        <tr className="table_header">
          <th className="table-title">Наименование иностранной валюты</th>
          <th className="table-title">Количество единиц иностранной валюты, буквенный код валюты</th>
          <th className="table-title">Официальный курс</th>
        </tr>
        {data.map(el =>
          <tr>
            <td>{el["Cur_Name"]}</td>
            <td>{el["Cur_Scale"] + " " + el["Cur_Abbreviation"]}</td>
            <td>{el["Cur_OfficialRate"]}</td>
          </tr>)}
      </table>
    </div>
  );
};

export default Main;