import styled from "styled-components";
import { LinearProgress, Paper, Button } from "@material-ui/core";

export const Wrapper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: 50,
  background: "#afa3a3 !important",
});

export const FlexBox = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "max-content",
  textAlign: "center",
});

export const FlexRow = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ListOfEvents = styled.div({
  maxHeight: 300,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  "&::-webkit-scrollbar-thumb": {
    background: "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)",
    borderRadius: 30,
    boxShadow:
      "inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25)",
  },
  "&::-webkit-scrollbar": {
    width: "1em",
  },
  "&::-webkit-scrollbar-track": {
    background: "linear-gradient(90deg,#434343,#434343 1px,#111 0,#111)",
    borderRadius: 8,
  },
});

export const ArtistName = styled.span({
  fontSize: 32,
  fontWeight: 600,
  color: "black",
  textShadow: "0px 2px #a09e9e",
});

export const Title = styled.h2({
  color: "black",
});

export const SubTitle = styled.h3({
  color: "black",
});

export const TextFieldWrapper = styled.div({
  padding: "36px 0",
  width: "100%",
  ["@media (min-width: 768px)"]: {
    width: "40%",
  },
});

export const ArtistImage = styled.img({
  width: 300,
  height: 300,
  borderRadius: 65,
});

export const LinearProgressWithColor = styled(LinearProgress)({
  width: "100%",
  background: "red",
});

export const FavEvent = styled.span({
  padding: 8,
  fontWeight: 600,
  fontSize: 14,
});

export const Event = styled(FavEvent)({
  cursor: "pointer",
  "&:hover": {
    color: "orange",
  },
});

export const FlexBoxWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
  ["@media (min-width: 768px)"]: {
    flexDirection: "row",
  },
});

export const InfoSpan = styled.span({
  color: "rgba(0, 0, 0, 0.87)",
  fontSize: 16,
});

export const FlexBoxWithSelf = styled(FlexBox)({
  ["@media (min-width: 768px)"]: {
    alignSelf: "end",
  },
});

export const StyledButton = styled(Button)({
  width: "200px !important",
  margin: "24px auto !important",
  background: "orange !important",
  "&:hover": {
    opacity: "0.7 !important",
    background: "orange !important",
  },
});

export const Marker = styled.div({
  width: 30,
  height: 30,
  borderRadius: "50% 50% 50% 0",
  background: "#00cae9",
  position: "absolute",
  transform: "rotate(-45deg)",
  left: "50%",
  top: "50%",
  margin: "-20px 0 0 -20px",
});
