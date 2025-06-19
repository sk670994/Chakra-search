import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  Link,
  Heading,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const MySearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const allBlogs = [
    "https://www.hexahome.in/overview/wazirabad-new-delhi-overview/",
    "https://www.hexahome.in/overview/vinoba-puri-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/vasant-vihar-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/tilak-nagar-in-delhi-overview/",
    "https://www.hexahome.in/overview/sector-21-dwarka-delhi-overview/",
    "https://www.hexahome.in/overview/sant-nagar-burari-new-delhi-overview/",
    "https://www.hexahome.in/overview/sangam-vihar-south-delhi-overview/",
    "https://www.hexahome.in/overview/saket-south-delhi-overview/",
    "https://www.hexahome.in/overview/sadiq-nagar-new-delhi-overview/",
    "https://www.hexahome.in/overview/rohini-sector-8-in-delhi-overview/",
    "https://www.hexahome.in/overview/rohini-sector-8-delhi/",
    "https://www.hexahome.in/overview/rk-puram-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/ramesh-nagar-delhi-overview/",
    "https://www.hexahome.in/overview/rajouri-garden-delhi-overview/",
    "https://www.hexahome.in/overview/rajiv-chowk-in-delhi/",
    "https://www.hexahome.in/overview/rajiv-chowk-delhi/",
    "https://www.hexahome.in/overview/punjabi-bagh-west-delhi-overview/",
    "https://www.hexahome.in/overview/preet-vihar-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/pragati-maidan-new-delhi/",
    "https://www.hexahome.in/overview/pankha-road-delhi-overview/",
    "https://www.hexahome.in/overview/paharganj-metro-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/old-rajendra-nagar-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/old-jnu-campus-delhi-overview/",
    "https://www.hexahome.in/overview/new-ashok-nagar-east-delhi-overview/",
    "https://www.hexahome.in/overview/nehru-nagar-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/meera-bagh-in-delhi-overview/",
    "https://www.hexahome.in/overview/mayapuri-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/mansa-ram-park-in-delhi-overview/",
    "https://www.hexahome.in/overview/malka-ganj-north-delhi-overview/",
    "https://www.hexahome.in/overview/mahavir-nagar-new-delhi-overview/",
    "https://www.hexahome.in/overview/lajpat-nagar-south-delhi-overview/",
    "https://www.hexahome.in/overview/krishna-nagar-east-delhi-overview/",
    "https://www.hexahome.in/overview/khan-market-in-delhi-overview/",
    "https://www.hexahome.in/overview/karol-bagh-metro-station-in-delhi-overview/",
    "https://www.hexahome.in/overview/janakpuri-new-delhi-overview/",
    "https://www.hexahome.in/overview/jamia-nagar-delhi-overview/",
    "https://www.hexahome.in/overview/hari-nagar-ashram-new-delhi-overview/",
    "https://www.hexahome.in/overview/gtb-nagar-new-delhi-overview/",
    "https://www.hexahome.in/overview/greater-kailash-south-delhi-overview/",
    "https://www.hexahome.in/overview/govindpuri-new-delhi-overview/",
    "https://www.hexahome.in/overview/ganesh-nagar-in-delhi-overview/",
    "https://www.hexahome.in/overview/dilshad-garden-east-delhi-overview/",
    "https://www.hexahome.in/overview/defence-colony-south-delhi-overview/",
    "https://www.hexahome.in/overview/block-c-yamuna-vihar-east-delhi-overview/",
    "https://www.hexahome.in/overview/bharat-mandapam-new-delhi-overview/",
    "https://www.hexahome.in/overview/bank-enclave-in-new-delhi-overview/",
    "https://www.hexahome.in/overview/alipur-north-delhi-overview/",
    "https://www.hexahome.in/overview/aiims-metro-station-new-delhi/",
    "https://www.hexahome.in/blog/guides/select-city-walk-nearest-metro-station-in-delhi/",
    "https://www.hexahome.in/blog/guides/sadar-bazar-market-in-delhi/",
    "https://www.hexahome.in/blog/guides/rk-ashram-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/rani-bagh-market-delhi/",
    "https://www.hexahome.in/blog/guides/pitampura-new-delhi-overview/",
    "https://www.hexahome.in/blog/guides/patel-nagar-metro-in-delhi/",
    "https://www.hexahome.in/blog/guides/nirman-vihar-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/mahipalpur-nearest-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/lodhi-garden-nearest-metro-in-delhi/",
    "https://www.hexahome.in/blog/guides/list-of-delhi-metro-station/",
    "https://www.hexahome.in/blog/guides/kashmere-gate-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/humayuns-tomb-nearest-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/hauz-khas-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/guru-dronacharya-metro-station-delhi/",
    "https://www.hexahome.in/blog/guides/delhi-metro-yellow-line/",
    "https://www.hexahome.in/blog/guides/delhi-metro-violet-line/",
    "https://www.hexahome.in/blog/guides/delhi-metro-pink-line/",
    "https://www.hexahome.in/blog/guides/delhi-metro-magenta-line/",
    "https://www.hexahome.in/blog/guides/delhi-metro-green-line/",
    "https://www.hexahome.in/blog/guides/delhi-metro-golden-line/",
    "https://www.hexahome.in/blog/guides/delhi-laxmi-nagar-metro-station/",
    "https://www.hexahome.in/blog/guides/delhi-cantt-nearest-metro-station/",
    "https://www.hexahome.in/blog/guides/buddha-jayanti-park-in-delhi/",
    "https://www.hexahome.in/blog/guides/barakhamba-metro-station-in-delhi/",
    "https://www.hexahome.in/blog/guides/anand-vihar-metro-station-in-delhi/",
    "https://www.hexahome.in/blog/guides/all-about-delhi-rent-control-act/",
    "https://www.hexahome.in/blog/guides/airport-metro-delhi-route-timings-fare/",
  ];

  useEffect(() => {
    if (query.trim()) {
      const filtered = allBlogs.filter((blog) =>
        blog.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  return (
    <Container maxW="container.md" pt="100px" pb="20">
      <Flex direction="column" align="center">
        <Heading as="h1" size="xl" mb={8}>
          Search Here
        </Heading>

        <InputGroup mb={4}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Type to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            width="100%"
            size="lg"
          />
        </InputGroup>

        {showDropdown && (
          <Box
            mt={2}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            p={4}
            width="100%"
            maxH="300px"
            overflowY="auto"
            zIndex="10"
          >
            {results.length > 0 ? (
              <VStack align="start" spacing={2}>
                {results.map((result, index) => (
                  <Link
                    href={result}
                    isExternal
                    key={index}
                    fontSize="sm"
                    color="blue.600"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {result.split("/").filter(Boolean).pop().replace(/-/g, " ")}
                  </Link>
                ))}
              </VStack>
            ) : (
              <Text fontSize="sm" color="gray.500">
                No results found.
              </Text>
            )}
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default MySearchInput;
