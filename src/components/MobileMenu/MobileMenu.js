/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <UnstyledButton onClick={onDismiss}>
          <CloseIcon id="close" />
          <VisuallyHidden>Dismiss Modal</VisuallyHidden>
        </UnstyledButton>
        <Navigation>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Navigation>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseIcon = styled(Icon)`
  position: absolute;
  right: 5px;
  top: 5px;
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(0, 100%, 0%, 0.9)
`

const Content = styled(DialogContent)`
  position: absolute;
  height: 100%;
  right: 0;
  background: white;
  padding: 40px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: blue;
  }
`

const Navigation = styled.nav`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-direction: column;

  a {
    font-weight: ${WEIGHTS.medium};
  }
`

const Footer = styled.footer`
  display: flex;
  gap: 8px;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  font-size: 0.75rem;
  color: ${COLORS.gray[300]};
`
export default MobileMenu;
