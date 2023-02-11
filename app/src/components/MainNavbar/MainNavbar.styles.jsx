import styled from "styled-components";

const StyledNavItemPage = styled.div`
    width: 50%;
    .li-item-page {
        color: #212934;
        display: inline-block;
        font-weight: 300;
        font-size: 18px;
    };

    .ul-item-page {
        display: flex;
        justify-content: space-between;
        padding: 0px;
        margin: 0px auto;
    };
`; 

const StyledNavItemCustomer = styled.div`
    .li-item-customer {
        font-weight: 900;
        font-size: 18px;
        margin-right: 20px;
        color: #212934;
        display: inline-block;
    };

    .ul-item-customer {
        padding: 0px;
        margin: 0px;
    };
`; 

export { StyledNavItemPage, StyledNavItemCustomer } 