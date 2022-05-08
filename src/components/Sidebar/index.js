import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>

         <SidebarLink
            to='Project'
          >
            Project
          </SidebarLink> 

          <SidebarLink
            to='RoadMap'
          >
            RoadMap
          </SidebarLink>
          <SidebarLink
            to='Mint'
          >
            Mint
          </SidebarLink>
          <SidebarLink
            to='Team'
          >
            Team
          </SidebarLink>
          <SidebarLink
            to='Socials '
          >
            Socials
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/Connect'>Connect</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
