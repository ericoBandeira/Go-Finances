import React, { useState } from "react";
import { Modal } from "react-native";
import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectPage } from "../CategorySelectPage";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

export function Register() {

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const [selected, setSelected] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    function handleSelected(type: 'up' | 'down') {
        setSelected(type);
    }

    function handleOpenModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseModal() {
        setCategoryModalOpen(false);
    }

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />

                    <Input
                        placeholder="Preço"
                    />

                    <TransactionTypes>
                        <TransactionTypeButton
                            title="Income"
                            type="up"
                            onPress={() => handleSelected('up')}
                            isActive={selected === 'up'}
                        />

                        <TransactionTypeButton
                            title="Outcome"
                            type="down"
                            onPress={()=>handleSelected('down')}
                            isActive={selected === 'down'}
                        />
                    </TransactionTypes>

                    <CategorySelect title={category.name} onPress={handleOpenModal}/>
                </Fields>

                <Button title="Enviar"/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelectPage
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseModal}
                />
            </Modal>
        </Container>
    );
}