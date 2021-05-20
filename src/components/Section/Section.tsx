import React from "react";
import { useSelector } from "react-redux";
import { selectRepositories } from "../../reducers/selectors";

import {
  SectionWrapper,
  Item,
  LinkItem,
  ItenProperties,
  ItemTile,
  Span,
} from "./styles";

export const Section: React.FC<{}> = () => {
  const data = useSelector(selectRepositories);
  interface Data {
    id: number;
    html_url: string;
    name: string;
    language: string;
    description: string;
  }
  return (
    <SectionWrapper>
      {data?.map((item: Data) => {
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
