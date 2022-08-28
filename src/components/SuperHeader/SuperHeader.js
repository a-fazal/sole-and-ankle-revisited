import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <DesktopView>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </DesktopView>
      <MobileView></MobileView>
    </Wrapper>
  );
};

const DesktopView = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
  color: var(--color-gray-300);

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`
const MobileView = styled.div`
  display: none;
  height: 10px;

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
  }
`

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: var(--color-white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
