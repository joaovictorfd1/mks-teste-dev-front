import { useState } from "react";
import { useShopping } from "@/useContext/shopping/useShopping";
import { Container, Logo, QuantityOfProducts, Shopping, SubTitle, Title } from "./styles";
import IconCart from "../../assets/shopping-cart.png";
import Image from "next/image";
import FinishShopping from "../ResumeShopping/ResumeShopping";

const Header = () => {
  const { shopping } = useShopping();

  const [open, setOpen] = useState(false);
  const openShopping = () => setOpen(true);
  const closeShopping = () => setOpen(false);

  return (
    <Container>
      <Logo>
        <Title>MKS</Title>
        <SubTitle>Sistemas</SubTitle>
      </Logo>

      <Shopping onClick={openShopping}>
        <Image src={IconCart} alt="shopping cart" width={19} height={18} />

        <QuantityOfProducts>{shopping?.length}</QuantityOfProducts>
      </Shopping>
      {open && <FinishShopping closeShopping={closeShopping} />}
    </Container>
  );
};

export default Header;
