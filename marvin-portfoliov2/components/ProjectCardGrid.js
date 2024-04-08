import { Card, CardBody , Stack, Image, Center, Heading, Text, Box, LinkBox, LinkOverlay} from "@chakra-ui/react";

export default function ProjectCard({ children, title, thumbnail, category='projects', id}) {
    return(
        <>
        <Box w="100%" textAlign="center">
            <LinkBox 
            cursor="pointer"
            as={NextLink}
            href={`/${category}/${id}`}
            scroll={false}>
                <Card size='sm'>
                    <CardBody>
                        <Image
                            src={thumbnail}
                            alt={title}
                            borderRadius='lg'
                    />
                <Stack mt='6' spacing='3'>
                    <Center>
                        <Heading size='md'>{title}</Heading>
                    </Center>
                    <LinkOverlay as="div" href={`/${category}/${id}`}> 
                        <Text fontSize='sm' textAlign='center'>
                            {children}
                        </Text>
                    </LinkOverlay>
                </Stack>
                    </CardBody >
                </Card>
            </LinkBox>
        </Box>
        </>
    )
}