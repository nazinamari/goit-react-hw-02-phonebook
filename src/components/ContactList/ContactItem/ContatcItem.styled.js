import styled from "styled-components";

export const ContactItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemInfo = styled.div`
    display: inline-block;
    margin-right: 8px;
    font-size: 20px;
    color:#333;
    border-radius: ${p => p.theme.radii.sm };
`;