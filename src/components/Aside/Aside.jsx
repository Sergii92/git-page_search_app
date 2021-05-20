import React from "react";
import { useSelector } from "react-redux";
import { selectSearchStr } from "reducers/selectors";

import { AsideWrapper, Input, List, ListItem } from "./styles";

export const Aside = ({ debounced }) => {
  const onChange = (e) => {
    debounced(e.currentTarget.value);
  };
  const searchParams = useSelector(selectSearchStr);

  return (
    <AsideWrapper>
      <Input onChange={onChange} />
      <List>
        {searchParams?.map((item) => {
          return <ListItem key={item}>{item}</ListItem>;
        })}
      </List>
    </AsideWrapper>
  );
};
