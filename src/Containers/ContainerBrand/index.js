import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import React from 'react'

import {
  DivMain,
  DivImg,
  ImgTop,
  ImgButtom,
  Divitens,
  DivInfo,
  ParagraphTop,
  DivIconsnNetworks
} from './styled'

function OurBrand() {
  return (
    <DivMain>
      <DivImg>
        <div>
          <ImgTop src="https://www.crefisa.com.br/wp-content/uploads/2020/09/280_x_280px_Banner-Footer_03.png" />
          <ImgButtom src="https://www.crefisa.com.br/wp-content/uploads/2020/09/280_x_280px_Banner-Footer_02.png" />
        </div>
        <div>
          <ImgButtom src="https://www.crefisa.com.br/wp-content/uploads/2020/09/280_x_280px_Banner-Footer_04.png" />
          <ImgTop src="https://www.crefisa.com.br/wp-content/uploads/2019/08/siga-a-gente-4-min.jpg" />
        </div>
      </DivImg>
      <Divitens>
        <DivInfo>
          <ParagraphTop>Nossa marca</ParagraphTop>
          <h2>Siga a gente nas redes sociais</h2>

          <DivIconsnNetworks>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <InstagramIcon></InstagramIcon>
            <YouTubeIcon></YouTubeIcon>
            <LinkedInIcon></LinkedInIcon>
          </DivIconsnNetworks>
        </DivInfo>
      </Divitens>
    </DivMain>
  )
}

export default OurBrand
