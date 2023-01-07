import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

// const data = {
//     "id": 2,
//     "email": "janet.weaver@reqres.in",
//     "first_name": "Janet",
//     "last_name": "Weaver",
//     "avatar": "https://reqres.in/img/faces/2-image.jpg"
// }

export default function UserCard({data}) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={data.avatar}
        alt={`${data.first_name} ${data.last_name}`}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{`${data.first_name} ${data.last_name}`}</Heading>

          <Text py="2">
            {`Email: ${data.email}`}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Learn more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
