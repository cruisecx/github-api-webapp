import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  padding: 4px;
  margin-top: 30px;


  input {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  input:hover {
    border: 1px solid #0C8A92;
  }

  button {
    background-color: #0C8A92;
    padding: 8px 32px;
    margin: 0 16px;
    border-radius: 10px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      color: #ffff;
    }
  }
`;
