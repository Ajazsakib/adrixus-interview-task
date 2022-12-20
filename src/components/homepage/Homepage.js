import axios from "axios";
import React, { useEffect, useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    renderListData();
  }, []);

  const renderListData = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    setData(res.data.data);
  };
  console.log(data);

  const changePageData = async (id) => {
    const res = await axios.get(`https://reqres.in/api/users?page=${id}`);
    setData(res.data.data.sort);
  };

  const filtertableData = (e) => {
    const filteredData = data.filter((user) => {
      return user.first_name.includes(e.target.value);
    });

    if (e.target.value == "") {
      renderListData();
    } else {
      setData(filteredData);
    }
  };

  return (
    <div className="home">
      <div className="show-table">
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={filtertableData}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pagination">
          <ul>
            <li
              onClick={() => {
                changePageData(1);
              }}
            >
              1
            </li>
            <li
              onClick={() => {
                changePageData(2);
              }}
            >
              2
            </li>
            <li
              onClick={() => {
                changePageData(3);
              }}
            >
              3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
