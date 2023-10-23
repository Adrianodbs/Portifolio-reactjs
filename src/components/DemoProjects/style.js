import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px 60px;
  gap: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 300px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }

  img {
    width: 100%;
    height: 172px;
    object-fit: contain;
    border: 1px solid #fff;
    padding: 8px;
    border-radius: 4px;
  }

  .content {
    padding: 8px;

    p {
      width: 100%;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 12px;

    svg {
      font-size: 24px;
    }
  }
`
