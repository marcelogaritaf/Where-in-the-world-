import BtnDetailPage from "../components/BtnDetailPage";
import { useParams, useSearchParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

const CountryDetails = () => {
  const { name } = useParams();
  const { data: country, isLoading, error } = useCountry(name!);
  if (isLoading) return <Spinner />;
  if (error || !country) throw error;
  return (
    <>
      <BtnDetailPage />
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading>{country?.name?.official}</Heading>
        </GridItem>
        <GridItem></GridItem>
      </SimpleGrid>
    </>
  );
};

export default CountryDetails;
