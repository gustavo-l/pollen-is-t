import React from 'react'

import { Button } from '../common/components/button/button.component'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { loadUsers, setSelectedUser } from './user.actions'
import { UserView } from '../common/templates/userview/userview.component'
import './user.styles.scss'
import { Input } from '../common/components/input/input.component'
class User extends React.PureComponent {
	async componentDidMount() {
		this.props.loadUsers({ size: 20, page: 0 })
	}
	render() {
		const { users, pending, setSelectedUser } = this.props
		return (
			<div className="user-container">
				<h2 className="headline-user">Gerencie seus usuários</h2>
				<div className="search-user">
					<Input fullwidth placeholder="Pesquisar" />
				</div>
				<div className="container-actions">
					<Button className="action-button" fullwidth small disabled={pending}>
						Incluir
					</Button>
					<Button className="action-button" fullwidth small disabled={pending}>
						Atualizar
					</Button>
					<Button className="action-button" fullwidth disabled={pending}>
						Desativar
					</Button>
				</div>
				{users.map((data, index) => (
					<UserView
						key={index}
						avatar="https://via.placeholder.com/50x50"
						active={data.confirmed}
						data={data}
						onChangeHandler={setSelectedUser}
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
	setSelectedUser: data => dispatch(setSelectedUser(data))
})

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(User)
)
