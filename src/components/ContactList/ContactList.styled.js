import styled from "styled-components";

export const ContactListStyle = styled.ul`
    background: #f7f5ff;
    border-radius: ${p => p.theme.radii.md };
    padding: 15px;
`
export const ContactListItem = styled.li`
border-radius: ${p => p.theme.radii.sm };
border: 1px solid rgb(154 154 154);
padding: 8px;
&:not(:last-child){
    margin-bottom: 15px;
}
`