import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";

interface HitProductsProps {
  type: string;
}

export const HitProducts = ({ type }: HitProductsProps) => {
  return (
    <Grid
      gap={4}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2,1fr)"
      w="590px"
      bg={type === "high" ? "green.200" : "red.200"}
      p="1rem"
      borderRadius="8px"
      m="auto"
    >
      <ProductCard type={type} name="VALE3" />
      <ProductCard type={type} name="VALE5" />
      <ProductCard type={type} name="VALE3" />
      <ProductCard type={type} name="VALE3" />
    </Grid>
  );
};
