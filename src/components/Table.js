import React, { useState } from "react";
import { Table } from "antd";

const TableComponent = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);
  const pagination = {
    current: 1,
    pageSize: 10,
  };

  const columns = [
    {
      title: "División",
      dataIndex: "division",
      filters: [
        {
          text: "Strategy",
          value: "Joe",
        },
        {
          text: "Producto",
          value: "Jim",
        },
        {
          text: "Dirección general",
          value: "Joe",
        },
        {
          text: "Operaciones",
          value: "Jim",
        },
        {
          text: "CEO",
          value: "Jim",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "División superior",
      dataIndex: "divSuperior",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Colaboradores",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Nivel",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Subdivisiones",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Embajadores",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
  ];
  
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={pagination}
        rowSelection={{ ...rowSelection, checkStrictly }}
      />
    </div>
  );
};

export default TableComponent;
