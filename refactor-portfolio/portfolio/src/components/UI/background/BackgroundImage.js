import React from "react";
import styled from "styled-components";

const StaticImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center center;
  margin-bottom: 0;
`;

const StaticImage = ({ imageSrc, altText }) => {
  return (
    <StaticImageWrapper>
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: "100%", height: "auto" }}
      />
    </StaticImageWrapper>
  );
};

export default StaticImage;
