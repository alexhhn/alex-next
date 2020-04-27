import Card from "@material-ui/core/Card";
import styled from "styled-components";
import devices from "shared/media";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // any other props that come into the component
}

const CardList = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  /* Should be responsive,3,2,1 grid */
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${devices.desktopOnly} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media ${devices.laptopOnly} {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
`;

export default CardList;
