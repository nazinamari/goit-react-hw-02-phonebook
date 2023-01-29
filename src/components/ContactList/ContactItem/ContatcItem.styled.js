import styled from "styled-components";

export const ContactItemStyle = styled.div`
    background: #f7f5ff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const ItemInfo = styled.div`
    display: inline-block;
    margin-right: 8px;
    font-size: 20px;
    color:#333;
    border-radius: ${p => p.theme.radii.sm };
`;