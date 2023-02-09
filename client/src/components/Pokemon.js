import { useState } from "react";
import { Result, ImageContainer, InfoContainer, Title, StatsContainer, StatLabel } from "./styles/Results.styled";
import { TypeBadge } from './styles/TypeBadge.styled';

export default function Pokemon({ id, name, types, hp, attack, defense, speed }) {

  const [collapsed, setCollapsed] = useState(true);

  return(
    <Result collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>

    <ImageContainer><img src={`./thumbnails/${id.toString().padStart(3, '0')}.png`} alt={name} /></ImageContainer>

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