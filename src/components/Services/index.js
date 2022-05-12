import React from 'react'
import Icon1 from '../../images/majid.jpg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
  } from './servicesElements';

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Road Map</ServicesH1>

        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                    <ServicesH2> Stage 1</ServicesH2>
                    <ServicesP> Set up the Mint date </ServicesP>
               
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                    <ServicesH2> Stage 2</ServicesH2>
                    <ServicesP> Set up the Mint date </ServicesP>
               
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                    <ServicesH2> Stage 3</ServicesH2>
                    <ServicesP> Set up the Mint date </ServicesP>
               
            </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services