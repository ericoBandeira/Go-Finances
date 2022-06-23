import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert
} from "react-native";
import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
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

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório!'),
    amount: Yup.number()
        .typeError('Informe um valor numérico!')
        .positive('O valor não pode ser negativo!')
        .required('O valor é obrigatório!')
})

export function Register() {

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const [selected, setSelected] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    function handleRegister(form: FormData) {
        if (!selected)
            return Alert.alert('Selecione o tipo da transação')

        if (category.key === 'category')
            return Alert.alert('Selecione a categoria')

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <InputForms
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
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
        </TouchableWithoutFeedback>
    );
}