import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";

const propertyDetails = () => <Box maxWidth="1000px" margin="auto" p="4"></Box>;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=`
  );
}
