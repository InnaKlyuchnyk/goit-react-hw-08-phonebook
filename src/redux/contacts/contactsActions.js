import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess'
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');

// import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     value: [],
//   },
//   reducers: {
//     fetchContactsSuccess: (state, action) => (state.value = action.payload),
//     addContactSuccess: (state, action) => [action.payload, ...state],
//     deleteContactSuccess: (state, action) =>
//       state.filter(({ id }) => id !== action.payload),
//   },
// });

// const loadingSlice = createSlice({
//   name: 'loading',
//   initialState: {
//     value: false,
//   },
//   reducer: {
//     fetchContactsRequest: () => true,
//     fetchContactsSuccess: () => false,
//     fetchContactsError: () => false,
//     addContactRequest: () => true,
//     addContactSuccess: () => false,
//     addContactError: () => false,
//     deleteContactRequest: () => true,
//     deleteContactSuccess: () => false,
//     deleteContactError: () => false,
//   },
// });

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     value: '',
//   },
//   reducers: {
//     filter(state, action) {
//       state.value = action.payload;
//     },
//   },
// });

// const contactsReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   loading: loadingSlice.reducer,
//   filter: filterSlice.reducer,
// });

// export default contactsReducer;
