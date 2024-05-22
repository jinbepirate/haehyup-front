import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function MyList({ items }) {
  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item key={index}>
          <Link
            to={`/board/${item.id}`}
            key={item._id}
            preventScrollReset
            className="text-decoration-none"
          >
            <h5>
              <b>게시물 {item.id}</b>
            </h5>{" "}
          </Link>
          Name : {item.name} , Email : {item.email}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터 조회를 위한 비동기 함수
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        ); // 서버의 실제 URL로 변경
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 합니다.

  return (
    <div>
      <MyList items={data} />
    </div>
  );
};

export default DataFetchingComponent;
