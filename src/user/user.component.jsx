import React from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { loadUsers, disableUser, updateUser } from './user.actions'
import './user.styles.scss'
import { show } from 'redux-modal'

import _ from 'lodash'
import Loadable from 'react-loadable'
import { Loading } from '../main/main.loading'

import Modal from '../common/components/modal/modal.component'

const UserCreate = Loadable({
    loader: () => import('./user.create'),
    loading: Loading
})
const UserUpdate = Loadable({
    loader: () => import('./user.update'),
    loading: Loading
})
const UserView = Loadable({
    loader: () => import('../common/templates/userview/userview.component'),
    loading: Loading
})

let UserForm = Loadable({
    loader: () => import('./user.searchform'),
    loading: Loading
})

class User extends React.PureComponent {
    async componentDidMount() {
        this.props.loadUsers({ size: 20, page: 0 })
    }
    render() {
        const { users, pending, disableUser, handleOpen } = this.props
        return (
            <div className="user-container">
                <UserForm pending={pending} />
                {users.map((data, index) => (
                    <UserView
                        key={index}
                        avatar="https://via.placeholder.com/50x50"
                        active={data.state}
                        data={data}
                        onDisable={disableUser}
                        onUpdate={_id =>
                            handleOpen('userUpdate', {
                                initial: _.filter(users, o => o._id === _id)[0]
                            })
                        }
                    />
                ))}
                <Modal name="userCreate">
                    <UserCreate />
                </Modal>

                <Modal name="userUpdate">
                    <UserUpdate />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.fetchedUsers,
    pending: state.users.pending
})

const mapDispatchToProps = dispatch => ({
    loadUsers: ({ size, page }) => loadUsers({ size, page })(dispatch),
    disableUser: _id => disableUser(_id)(dispatch),
    updateUser: ({ _id, ...rest }) => updateUser({ _id, ...rest })(dispatch),
    handleOpen: (name, props) => dispatch(show(name, props))
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(User)
)
