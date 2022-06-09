import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

function Comment() {
  const [tableComment, setTableComment] = useState([]);
  const [input, setInput] = useState();
  const [results, setResults] = useState([]);

  const getTableComment = async () => {
    try {
      const data = await axios.get("https:jsonplaceholder.typicode.com/posts");

      console.log(data.data);
      setTableComment(data.data);
    } catch (e) {
      console.log(e);
    }
  };

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
  }, []);
  return (
    <div>
      <input name="input" placeholder="search by postId" type="number" />
      <Button
        variant="outline-secondary btn-sm"
        onClick={() => {
          handleSearch();
        }}
      >
        search
      </Button>
      <Table striped bordered hover>
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
                  <td>{data.albumId}</td>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.url}</td>
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
