import { gql } from "@apollo/client";

const LoadProducts = gql`
query
{
  category
  {
    products
    {
      name
    }
  }
}
`;

export default LoadProducts;
