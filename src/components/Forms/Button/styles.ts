import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    
    border-radius: 5px;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.mid};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.shape};

    padding: 18px;
`;