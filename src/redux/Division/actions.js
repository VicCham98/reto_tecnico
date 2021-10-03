import { types } from "../actions";

export const getDivisiones = (page = 1, pageSize = 10, column = "division", search = "") => ({
  type: types.division.getDivisiones,
  payload: { page, pageSize, column, search },
});

export const getDivisionesSuccess = (data) => ({
  type: types.division.getDivisionesSuccess,
  payload: { data },
});

export const setSelectedValue = (data) => ({
  type: types.division.setSelectedValue,
  payload: { data },
});

export const searchDivision = (data) => ({
  type: types.division.searchDivision,
  payload: { data },
});
