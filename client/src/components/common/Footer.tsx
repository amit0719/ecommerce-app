import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterContainer
    // style={{
    //   marginTop: "auto",
    //   backgroundColor: "#f5f5f5",
    //   padding: "20px 0",
    // }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
 margin-top: auto;
        background-color: #f5f5f5;
        padding: 20px 0;
`;
