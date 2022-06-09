import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, UserWapper, UserInfo, Photo, User, UserGreeting, UserName} from './styles';

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
                </UserWapper>
            </Header>
        </Container>
    )
}
