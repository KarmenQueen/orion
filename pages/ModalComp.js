import {
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
  } from "@chakra-ui/react";
  import React, {useLocalStorage} from './useLocalStorage';
  import { useEffect, useState } from "react";
  import ramosData from "./ramos.json";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const [descripcion, setDescripcion] = useState(dataEdit.descripcion || "");
    const [ramo, setRamo] = useState(dataEdit.ramo || "");

    const [valor, setValor] = useLocalStorage("value","");
    const [value2, setValue2] = useState("1");

    useEffect(()=>{
      setValue2(valor);
    },[]);
  
    const handleSave = () => {

      
      console.log('value 2:');
      console.log(value2);
      console.log('ramo numero:');
      console.log(ramo);

      if (!name || !email || !descripcion) return;
  
      if (emailAlreadyExists()) {
        return alert("ESTE LINK YA HA SIDO PUBLICADO!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { name, email, descripcion, ramo};
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { name, email, descripcion, ramo}]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const emailAlreadyExists = () => {
      if (dataEdit.email !== email && data?.length) {
        return data.find((item) => item.email === email);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nuevo Link</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Divider orientation='horizontal' />
              <p className="title8">Solicitamos rellenar todos los campos presentes al momento de compartir un link y para así poderle brindar a todos una mayor seguridad.</p>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    placeholder='Ingrese su nombre'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Link</FormLabel>
                  <Input
                    placeholder='Ingrese el link que sea compartir'
                    type="email"
                    value={email}
                    onClick={(e)=> setRamo(value2)}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormLabel>Descripcion</FormLabel>
                  <Input
                    placeholder='Ingrese una descripción sobre el link'
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </Box>
                
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                GUARDAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;
