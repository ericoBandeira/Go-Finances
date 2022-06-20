import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

export function Register() {

    const [selected, setSelected] = useState('')

    function handleSelected(type: 'up' | 'down') {
        setSelected(type);
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

                    <CategorySelect title="Categoria" />
                </Fields>

                <Button title="Enviar"/>
            </Form>
        </Container>
    );
}