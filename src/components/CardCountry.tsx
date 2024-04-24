import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { country } from "../hooks/useCountries";
interface Props {
  countries: country;
}
const CardCountry = ({ countries }: Props) => {
  return (
    <Card boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
      <Image src={countries.flags.svg} />
      <CardBody>
        <Heading marginBottom={5} fontSize={"2xl"}>
          {countries.name.common}
        </Heading>
        <Text>Population: {countries.population}</Text>
        <Text>Region: {countries.region}</Text>
        <HStack>
          <Text>Capital:</Text>
          <List>
            {countries?.capital?.map((cap, index) => (
              <ListItem key={index}>{cap}</ListItem>
            ))}
          </List>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CardCountry;
