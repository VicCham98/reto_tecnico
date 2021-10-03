import React, { useState, useEffect } from "react";
import { Table, Radio, Input, Select } from "antd";
import axios from "axios";

const { Option } = Select;
const { Search } = Input;

const TableComponent = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [divisiones, setDivisiones] = useState([]);
  const [divisionesBack, setDivisionesBack] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const columns = [
    {
      title: "División",
      dataIndex: "division",
      filters: filter,
      onFilter: (value, record) => record.division === value,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.division.length - b.division.length,
    },
    {
      title: "División superior",
      dataIndex: "divisionSup",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Colaboradores",
      dataIndex: "colaboradores",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.colaboradores - b.colaboradores,
    },
    {
      title: "Nivel",
      dataIndex: "nivel",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.nivel - b.nivel,
    },
    {
      title: "Subdivisiones",
      dataIndex: "subDivision",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.subDivision - b.subDivision,
    },
    {
      title: "Embajadores",
      dataIndex: "embajador",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.embajador - b.embajador,
    },
  ];
  const [selectedValue, setSelectedValue] = useState(columns[0].dataIndex);

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

  const options = [
    { label: "Listado", value: "listado" },
    { label: "Árbol", value: "arbol" },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
    callDivisiones(pagination.current);
  };

  const onSearch = (value) => {
    if (value.length > 0) {
      setDivisiones(() =>
        divisionesBack.filter(
          (item) => item[selectedValue].toString() === value.toString()
        )
      );
    }
  };

  const callDivisiones = async (page = 1, pageSize = 10) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `http://localhost/retoTecnico_backend/api/div/divisiones?page=${page}`,
        { pageSize }
      );
      setDivisiones(data.divisiones.data);
      setDivisionesBack(data.divisiones.data);
      setPagination({
        current: data.divisiones.current_page,
        pageSize: data.divisiones.per_page,
        showTotal: (total) => `Total ${data.divisiones.total} items`,
        total: data.divisiones.total,
        showSizeChanger: true,
        onShowSizeChange: (current, pageSize) => console.log(current, pageSize),
      });
      setFilter(
        data.divisiones.data.map((item) => ({
          text: item.division,
          value: item.division,
        }))
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    callDivisiones();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 25,
          marginBottom: 25,
        }}
      >
        <Radio.Group
          options={options}
          onChange={(val) => setSelectedValue(val)}
          value="listado"
          optionType="button"
        />
        <Input.Group
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <Select
            style={{ width: 150, marginRight: 15 }}
            defaultValue={columns[0].dataIndex}
          >
            {columns.map((item) => {
              return (
                <Option key={item.dataIndex} value={item.dataIndex}>
                  {item.title}
                </Option>
              );
            })}
          </Select>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Input.Group>
      </div>
      <Table
        loading={loading}
        bordered
        columns={columns}
        dataSource={divisiones}
        onChange={onChange}
        pagination={pagination}
        rowSelection={{ ...rowSelection, checkStrictly }}
      />
    </div>
  );
};

export default TableComponent;
