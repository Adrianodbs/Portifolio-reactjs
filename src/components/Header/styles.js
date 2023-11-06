import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 48px;
  color: #fff;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: var(--black);

  a {
    text-decoration: none;
    color: #8b8b8c;
    transition: all 0.2s;

    &:hover {
      color: #fff;
    }

    @media (max-width: 780px) {
      margin-top: 16px;
    }
  }

  @media (max-width: 780px) {
    font-weight: 500;
    opacity: ${({ open }) => (open ? '1' : '0')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    transform: translateX(${({ open }) => (open ? '0' : '-100%')});
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background-color: var(--black);
    padding: 10px 0;
    flex-direction: column;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    background-color: var(--black);
    padding: 10px 0;
    transition: right 0.5s ease-in-out;
    /* display: ${({ open }) => (open ? 'flex' : 'none')}; */
  }
`

export const Title = styled.div`
  h2 {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`

export const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @keyframes animate {
    0%,
    100% {
      color: deeppink;
    }

    25% {
      color: deepskyblue;
    }

    50% {
      color: lawngreen;
    }

    75% {
      color: yellow;
    }
  }

  a svg:hover {
    text-shadow: 0 0 15px;
    animation: animate 1.5s infinite linear;
  }
`

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 780px) {
    display: block;
    font-size: 24px;
    z-index: 4;
  }
`
