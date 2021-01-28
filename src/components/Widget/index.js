import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24;
  border: 1px solid ${({ theme }) => theme.colors.bluegrey};;
  background-color: ${({ theme }) => theme.colors.mainBg};;
  border-radius: 4px;
  overflow: hidden;
  opacity: .9;
  
  transition: .4s;
    &:hover,
    &:focus {
      opacity: 1;
    }

  h1, h2, h3 {
    font-family: 'Space Mono', monospace;;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    font-family: Arial, Helvetica, sans-serif;
  }
`

Widget.Header = styled.header`
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.bluegrey};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;