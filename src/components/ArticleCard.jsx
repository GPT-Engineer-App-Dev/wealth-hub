import { Box, Image, Text, Link } from "@chakra-ui/react";

const ArticleCard = ({ title, image, link }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
      <Image src={image} alt={title} />
      <Box p={4}>
        <Link href={link} fontWeight="bold" fontSize="xl" mb={2} display="block">
          {title}
        </Link>
      </Box>
    </Box>
  );
};

export default ArticleCard;