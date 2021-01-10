import styled from "styled-components";
import { Paper, Select } from "@material-ui/core";

export const Wrapper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: 50,
  background: "#afa3a3 !important",
});

export const FlexColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const FlexRow = styled.div({
  display: "flex",
  width: "100%",
});

export const Header = styled.h2({
  color: "black",
});

export const StyledSelect = styled(Select)({
  "&.MuiListItem-root.Mui-selected": {
    backgroundColor: "transparent",
  },
  width: 50,
});
