import React from "react";
import styled from "styled-components";

const carImgSrc = "https://img.icons8.com/color/48/000000/car.png";

interface CarProps {
  isHovered: boolean;
}

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Image = styled.img<{ isHovered: boolean }>(({ isHovered }) => ({
  background: isHovered ? "yellow" : "initial",
  borderRadius: 120,
  padding: 12,
}));

const CarComponent: React.FC<CarProps> = ({ isHovered }) => {
  return (
    <Wrapper>
      <Image
        isHovered={isHovered}
        src={carImgSrc}
        alt="car"
        width={30}
        height={30}
      />
    </Wrapper>
  );
};

export default CarComponent;
