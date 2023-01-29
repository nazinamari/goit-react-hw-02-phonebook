

export const ContactItem = ({ name, number, id, onClickDelete }) => {
    return (
        <>
            {name}: {number}
            <button type="button" onClick={() => onClickDelete(id)}>Delete</button>
        </>
    );
};

