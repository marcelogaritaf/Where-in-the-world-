import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardCountry = () => {
  return (
    <Card>
      <Image src={""} />
      <CardBody>
        <Heading fontSize={"2xl"}>Country Name</Heading>
        <Text>Population</Text>
        <Text>Region</Text>
        <Text>Capital</Text>
      </CardBody>
    </Card>
  );
};

export default CardCountry;
