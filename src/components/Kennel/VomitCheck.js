import React, { useEffect } from 'react';
import { createToast } from '../../actions';
import { connect } from 'react-redux';

const VomitCheck = ({ vomitOn, children, createToast }) => {
    useEffect(() => {
        if (vomitOn) {
            createToast('vomit_on')
        }
    }, [vomitOn])
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
const VomitCheckContainer = connect(mapStateToProps, mapDispatchToProps)(VomitCheck);

export default VomitCheckContainer;