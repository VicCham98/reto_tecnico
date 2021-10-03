import { types } from "../actions";

const INIT_STATE = {
  loading: false,
  divisionesContent: [],
  divisionesFilter: [],
  pagination: {},
  filter: [],
  selectedValue: "division",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.division.getDivisiones: {
      return { ...state, loading: true };
    }
    case types.division.getDivisionesSuccess: {
      const { data } = action.payload;
      const division = data.divisiones.data;
      const page = {
        current: data.divisiones.current_page,
        pageSize: data.divisiones.per_page,
        showTotal: (total) => `Total colaboradores: ${data.divisiones.total}`,
        total: data.divisiones.total,
        showSizeChanger: true,
        onShowSizeChange: (current, pageSize) => console.log(current, pageSize),
      };
      const filter = [
        {
          text: 'nuevo',
          value: 'seleccion',
        },
        ...data.divisiones.data.map((item) => ({
          text: item.division,
          value: item.division,
        }))
      ];
      return {
        ...state,
        loading: false,
        divisionesContent: division,
        divisionesFilter: division,
        pagination: page,
        filter: filter,
      };
    }
    case types.division.setSelectedValue: {
      const { data } = action.payload;
      return { ...state, selectedValue: data };
    }
    case types.division.searchDivision: {
      const { data } = action.payload;
      let filter = [];
      if (data.length > 0) {
        filter = state.divisionesContent.filter((item) => {
          return item[state.selectedValue] === data;
        });
      } else {
        filter = state.divisionesContent;
      }

      return { ...state, selectedValue: data, divisionesFilter: filter };
    }
    default:
      return { ...state };
  }
};
