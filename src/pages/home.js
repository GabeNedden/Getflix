import React from 'react';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';

export default function Home() {
    return (
        <>
        <HeaderContainer>
            <p>Hello</p>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </>
    )
}