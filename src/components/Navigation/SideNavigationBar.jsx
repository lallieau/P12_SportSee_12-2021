import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Bike from '../../assets/icon-bike.svg';
import Yoga from '../../assets/icon-yoga.svg';
import Swim from '../../assets/icon-swim.svg';
import Gym from '../../assets/icon-dumbell.svg';

const SportGroup = styled.div`
  background-color: ${props => props.theme.colors.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: ${props => props.theme.fontSize.tiny};
  font-weight: ${props => props.theme.fontWeight.bold};
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`;

const Image = styled.img`
  margin-top: 0.938rem;
  width: 3rem;
`;

const SportLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.625rem;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const SideNavigationBar = () => {
  return (
    <SportGroup>
      <SportLink>
        <Link to="">
          <Image className="icon" src={Yoga} alt="icon"></Image>
        </Link>
        <Link to="">
          <Image className="icon" src={Swim} alt="icon"></Image>
        </Link>
        <Link to="">
          <Image className="icon" src={Bike} alt="icon"></Image>
        </Link>
        <Link to="">
          <Image className="icon" src={Gym} alt="icon"></Image>
        </Link>
      </SportLink>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </SportGroup>
  );
};
