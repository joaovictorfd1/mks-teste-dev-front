import { useEffect, useState } from "react";
import { IProductDetail } from "@/interface/IProductDetail";
import { useShopping } from "@/useContext/shopping/useShopping";
import { ContainerProduct,
  DecreaseAndIncrease,
  ImgProduct,
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
      <div>
        <QuantityText>Qtd:</QuantityText>
        <Quantity>
          <DecreaseAndIncrease onClick={subPrice} data-testid="subPrice">-</DecreaseAndIncrease>
          <NumberShoppingCard data-testid="count">{count}</NumberShoppingCard>
          <DecreaseAndIncrease onClick={addPrice} data-testid="addPrice">+</DecreaseAndIncrease>
        </Quantity>
      </div>

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
