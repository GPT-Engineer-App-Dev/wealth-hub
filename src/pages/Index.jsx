import { Container, Flex, Box, VStack, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="3" mr={{ md: 4 }}>
            <Heading as="h2" size="lg" mb={4}>
              Top News
            </Heading>
            <VStack spacing={4}>
              <ArticleCard
                title="Breaking News: Market Hits Record Highs"
                image="https://via.placeholder.com/800x400"
                link="#"
              />
              <ArticleCard
                title="World Leaders Meet to Discuss Climate Change"
                image="https://via.placeholder.com/800x400"
                link="#"
              />
              <ArticleCard
                title="Tech Innovations of 2023"
                image="https://via.placeholder.com/800x400"
                link="#"
              />
            </VStack>
          </Box>
          <Box flex="1" mt={{ base: 4, md: 0 }}>
            <Heading as="h2" size="lg" mb={4}>
              Trending
            </Heading>
            <VStack spacing={4}>
              <ArticleCard
                title="New Policies in the Tech Industry"
                image="https://via.placeholder.com/400x200"
                link="#"
              />
              <ArticleCard
                title="Economic Forecast for the Next Quarter"
                image="https://via.placeholder.com/400x200"
                link="#"
              />
              <ArticleCard
                title="Health Benefits of a Balanced Diet"
                image="https://via.placeholder.com/400x200"
                link="#"
              />
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;