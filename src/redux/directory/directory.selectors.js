import { createSelector } from "reselect";

const directoryState = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [directoryState],
  (directory) => directory.sections
);
