import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.7);
  border: 1px solid blue
  border-bottom-color: rbga(${(props) => props.color}, 0.1);
  border-right-color: rbga(${(props) => props.color}, 1});
  border-top-color: rbga(${(props) => props.color}, 1});
  border-left-color: rbga(${(props) => props.color}, 0.1});
`;
