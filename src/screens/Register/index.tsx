import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-native";
import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { InputForms } from "../../components/Forms/InputForms";
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

interface FormData {
    name: string;
    amount: string;
}

export function Register() {

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const { control, handleSubmit } = useForm()

    const [selected, setSelected] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    function handleRegister(form: FormData) {
        const data = {
            name: form.name,
            amount: form.amount,
            selected,
            category: category.key
        }
        console.log(data)
    }

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
                    <InputForms
                        name="name"
                        control={control}
                        placeholder="Nome"
                    />

                    <InputForms
                        name="amount"
                        control={control}
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

                <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
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