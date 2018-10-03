import React from 'react'

import { Button } from '../common/components/button/button.component'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { loadUsers, disableUser } from './user.actions'
import { UserView } from '../common/templates/userview/userview.component'
import './user.styles.scss'
import { Input } from '../common/components/input/input.component'

let UserForm = ({ pending }) => (
	<div>
		<div className="headline-user">
			<h2 className="headline">Gerencie seus usuários</h2>
			<Button className="action-button" fullwidth disabled={pending}>
				Incluir
			</Button>
		</div>
		<div className="search-user">
			<Input fullwidth placeholder="Pesquisar" />
		</div>
	</div>
)

class User extends React.PureComponent {
	async componentDidMount() {
		this.props.loadUsers({ size: 20, page: 0 })
	}
	render() {
		const { users, pending, disableUser } = this.props
		return (
			<div className="user-container">
				<UserForm pending={pending} />
				{users.map((data, index) => (
					<UserView
						key={index}
						avatar="https://via.placeholder.com/50x50"
						active={data.confirmed}
						data={data}
						onDisable={disableUser}
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
	loadUsers: ({ size, page }) => loadUsers({ size, page })(dispatch),
	disableUser: _id => disableUser(_id)(dispatch)
})

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(User)
)
