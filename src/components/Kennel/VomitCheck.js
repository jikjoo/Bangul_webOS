import React, { useEffect } from 'react';
import { createToast } from '../../actions';
import { connect } from 'react-redux';

const VomitCheck = ({ vomitOn, children, createToast }) => {
    console.log({vomitOn})
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

const mapStateToProps = ({video}) => ({
    vomitOn : video.vomit > 0 ? true : false
});
const mapDispatchToProps = (dispatch) => {
    return {
        createToast: (type) => dispatch(createToast(type))
    };
};
const VomitCheckContainer = connect(mapStateToProps, mapDispatchToProps)(VomitCheck);

export default VomitCheckContainer;