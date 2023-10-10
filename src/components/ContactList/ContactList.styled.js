import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  gap: 12px;

  li {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    border: 2px solid black;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  span + span {
    margin-left: 14px;
  }
  button {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: auto;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 2px solid #d60101;
    border-radius: 50%;
    cursor: pointer;
    font-size: 26px;
    color: #d60101;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      background-color: #d60101;
      color: white;
      box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.4);
    }
  }
`;
