import React from "react";
import { DriversData } from "../types";
import { Paper } from "@material-ui/core";
import { FlexRow, FlexColumn } from "../styles";
import styled from "styled-components";

interface CardProps {
  driver: DriversData;
  handleFocusOnDriver: (id?: string) => void;
}

const StyledPaper = styled(Paper)({
  height: 100,
  margin: "9px 0px",
  padding: 12,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

const Image = styled.img({
  borderRadius: 120,
});

const Name = styled.div({
  fontSize: 20,
  fontWeight: 600,
  color: "black",
});

const Age = styled.div({
  fontSize: 20,
  fontWeight: 600,
  color: "grey",
});

const Card: React.FC<CardProps> = ({ driver, handleFocusOnDriver }) => {
  return (
    <StyledPaper
      onMouseEnter={() => handleFocusOnDriver(driver._id)}
      onMouseLeave={() => handleFocusOnDriver()}
    >
      <FlexRow>
        <Image
          style={{ marginRight: 16 }}
          src={driver.picture}
          alt="driver_image"
        />
        <FlexColumn>
          <Name>
            {driver.name.first} {driver.name.last}
          </Name>
          <Age>Age: {driver.age}</Age>
        </FlexColumn>
      </FlexRow>
    </StyledPaper>
  );
};

export default Card;
