import React from 'react';
import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
    return (
        <Container>
            <ProfileCircle src="GabrielJaqeusCouto" />
            <SearchInput placeholder="Pesquisar" />
            <MessageIcon />
        </Container>
    );
};

export default MobileHeader;