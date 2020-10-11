import React, { useEffect } from 'react';
import { createToast } from '../../actions';
import { connect } from 'react-redux';

const MicNotFound = ({ notFound, children, createToast }) => {
    useEffect(() => {
        if (notFound) {
            createToast('mic_not_found')
        }
    }, [notFound])
    return (
        <>
            {children}
        </>
    )
}

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => {
    return {
        createToast: (type) => dispatch(createToast(type))
    };
};
const MicNotFoundContainer = connect(mapStateToProps, mapDispatchToProps)(MicNotFound);

export default MicNotFoundContainer;