import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

import Bike from '../../assets/icon-bike.svg';
import Yoga from '../../assets/icon-yoga.svg';
import Swim from '../../assets/icon-swim.svg';
import Gym from '../../assets/icon-dumbell.svg';

const SportGroup = styled.div`
  background-color: ${colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Copyright = styled.p`
  color: ${colors.third};
  align-items: center;
  margin-bottom: 1.25rem;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  font-size: 0.8rem;
`;

const Image = styled.img`
  width: clamp(2.5rem, 3.3rem, 4rem);
  padding-top: 0.5rem;
`;

const SportLink = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.5rem 1.875rem;
`;

export const SideNav = () => {
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
