import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Employee } from '../../presentational/Employee';
import { ProfileFormContainer } from '../../containers/ProfileFormContainer';


// import { getProfileById } from '../../../store/actions';

class EmployeeView extends React.Component {

    // getEmployeeById = id => {
    //     this.props.getProfileById(id);
    // }

    // componentDidMount() {
    //     this.getEmployeeById(1);
    // }

    render() {
        return (
            <div>
                <Employee />
                <ProfileFormContainer history={this.props.history} />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    userInfo: state.userReducer.userInfo
});

EmployeeView.propTypes = {
    userInfo: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        id: PropTypes.number,
        tagline: PropTypes.string,
        profile_photo: PropTypes.string,
        type_id: PropTypes.number,
        user_type: PropTypes.string,
        username: PropTypes.string,
        working_since: PropTypes.string
    }),
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(EmployeeView);