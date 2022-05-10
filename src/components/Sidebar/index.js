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
            onClick={toggle}
          >
            Project
          </SidebarLink> 

          <SidebarLink
            to='RoadMap'
            onClick={toggle}
          >
            RoadMap
          </SidebarLink>
          <SidebarLink
            to='Mint'
            onClick={toggle}
          >
            Mint
          </SidebarLink>
          <SidebarLink
            to='Team'
            onClick={toggle}
          >
            Team
          </SidebarLink>
          <SidebarLink
            to='Socials '
            onClick={toggle}
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
