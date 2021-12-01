import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../../utils/style/colors';

import Bike from '../../assets/icon-bike.svg';
import Yoga from '../../assets/icon-yoga.svg';
import Swim from '../../assets/icon-swim.svg';
import Gym from '../../assets/icon-dumbell.svg';

const SportGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  height: 100vh;
`;

const Copyright = styled.p`
  color: ${colors.third};
  align-items: center;
  margin-bottom: 1.25rem;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`;

const Image = styled.img`
  width: clamp(2.5rem, 4.5vw, 4rem);
  padding-top: 20px;
`;

const SportLink = styled.div`
  width: fit-content;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SideNav = () => {
  return (
    <SportGroup>
      <SportLink>
        <Link to="/">
          <Image className="icon" src={Yoga} alt="icon"></Image>
        </Link>
        <Link to="/">
          <Image className="icon" src={Swim} alt="icon"></Image>
        </Link>
        <Link to="/">
          <Image className="icon" src={Bike} alt="icon"></Image>
        </Link>
        <Link to="/">
          <Image className="icon" src={Gym} alt="icon"></Image>
        </Link>
      </SportLink>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </SportGroup>
  );
};
