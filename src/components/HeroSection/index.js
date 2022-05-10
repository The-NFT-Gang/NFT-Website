import React from 'react'
import background from '../../images/video.mp4'
import { HeroContainer, HeroBackGround, VideoBackGround, HeroContent, HeroP, HeroH1 } from './HeroElements'


const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBackGround>
            <VideoBackGround autoPlay loop muted src={background} type = 'video/mp4' />
                
        </HeroBackGround>

        <HeroContent>
            <HeroH1>
                The Worlds First NFT Based Lottery
            </HeroH1>
            <HeroP>
                Built on the Ethereum Blockchain 
            </HeroP>

            
        </HeroContent>


    </HeroContainer>
  )
}

export default HeroSection