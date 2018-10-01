import React from 'react'

import { Button } from '../common/components/button/button.component'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { loadUsers } from './user.actions'
import { UserView } from '../common/templates/userview/userview.component'
class User extends React.PureComponent {
    async componentDidMount() {
        this.props.loadUsers({ size: 20, page: 0 })
    }
    render() {
        const { users, pending } = this.props
        return (
            <div>
                {users.map((data, index) => (
                    <UserView
                        key={index}
                        avatar="https://via.placeholder.com/50x50"
                        active={true}
                        data={data}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.fetchedUsers,
    pending: state.users.pending
})

const mapDispatchToProps = dispatch => ({
    loadUsers: ({ size, page }) => loadUsers({ size, page })(dispatch)
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(User)
)
