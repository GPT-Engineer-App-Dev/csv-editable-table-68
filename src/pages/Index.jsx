import { Container, VStack, Heading } from "@chakra-ui/react";
import CSVUploader from "../components/CSVUploader";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">CSV Upload and Edit Tool</Heading>
        <CSVUploader />
      </VStack>
    </Container>
  );
};

export default Index;