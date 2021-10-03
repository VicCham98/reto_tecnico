import React, { useEffect } from "react";
import { Table, Radio, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDivisiones, setSelectedValue } from "../redux/Division/actions";

const { Option } = Select;
const { Search } = Input;

const TableComponent = () => {
  const dispatch = useDispatch();
  const { divisionesFilter, filter, pagination, loading, selectedValue } =
    useSelector((state) => state.division);
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
    const page = pagination.current;
    const pageSize = pagination.pageSize;
    dispatch(getDivisiones(page, pageSize));
  };

  const onSearch = (value) => {
    dispatch(getDivisiones(1, 10, selectedValue, value));
  };

  useEffect(() => {
    dispatch(getDivisiones());
  }, [dispatch]);

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
        <Radio.Group options={options} value="listado" optionType="button" />
        <Input.Group
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <Select
            style={{ width: 150, marginRight: 15 }}
            defaultValue={columns[0].dataIndex}
            onChange={(val) => dispatch(setSelectedValue(val))}
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
        dataSource={divisionesFilter}
        onChange={onChange}
        pagination={pagination}
        rowSelection={{ ...rowSelection }}
      />
    </div>
  );
};

export default TableComponent;
