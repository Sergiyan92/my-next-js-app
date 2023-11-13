import React, { use } from "react";

const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 10 },
  }).then((response) => response.json());
};

const DashbordPage = async () => {
  const data = await fetchData();

  return <div>{data.id}</div>;
};

export default DashbordPage;
