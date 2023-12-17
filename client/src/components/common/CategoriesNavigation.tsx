import { Link } from "@mui/material";
import { appData } from "../../data";
import styled from "@emotion/styled";

const CategoriesNavigation = () => {
  return (
    <CategoriesNavWrapper>
      {appData.categories.map((category) => (
        <LinkWrapper>
          <Link underline="none"  >{category.name}</Link>
        </LinkWrapper>
      ))}
    </CategoriesNavWrapper>
  );
};

export default CategoriesNavigation;

const CategoriesNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding:4px 4px;
`;

const LinkWrapper = styled.span`
  font-weight: 500;
  display:flex;
  align-item:center;
`;
