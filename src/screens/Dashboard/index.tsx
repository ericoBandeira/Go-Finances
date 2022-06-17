import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { Title } from '../../components/HighlightCard/styles';
import { TransactionCard } from '../../components/TransactionCard';
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
    TransactionsTitle
} from './styles';

export function Dashboard() {
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

                <TransactionCard />
            </Transactions>

        </Container>
    )
}
