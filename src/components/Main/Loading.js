import React, { useEffect } from 'react'
import { setLoading } from '../../actions';
import { connect } from 'react-redux';
import text from '../../../resources/text.json'

const Loading = ({ onLoading, loading }) => {
    useEffect(() => {
        // 켜진 후 2초있다가 꺼짐
        if (loading) {
            setTimeout(
                () => onLoading(false), 2000
            )
        }
    }, [loading, onLoading])
    return (
        loading ?
            <div className="loading enact-fit">
                <p>{text.title}</p>
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