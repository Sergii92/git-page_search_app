import React from "react";
import { useSelector } from "react-redux";
import { selectSearchStr } from "../../reducers/selectors";

import { AsideWrapper, Input, List, ListItem, AsideHeader } from "./styles";

export type Props = {
  debounced: (value: string) => void;
};

export const Aside: React.FC<Props> = ({ debounced }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounced(e.currentTarget.value);
  };
  const searchParams: string[] = useSelector(selectSearchStr);

  return (
    <AsideWrapper>
      <Input onChange={onChange} />
      <AsideHeader>Search history</AsideHeader>
      <List>
        {searchParams.map((item: string) => {
          return <ListItem key={item}>{item}</ListItem>;
        })}
      </List>
    </AsideWrapper>
  );
};
