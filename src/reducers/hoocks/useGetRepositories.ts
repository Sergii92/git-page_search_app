import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { repositoriesActions } from "../actions";

import { API } from "../../constants/api";

export const useGetrepositories = () => {
  const dispatch = useDispatch();
  const getRepositories = useCallback(
    async (value: string) => {
      const search =
        value.length > 0
          ? `${value}+language:javascript`
          : `language:javascript`;

      try {
        const responce = await fetch(`${API.REPOSITORIES}?q=${search}`);
        if (responce.status !== 200) {
          throw new Error(`${responce.status}`);
        }
        const data = await responce.json();

        dispatch(repositoriesActions.fillrepositories(data.items));
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch]
  );
  return { getRepositories };
};
