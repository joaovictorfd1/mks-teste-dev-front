import { useEffect, useState } from "react";
import { IProductDetail } from "@/interface/IProductDetail";
import { useShopping } from "@/useContext/shopping/useShopping";
import { ContainerProduct,
  AddAndSubQuant,
  ImgProduct,
  InformationsGeral,
  MiniCLose,
  NumberShoppingCard,
  Price,
  Quantity,
  QuantityText,
  TitleProduct
} from "./styles";

const ShoppingCard = ({ product }: { product: IProductDetail; }) => {
  const { deleteProduct, setTotal } = useShopping();
  const [count, setCount] = useState(1);

  const addPrice = () => {
    if (count < 99) {
      setCount((count) => count + 1);
    }
  };

  const subPrice = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  
  // useEffect for calculate new total and att the total of product actual
  useEffect(() => {
    const newTotal = Number(product.price) * count;

    setTotal((prevTotal) => ({
      ...prevTotal,
      [product.id]: newTotal,
    }));
    
  }, [count, product.id, product.price, setTotal]);

  return (
    <ContainerProduct>
      <ImgProduct
        src={product.photo}
        alt={"Imagem do produto: " + product.name}
      />
      <TitleProduct>{product.name}</TitleProduct>
      <InformationsGeral>
        <QuantityText>Qtd:</QuantityText>
        <Quantity>
          <AddAndSubQuant onClick={subPrice} data-testid="subPrice">-</AddAndSubQuant>
          <NumberShoppingCard data-testid="count">{count}</NumberShoppingCard>
          <AddAndSubQuant onClick={addPrice} data-testid="addPrice">+</AddAndSubQuant>
        </Quantity>
      </InformationsGeral>

      <Price>R${product.price.split(".")[0]}</Price>

      <MiniCLose
        onClick={() => deleteProduct(product.id)}
        data-testid="deleteProduct"
      >
        x
      </MiniCLose>
    </ContainerProduct>
  );
};

export default ShoppingCard;
