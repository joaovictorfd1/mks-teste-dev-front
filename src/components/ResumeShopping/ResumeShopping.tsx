import { useShopping } from "@/useContext/shopping/useShopping";
import CardOfShopping from "../ShoppingCard/ShoppingCard";
import {
  Close,
  Container,
  Finish,
  Products,
  Title,
  TitleAndClose,
  Total,
  TotalAndPrice
} from "./styles";

const ResumeShopping = ({ closeShopping }: { closeShopping: () => void; }) => {
  const { shopping, total } = useShopping();

  // Add sum of values the list products in cart shopping
  const totalSum = total
    && typeof total === 'object'
    ? Object.values(total).reduce((sum, value) => sum + value, 0)
    : 0; 

  return (
    <Container>
      <TitleAndClose>
        <Title>Carrinho de compras</Title>
        <Close onClick={closeShopping}>X</Close>
      </TitleAndClose>

      <Products>
        {shopping?.length > 0 ? (
          shopping?.map((product) => (
            <CardOfShopping product={product} key={product.id} />
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Seu carrinho está vazio.
          </p>
        )}
      </Products>

      <TotalAndPrice>
        <Total>Total:</Total>
        <Total>R$ {shopping?.length > 0 ? totalSum : 0}</Total>
      </TotalAndPrice>

      <Finish>Finalizar Compra</Finish>
    </Container>
  );
};

export default ResumeShopping;
