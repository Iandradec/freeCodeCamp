import styled from "styled-components";

// Glide wrapper style
const GlideWrapper = styled.div`
  .glide__slides {
    margin-bottom: 0;
  }
  .glide__controls {
    .glide__prev--area,
    .glide__next--area {
      cursor: pointer;
    }
  }
`;

// Glide slide wrapper style
// no me cambia nada de la imagen es dedicado a cada una de las slides
const GlideSlideWrapper = styled.li`
  position: relative;
`;

// // Button wrapper style
// const ButtonWrapper = styled.div`
//   display: inline-block;
// `;

// // ButtonControlWrapper style
// const ButtonControlWrapper = styled.div``;

// // BulletControlWrapper style
// const BulletControlWrapper = styled.div``;

// // BulletButton style
// const BulletButton = styled.button`
//   cursor: pointer;
//   width: 10px;
//   height: 10px;
//   margin: 4px;
//   border: 0;
//   padding: 0;
//   outline: none;
//   border-radius: 50%;
//   background-color: #d6d6d6;

//   &:hover,
//   &.glide__bullet--active {
//     background-color: #869791;
//   }
// `;

// // default button style
// const DefaultBtn = styled.button`
//   cursor: pointer;
//   margin: 10px 3px;
// `;

export { GlideSlideWrapper };
export default GlideWrapper;
