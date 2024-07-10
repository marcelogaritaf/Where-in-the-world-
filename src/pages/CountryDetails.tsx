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
      <SimpleGrid columns={{ base: 1, md: 2 }} paddingX={"100px"}>
        <GridItem>
          {data.map((d, index) => (
            <Image src={d.flags.png} height={"280px"} key={index} />
          ))}
        </GridItem>
        <GridItem>
          {data.map((d, index) => (
            <Box key={index}>
              <Heading marginBottom={5}>{d.name.official}</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacingY={"10px"}>
                <GridItem>
                  <Text>Population: {d.population.toLocaleString()}</Text>
                  <Text>Region: {d.region}</Text>
                  <Text>Sub Region: {d.subregion}</Text>
                  <Text>Capital: {d.capital}</Text>
                </GridItem>
                <GridItem>
                  <Text>Top Level Domian: {d.tld.join(",")}</Text>
                  <Text>
                    Currencies:{" "}
                    {Object.entries(d.currencies).map(
                      ([code, currency], index) => (
                        <span key={index}>
                          {currency.name} ({currency.symbol})
                          {index < Object.entries(d.currencies).length - 1
                            ? ","
                            : " "}
                        </span>
                      )
                    )}
                  </Text>
                  <Text>
                    Languages: {Object.values(d.languages).join(", ")}
                  </Text>
                </GridItem>
              </SimpleGrid>
              <Text marginTop={"50px"}>
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
