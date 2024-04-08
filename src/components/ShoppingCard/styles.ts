import styled from "styled-components";
import { Close } from "../ResumeShopping/styles";

export const ContainerProduct = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  border-radius: 8px;
  background: ${(props) => props.theme.colors?.white};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 12px;
`;

export const ImgProduct = styled.img`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleProduct = styled.p`
  color: ${(props) => props.theme.colors?.card.text};
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

export const QuantityText = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 10px;
  font-weight: 400;
  padding: 0px 0px 3px 0px;
`;

export const Quantity = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background-color: ${(props) => props.theme.colors?.white};
`;

export const AddAndSubQuant = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const NumberShoppingCard = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 14px;
  font-weight: 400;
  padding: 0 5px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
`;

export const Price = styled.p`
  color: ${(props) => props.theme.colors?.black};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  padding: 10px 0px 0px 0px;
`;

export const MiniCLose = styled(Close)`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  z-index: 1000;
`;

export const InformationsGeral = styled.div`
  display: block;
`
