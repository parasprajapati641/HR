import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

function Comment() {
  const [tableComment, setTableComment] = useState([]);
  const [input, setInput] = useState();
  const [results, setResults] = useState([]);

  const getTableComment = async () => {
    try {
      const data = await axios.get("https://jsonplaceholder.typicode.com/posts");

      console.log(data.data);
      setTableComment(data.data);
    } catch (e) {
      console.log(e);

    }
  };

  // const deleteTableComment = async () => {

  //   const data = await axios.delete("https://jsonplaceholder.typicode.com/posts/1", {
  //   });
  // }




  // const putTableComment = async (data) => {
  //   try {
  //     const data = await axios.put("https://jsonplaceholder.typicode.com/posts/100");
  //     console.log(data.data);
  //     setTableComment(data.data)
  //   } catch (data) {
  //     console.log(data);
  //   }
  // }

  const postTableComment = async () => {
    // PUT request using axios with error handling
    const data = { title: 'React PUT Request Example' };
    axios.post('https://jsonplaceholder.typicode.com/posts', {
     
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((data) => data.json(data))
      .then((data) => console.log(data));
  }

  const handleSearch = (e) => {
    //   e.preventDefault();
    //   setInput(e.target.value);
    // };
    // if (input.length > 0) {
    //   results.filter((i) => {
    //     return i.postId.match(input);
    // });
  };

  useEffect(() => {
    getTableComment();
    // deleteTableComment();
  }, []);

  return (
    <div>
      {/* <input name="input" placeholder="search by postId" type="number" />
      <Button
        variant="outline-secondary btn-sm"
        onClick={() => {
          handleSearch();
        }}
      >
        search
      </Button> */}
      <Table>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
          </tr>
        </thead>

        {tableComment
          // .filter((i) => input)
          ?.map((data) => {
            return (
              <tbody>
                <tr>
                  <td>{data.userId}</td>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                  <td>{data.thumbnailUrl}</td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
}

export default Comment;
