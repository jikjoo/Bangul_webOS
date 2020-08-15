import React, { useEffect } from 'react'
import { setLoading } from '../../actions';
import { connect } from 'react-redux';
import text from '../../../resources/text.json'

const Loading = ({ onLoading, loading }) => {
    useEffect(() => {
        setTimeout(
            () => onLoading(false), 2000
        )
    }, [])
    return (
        loading ?
            <div className="loading enact-fit">
                <h>{text.title}</h>
            </div>
            : null
    )
}

const mapStateToProps = ({ loading }) => ({
    loading
});
const mapDispatchToProps = (dispatch) => {
    return {
        onLoading: (loading) => dispatch(setLoading(loading))
    };
};
const LoadingContainer = connect(mapStateToProps, mapDispatchToProps)(Loading);

export default LoadingContainer;
//export default Loading;