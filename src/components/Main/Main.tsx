import { useState, useEffect } from "react";
import { useShopping } from "@/useContext/shopping/useShopping";
import { motion } from "framer-motion";
import { Container, GridOfProducts, MessageError, SucessNotification } from "./styles";
import { useProductsData } from "@/useContext/data/useProductData";
import Card from "../Card/Card";
import Skeleton from "../Skeleton/Skeleton";

const Main = () => {
  const [prevLength, setPrevLength] = useState(0);

  const { data, error } = useProductsData();

  const { shopping } = useShopping();

  
  // useEffect about control a notification of itens add in shopping cart
  useEffect(() => {
    if (shopping?.length > prevLength) {
      const timer = setTimeout(() => {
        setPrevLength(shopping?.length);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [prevLength, shopping]);

  if (error)
    return (
      <Container>
        <MessageError>
          Ops! Aconteceu um erro. Messagem: <strong>{error.message}</strong>
        </MessageError>
      </Container>
    );

  return (
    <Container>
      <GridOfProducts>
        {data
          ? data.products.map((product) => (
            <Card
              key={product.id}
              description={product.description}
              image={product.photo}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))
          : Array.from({ length: 8 }, (_, i) => <Skeleton key={i} />)}
      </GridOfProducts>

      {shopping?.length > prevLength && (
        <SucessNotification>
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            Item adicionado ao carrinho!
          </motion.div>
        </SucessNotification>
      )}
    </Container>
  );
};

export default Main;
