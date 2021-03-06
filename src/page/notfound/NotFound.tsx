import { Link } from "react-router-dom";
import styled from "styled-components"

export default () => {
  return (
    <Container style={ containerStyle }>
      <H1>404</H1>
      <p><strong>Page not found</strong></p>
      <GoBackHome className="go-back-home" to="/">Click here to go <b style={ { fontWeight: 'bold' } }>back home</b></GoBackHome>
    </Container>
  )
}

const containerStyle = {
  margin: '50px auto 40px auto',
  width: '600px',
  maxWidth: '100%',
  textAlign: 'center' as const
}

const Container = styled.div`
margin: 50px auto 40px auto;
width: 600px;
text-align: center;
`;

const H1 = styled.h1`
letter-spacing: -1px;
line-height: 60px;
font-size: 60px;
font-weight: 100;
margin: 0px 0 50px 0;
text-shadow: 0 1px 0 #fff;
`;

const GoBackHome = styled(Link)`
text-decoration: none;
color: black;
display: inline-block;
margin-top: 24px;
`