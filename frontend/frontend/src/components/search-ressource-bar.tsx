import SearchBar from "material-ui-search-bar";
import React, { FC, useState } from "react";
import styled from "styled-components";

interface SeachRessourceBarProps {
  searchRessource: (seachTerm: string) => void;
}

export const SeachRessourceBar: FC<SeachRessourceBarProps> = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchBarContainer>
      <SearchBar
        value={searchText}
        onChange={(newValue) => {
          console.log("change " + newValue);
          setSearchText(newValue);
        }}
        placeholder={"Search Ressource"}
        onRequestSearch={() => props.searchRessource(searchText)}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  border-style: solid;
`;

export default SeachRessourceBar;
function doSomethingWith(searchText: any): void {
  throw new Error("Function not implemented.");
}
