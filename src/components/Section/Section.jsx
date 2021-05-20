import React from "react";
import { useSelector } from "react-redux";
import { selectRepositories } from "reducers/selectors";

import {
  SectionWrapper,
  Item,
  LinkItem,
  ItenProperties,
  ItemTile,
  Span,
} from "./styles";

export const Section = () => {
  const data = useSelector(selectRepositories);

  return (
    <SectionWrapper>
      {data?.map((item) => {
        return (
          <Item key={item?.id}>
            <LinkItem href={item?.html_url} target="blank">
              {item.name}
            </LinkItem>
            <ItemTile>
              <ItenProperties>Language: </ItenProperties>{" "}
              <Span>{item.language}</Span>
            </ItemTile>
            <ItemTile>
              <ItenProperties>Description: </ItenProperties>{" "}
              <Span>{item.description}</Span>
            </ItemTile>
          </Item>
        );
      })}
    </SectionWrapper>
  );
};
