import Nav from "@/components/Nav";
import { useTheme } from "@chakra-ui/react";


export default function Contact() {
    const theme = useTheme(); 

    return(
        <>
            <div style={{ backgroundColor: theme.colors.secondary }}>
                <Nav/>
                Contact Page 
            </div>
        </>
    )
}