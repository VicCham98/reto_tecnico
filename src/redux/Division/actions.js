import { types } from "../actions";

export const getDivisiones = (page = 1, pageSize = 10) => ({
  type: types.division.getDivisiones,
  payload: { page, pageSize },
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
