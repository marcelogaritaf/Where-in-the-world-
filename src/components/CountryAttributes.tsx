import React from "react";
import { country } from "../hooks/useCountries";
import {
  GridItem,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
interface Props {
  countries: country;
}
const CountryAttributes = ({ countries }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <GridItem>
        <Text>Native Name: {countries.name.common}</Text>
        <Text>Population: {countries.population}</Text>
        <Text>Region: {countries.region}</Text>
        <Text>Sub Region: {countries.subregion}</Text>
        <HStack>
          <Text>Capital:</Text>
          <List>
            {countries?.capital?.map((cap, index) => (
              <ListItem key={index}>{cap}</ListItem>
            ))}
          </List>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack>
          <Text>Top Level Domain:</Text>
          {countries.tld.map((c, index) => (
            <Text key={index}>{c}</Text>
          ))}
        </HStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default CountryAttributes;
