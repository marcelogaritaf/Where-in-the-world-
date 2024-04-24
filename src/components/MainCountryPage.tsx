import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useCountries from "../hooks/useCountries";
import CardCountry from "./CardCountry";

const MainCountryPage = () => {
  const { data, error, isLoading } = useCountries();
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
        {isLoading && <Spinner />}
        {data?.map((cop, index) => (
          <CardCountry key={index} countries={cop} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainCountryPage;
