import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useCountries from "../hooks/useCountries";
import CardCountry from "./CardCountry";
import CountrySkeleton from "./CountrySkeleton";
import CountryCardContainer from "./CountryCardContainer";

const MainCountryPage = () => {
  const { data, error, isLoading } = useCountries();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(data);
  return (
    <>
      {error && <Text>error</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 3, xl: 4 }}
        spacing={9}
        padding={8}
        justifyContent={"center"}
      >
        {isLoading &&
          skeleton.map((ske) => (
            <CountryCardContainer key={ske}>
              <CountrySkeleton />
            </CountryCardContainer>
          ))}
        {data?.map((cop, index) => (
          <CountryCardContainer key={index}>
            <CardCountry countries={cop} />
          </CountryCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainCountryPage;
