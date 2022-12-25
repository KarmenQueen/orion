import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import Layout from "../components/layout";
import {
    Box,
    Flex,
    Headers,
    Button,
    useDisclosure,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./ModalComp";
import React, {useLocalStorage} from './useLocalStorage'
import ramosData from "./ramos.json";

const App = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [value, setValue] = useLocalStorage("value","");
    const [value2, setValue2] = useState("1");
    
    useEffect(()=>{
        setValue2(value);
    },[]);
    
    console.log(value2);

    const isMobile = useBreakpointValue({
        base: true,
        lg: false,
    });

    useEffect(() => {
        const db_costumer = localStorage.getItem("cad_cliente")
        ? JSON.parse(localStorage.getItem("cad_cliente"))
        : [];

        setData(db_costumer);
    }, [setData]);

    const handleRemove = (email) => {
        const newArray = data.filter((item) => item.email !== email);

        setData(newArray);

        localStorage.setItem("cad_cliente", JSON.stringify(newArray));
    };

    return (
        <div className="App">
            <Layout></Layout>
            <header className="App-header">
                <p className="title">{ramosData[value2].nombre}</p>
                <p className="title3">CÓDIGO: {ramosData[value2].codigo}</p>
                
            <Box maxW={1500} w="100%" h="100vh" py={10} px={2}>
        <p className="description">{ramosData[value2].descripcion}</p>
            <a className="btn-neonlink" onClick={() => [setDataEdit({}), onOpen()]}>
            AGREGAR LINK
            </a>
            <Box overflowY="auto" height="100%">
            <Table mt="6">
                <Thead>
                <Tr>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px" color={"withe"}>
                    Nombre
                    </Th>
                    <Th maxW={isMobile ? 5 : 100} fontSize="20px"color={"withe"}>
                    Link
                    </Th>
                    
                    <Th p={0}></Th>
                    <Th p={0}></Th>
                </Tr>
                </Thead>
                <Tbody>
                {data.map(({ name, email }, index) => (
                    <Tr key={index} cursor="pointer " _hover={{ bg: "#714BB9" }}>
                    <Td maxW={isMobile ? 5 : 100}>{name}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{email}</Td>
                    <Td p={0}>
                        <EditIcon
                        fontSize={20}
                        onClick={() => [
                            setDataEdit({ name, email, index }),
                            onOpen(),
                        ]}
                        />
                    </Td>
                    <Td p={0}>
                        <DeleteIcon
                        fontSize={20}
                        onClick={() => handleRemove(email)}
                        />
                    </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
            </Box>
        </Box>
        {isOpen && (
            <ModalComp
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
            />
        )}

            </header>
            
        </div>
    );
};

export default App;