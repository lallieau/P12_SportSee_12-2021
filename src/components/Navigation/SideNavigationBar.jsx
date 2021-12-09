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

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: clamp(3.5rem, 8vw, 7.5rem);
    grid-template-rows: 6fr 2fr;
    margin-top: unset;
  }
`;

const Copyright = styled.p`
  color: ${colors.third};
  display: flex;
  font-size: 0.75rem;
  font-weight: 500;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    align-items: center;
    margin-bottom: 1.25rem;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
  }
`;

const Image = styled.img`
  margin-top: 0.938rem;
  width: clamp(2.5rem, 4.5vw, 4rem);
`;

const SportLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.625rem;

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
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
