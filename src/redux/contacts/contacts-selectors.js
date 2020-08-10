import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getIsLoading = state => state.contacts.isLoading;

const contactsFilter = createSelector(
  [getItems, getFilter],
  (contactsList, filter) => {
    const normilizedFilter = filter.toLowerCase();
    return contactsList.filter(({ name }) =>
      name.toLowerCase().includes(normilizedFilter),
    );
  },
);

export default {
  getFilter,
  getIsLoading,
  getItems,
  contactsFilter,
};
