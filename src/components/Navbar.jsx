import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Link href="/" fontSize="xl" fontWeight="bold" mr={4}>
          Financial Times
        </Link>
        <Spacer />
        <Link href="/" mx={2}>
          Home
        </Link>
        <Link href="/world" mx={2}>
          World
        </Link>
        <Link href="/business" mx={2}>
          Business
        </Link>
        <Link href="/markets" mx={2}>
          Markets
        </Link>
        <Link href="/opinion" mx={2}>
          Opinion
        </Link>
        <Link href="/tech" mx={2}>
          Tech
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;