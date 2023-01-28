import { Box } from '../utils/Box';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return(
        <Box m="0 auto 30px" as="section">
    { title && <Title>{title}</Title>}
    {children}
        </Box >
    );
};

Section.propTypes = {
    title: PropTypes.string,
};
