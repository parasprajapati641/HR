import { Button, DatePicker, Form, Input, Switch } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./index.module.scss";
import "react-toastify/dist/ReactToastify.css";
import {
  DeleteFilled,
  DeleteOutlined,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons";
import moment from "moment";

function Demo() {
  const [data, setData] = useState([]);
  const [dataIndex, setDataIndex] = useState(false);
  const [index, setIndex] = useState(0);
  const [form] = Form.useForm();
  const { Search } = Input;
  const [dateString, setDateString] = useState("");

  const handleSubmit = (e) => {
    let obj = {
      firstname: e.firstname,
      lastname: e.lastname,
      email: e.email,
      password: e.password,
      bdaydate: dateString,
    };
    console.log("form", obj);
    if (
      obj.firstname !== "" &&
      obj.lastname !== "" &&
      obj.email !== "" &&
      obj.password !== "" &&
      obj.bdaydate !== ""
    ) {
      if (dataIndex) {
        let arr = data;
        for (let i = 0; i < arr.length; i++) {
          console.log(i, index);
          if (i === index) {
            arr[i] = obj;
          }
        }
        setData(arr);
        console.log("data", data);
        clear();
        setDataIndex(false);
      } else {
        let arr = data;
        arr.push(obj);
        setData([...arr]);
        clear();
        // toast.success("your form is successfully");
      }
      setDateString("");
    }
  };

  const clear = () => {
    form.setFieldsValue({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      bdaydate: "",
    });
  };

  const handleDeleteClick = (index) => {
    const newData = data;
    newData.splice(index, 1);
    setData([...newData]);
  };

  const handleEdit = (editData, index) => {
    setDataIndex(true);
    setIndex(index);
    form.setFieldsValue({
      firstname: editData.firstname,
      lastname: editData.lastname,
      email: editData.email,
      password: editData.password,
    });
    setDateString(moment(editData.dateString).format("YYYY"));
    console.log("momen",typeof moment(editData.dateString).format("YYYY"));
  };

  // const onSearch = (value) => {
  //   console.log("search", value);
  // };
  // console.log("dateString", dateString);

  const onChange = (date, dateString) => {
    setDateString(dateString);
    console.log(date, dateString);
  };
  // console.log("DATE",dateString);

  return (
    <div className={styles.mainHeader}>
      <Form
        className={styles.main}
        onFinish={handleSubmit}
        form={form}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          bdaydate: "",
        }}
      >
        <Form.Item label="FirstName" name="firstname">
          <Input
            type={"text"}
            className={styles.header}
            placeholder={"firstname"}
          />
        </Form.Item>

        <Form.Item label="LastName" name="lastname">
          <Input
            type={"text"}
            className={styles.header}
            placeholder={"lastname"}
          />
        </Form.Item>

        <Form.Item label="Email" name="email" className={styles.mail}>
          <Input
            type={"email"}
            className={styles.header}
            placeholder={"email"}
          />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password
            type={"password"}
            className={styles.header}
            placeholder={"password"}
          />
        </Form.Item>

        <Form.Item label="BdayDate" name="bdaydate">
          <DatePicker
            onChange={onChange}
            initialValues={dateString}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" className={styles.submit}>
          {dataIndex ? "Save" : "Submit"}
        </Button>
      </Form>
      <br />
      {/* <Search
        placeholder="input search text"
        enterButton="Search"
        size="midium"
        onSearch={onSearch}
      /> */}
      <br />
      <table className={styles.footer}>
        <thead className={styles.footerMain}>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Bdaydate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.footerHeader}>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.bdaydate}</td>
                <td>
                  <DeleteTwoTone
                    onClick={() => handleDeleteClick(index)}
                    className={styles.footerDelete}
                  />
                </td>
                <td>
                  <EditTwoTone
                    onClick={() => handleEdit(data, index)}
                    className={styles.footerEdit}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Demo;
