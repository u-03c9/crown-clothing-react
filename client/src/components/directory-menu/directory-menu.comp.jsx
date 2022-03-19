import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.comp";

const DirectoryMenu = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="w-full flex flex-wrap justify-between">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
