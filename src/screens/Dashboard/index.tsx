import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { Title } from '../../components/HighlightCard/styles';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
    Container,
    Header,
    UserWapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    TransactionsTitle,
    TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title:"Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:"13/04/2022"
        },
        {
            id: '2',
            type: 'negative',
            title:"ALimentação",
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date:"10/04/2022"
        },
        {
            id: '3',
            type: 'negative',
            title:"Aluguel do apartamento",
            amount: "R$ 1.200,00",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date:"09/04/2022"
        }
    ]

    return (
        <Container>
            <Header>
                <UserWapper>
                    <UserInfo>
                        <Photo source={{uri: "https://avatars.githubusercontent.com/u/26394460?v=4"}}/>
                        <User>
                            <UserGreeting>
                                Olá,
                            </UserGreeting>
                            <UserName>
                                Érico
                            </UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWapper>
            </Header>
            
            <HighlightCards >
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 15 de abril"
                />
            </HighlightCards>
 
            <Transactions>
                <TransactionsTitle>
                    Listagem
                </TransactionsTitle>

                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />

            </Transactions>

        </Container>
    )
}
