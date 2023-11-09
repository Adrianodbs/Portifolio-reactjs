import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 36px;
  gap: 60px;
  background-color: var(--white-1);
  width: 90%;
  border-radius: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  a {
    text-decoration: none;
    color: #fff;
  }

  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;

    @media (max-width: 780px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      color: var(--black);
      gap: 24px;
      text-align: left;

      h2 {
        width: 100%;
        text-align: left;
        font-weight: 400;
        @media (max-width: 780px) {
          text-align: center;
        }
      }

      p {
        color: var(--gray);
        font-size: 20px;
        width: 90%;

        @media (max-width: 880px) {
          text-align: center;
        }
      }
    }

    img {
      width: 100%;
      height: 260px;
      object-fit: contain;
      padding: 8px;
      border-radius: 4px;
      margin-top: 20px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    color: var(--black);
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    span {
      font-size: 20px;
      margin-bottom: 12px;
      text-align: center;
    }
  }

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 12px;

    svg {
      font-size: 32px;
    }
  }

  .btn {
    display: flex;
    gap: 36px;
    margin-top: 12px;

    a {
      color: var(--black);
      font-weight: 500;
      display: flex;
      gap: 8px;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }

    p {
      @media (max-width: 400px) {
        display: none;
      }
    }
  }
`
