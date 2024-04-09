// import { Card, CardBody , Stack, Image, Center, Heading, Text, Box, LinkBox, LinkOverlay} from "@chakra-ui/react";
// import NextLink from 'next/link'

// export default function ProjectCard({ children, title, thumbnail, category='projects', id}) {
//     return(
//         <>
//         <Box w="100%" textAlign="center">
//             <LinkBox 
//             cursor="pointer"
//             as={NextLink}
//             href={`/${category}/${id}`}
//             scroll={false}>
//                 <Card size='sm'>
//                     <CardBody>
//                     <Image src={thumbnail} alt={title} borderRadius="sm" />
//                 <Stack mt='6' spacing='3'>
//                     <Center>
//                         <Heading size='md'>{title}</Heading>
//                     </Center>
//                     <LinkOverlay as="div" href={`/${category}/${id}`}> 
//                         <Text fontSize='sm' textAlign='center'>
//                             {children}
//                         </Text>
//                     </LinkOverlay>
//                 </Stack>
//                     </CardBody >
//                 </Card>
//             </LinkBox>
//         </Box>
//         </>
//     )
// }

import { Box, Image, Stack, Center, Heading, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function ProjectCard({ children, title, thumbnail, category = 'projects', id }) {
    return (
        <Box w="100%" textAlign="center">
            <NextLink href={`/${category}/${id}`} passHref>
                    <Box as="article" p="4" borderWidth="1px" rounded="md" overflow="hidden">
                        <Image src={thumbnail} alt={title} borderRadius="md" />
                        <Stack mt="4" spacing="2">
                            <Center>
                                <Heading size="md">{title}</Heading>
                            </Center>
                            <Text fontSize="sm" textAlign="center">{children}</Text>
                        </Stack>
                    </Box>
            </NextLink>
        </Box>
    );
}
