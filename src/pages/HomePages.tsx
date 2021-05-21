import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { useGetrepositories } from "../reducers/hoocks/useGetRepositories";
import { repositoriesActions } from "../reducers/actions";
import { selectSearchStr } from "../reducers/selectors";
import {
  getAllFromLocalStorage,
  setAllToLocalStorage,
} from "../helpers/localStorageHalper";

import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";

const HomePage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { getRepositories } = useGetrepositories();
  const searchResults = useSelector(selectSearchStr);

  const debounced = useDebouncedCallback((value: string) => {
    getRepositories(value);
    dispatch(repositoriesActions.setSinglSearch(value));
  }, 1500);

  // set search str from localStorage to redux store on innit
  useEffect(() => {
    getRepositories("");
    const searchParams = getAllFromLocalStorage();
    dispatch(repositoriesActions.setSearchArr(searchParams));
  }, [getRepositories, dispatch]);

  //set search str from redux store to localStorage beforeunload
  useEffect(() => {
    const setHandler = () => {
      setAllToLocalStorage(searchResults);
    };
    window.addEventListener("beforeunload", setHandler, false);
    return () => window.removeEventListener("beforeunload", setHandler, false);
  }, [searchResults]);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main debounced={debounced} />
      </Container>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #3a4047;
  position: relative;
  margin: 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;
