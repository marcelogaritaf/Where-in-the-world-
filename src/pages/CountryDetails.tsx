import BtnDetailPage from "../components/BtnDetailPage";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import {
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

const CountryDetails = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useCountry(name!);
  console.log(data);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <BtnDetailPage />
      <SimpleGrid columns={{ base: 1, md: 2 }} paddingX={"55px"}>
        <GridItem>
          {data.map((d, index) => (
            <Image src={d.flags.png} height={"250px"} key={index} />
          ))}
        </GridItem>
        <GridItem>
          {data.map((d, index) => (
            <Box key={index}>
              <Heading>{d.name.official}</Heading>
              <Text>Population: {d.population}</Text>
              <Text>Region: {d.region}</Text>
              <Text>Sub Region: {d.subregion}</Text>
              <Text>Capital: {d.capital}</Text>
              <Text>Top Level Domian: {d.tld}</Text>
              <Text>Languages: {d.languages.code}</Text>
              <Text>
                Border Countries:{"  "}
                {d.borders?.map((bor, index) => (
                  <Button
                    marginRight={4}
                    marginLeft={4}
                    height={"20px"}
                    fontSize={"15px"}
                    width={"100px"}
                    borderRadius={"2px"}
                    key={index}
                  >
                    {bor}
                  </Button>
                ))}
              </Text>
            </Box>
          ))}
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default CountryDetails;
