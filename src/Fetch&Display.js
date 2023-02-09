import React, { useState, useEffect } from 'react';
export default function FetchAndDisplay() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        res.json().then((d) => {
          console.log(d);
          setData(d);
        });
        // console.log(res);
      })
      .catch((failed) => {
        console.log(failed);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RecievedDATA = data.map((contents, i) => {
    return (
      <tr key={i}>
        <td>{contents.id}</td>
        <td>{contents.title}</td>
        <td>{contents.body}</td>
      </tr>
    );
  });

  return (
    <>
      {/* map in UI */}

      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Body Contents</th>
          </tr>
        </thead>
        <tbody>{RecievedDATA}</tbody>
      </table>

      {/* 2nd Approcah */}

      {/* 
      {data.map((RecievedDATA, i) => {
        return (
          <tr>
            <td>{RecievedDATA.id}</td>
            <td> {RecievedDATA.title}</td>
            <td> {RecievedDATA.body}</td>
          </tr>
        );
      })} */}
    </>
  );
}
