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
import { useParams } from "react-router-dom";
import BtnDetailPage from "../components/BtnDetailPage";
import useCountry from "../hooks/useCountry";

const CountryDetails = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useCountry(name!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <BtnDetailPage />
      <SimpleGrid
        paddingX={"50px"}
        templateColumns={{ base: "1fr", lg: "550px 1fr" }}
        spacingY={"50px"}
      >
        <GridItem>
          {data.map((d, index) => (
            <Image src={d.flags.png} height={"280px"} key={index} />
          ))}
        </GridItem>
        <GridItem>
          {data.map((d, index) => (
            <Box key={index}>
              <Heading marginBottom={5}>{d.name.official}</Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacingX={"10px"}
                spacingY={"50px"}
              >
                <GridItem>
                  <Text>
                    <b>Native Name: </b>
                    {Object.entries(d.name.nativeName).map(
                      ([code, nativeName], index) => (
                        <span key={code}>
                          {nativeName.common}
                          {index < Object.entries(d.name.nativeName).length - 1
                            ? ","
                            : " "}
                        </span>
                      )
                    )}
                  </Text>
                  <Text>
                    <b>Population: </b> {d.population.toLocaleString()}
                  </Text>
                  <Text>
                    <b>Region:</b> {d.region}
                  </Text>
                  <Text>
                    <b>Sub Region:</b> {d.subregion}
                  </Text>
                  <Text>
                    <b>Capital:</b> {d.capital}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text>
                    <b>Top Level Domian:</b> {d.tld.join(",")}
                  </Text>
                  <Text>
                    <b>Currencies:</b>{" "}
                    {Object.entries(d.currencies).map(
                      ([code, currency], index) => (
                        <span key={code}>
                          {currency.name} ({currency.symbol})
                          {index < Object.entries(d.currencies).length - 1
                            ? ","
                            : " "}
                        </span>
                      )
                    )}
                  </Text>
                  <Text>
                    <b>Languages:</b> {Object.values(d.languages).join(", ")}
                  </Text>
                </GridItem>
              </SimpleGrid>
              <Text marginTop={"50px"}>
                <b>Border Countries:</b>
                {"  "}
                {d.borders?.map((bor, index) => (
                  <Button
                    marginRight={4}
                    marginLeft={4}
                    height={"20px"}
                    fontSize={"15px"}
                    width={"100px"}
                    borderRadius={"2px"}
                    key={index}
                    display={"inline-block"}
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
