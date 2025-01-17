import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors.js';

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    }
);