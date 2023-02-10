import { useState } from "react";
import { Result, Thumbnail, InfoContainer, Title, StatsContainer, StatLabel } from "./styles/Results.styled";
import { TypeBadge } from './styles/TypeBadge.styled';

export default function Pokemon({ id, name, types, hp, attack, defense, speed }) {

  const [collapsed, setCollapsed] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  return(
    <Result collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>

      <Thumbnail>
        {!imageLoaded && <img src='./pokeball.gif' alt='spinning pokeball' style={{opacity: 0.3}}/>}
        <img src={`./thumbnails/${id.toString().padStart(3, '0')}.png`} alt={name} onLoad={() => setImageLoaded(true)}/>
      </Thumbnail>

      <InfoContainer>
        <Title collapsed={collapsed}>
          <span>{`#${id.toString().padStart(3, '0')} |\u00A0 ${name}`}</span>
          <img src='./arrow-icon.png' alt='collapsible arrow'/>
        </Title>
        <StatsContainer>
          <div><StatLabel>Type: &nbsp;&nbsp;</StatLabel>{types.map((type, index) => <TypeBadge type={type} key={index}>{type}</TypeBadge>)}</div>
          <div><StatLabel>HP: </StatLabel>{hp}</div>
          <div><StatLabel>Attack: </StatLabel>{attack}</div>
          <div><StatLabel>Defense: </StatLabel>{defense}</div>
          <div><StatLabel>Speed: </StatLabel>{speed}</div>
        </StatsContainer>
      </InfoContainer>

    </Result>
  )
}