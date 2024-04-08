
import { BgPrice, Buy, Container, Description, Price, ProductImg, Purchase, Title, TitleAndPrice } from "./styles";
import Icon from "../../assets/shopping-bag.png";
import Image from "next/image";
import { ICard } from "@/interface/ICard";
import { useShopping } from "@/useContext/shopping/useShopping";
import { useAnimation, motion } from "framer-motion";


const Card = ({ image, name, price, description, id }: ICard) => {
  const { buyProduct } = useShopping();
  
  const animeScale = useAnimation();
  return (
    <Container>
      <ProductImg whileHover={{ scale: 1.1 }} src={image} alt={`Image of product: ${name}`} />
      <TitleAndPrice>
        <Title>{name}</Title>

        <BgPrice>
          <Price>R${price.split(".")[0]}</Price>
        </BgPrice>
      </TitleAndPrice>

      <Description>{description}</Description>

      <Buy
        onHoverStart={() => animeScale.start({ scale: 0.9, color: "#eee" })}
        onHoverEnd={() => animeScale.start({ scale: 1.0, color: "#fff" })}
        onClick={() => buyProduct(id)}
      >
        <motion.div animate={animeScale}>
          <Image src={Icon} alt="Icon of a bag" width={16} height={16} />
        </motion.div>

        <Purchase animate={animeScale}>COMPRAR</Purchase>
      </Buy>
    </Container>
  );
};

export default Card;
