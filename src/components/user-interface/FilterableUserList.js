import React from 'react'
import ErrorMessage from '../users-infos/ErrorMessage'
import Loader from '../users-infos/Loader'
import UserCard from './UserCard'
import './FilterableUserList.scss'
import SearchBar from './SearchBar'

class FilterableUserList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			filters: {
				identity: '',
				mac: '',
				ip: '',
				likes: -1,
				photos: -1,
				friends: -1,
				usersLoginStatus: 'all'
			},
			requestedResourceStatus: {
				error: null,
				isLoaded: false,
			}
		};
	}

	componentDidMount() {
		const userState = ['connected', 'disconnected', 'recently']
		fetch('https://fakerapi.it/api/v1/users?_quantity=100')
			.then(response => response.json())
			.then(
				(result) => {
					let arr = [];
					result.data.forEach(element => {
						arr.push({
							uuid: element.uuid,
							avatarUser: "https://picsum.photos/200/200?image=" + this.getRandom(),
							bagroundUser: "https://picsum.photos/600/400?image=" + this.getRandom(),
							state: userState[Math.floor(Math.random() * userState.length)],
							friends: Math.floor(Math.random() * 400),
							photos: Math.floor(Math.random() * 100),
							likes: Math.floor(Math.random() * 2000),
							firstname: element.firstname,
							email: element.email,
							lastname: element.lastname,
							surname: element.surname,
							macAddress: element.macAddress,
							ip: element.ip,
							website: element.website
						})
					});

					this.setState((prevState) => ({
						requestedResourceStatus: {
							...prevState.requestedResourceStatus,
							isLoaded: true,
						},
						items: arr,
					}))
				},
				(error) => {
					this.setState((prevState) => ({
						requestedResourceStatus: {
							...prevState.requestedResourceStatus,
							isLoaded: true,
							error
						}
					}));
				}
			);
	}

	getRandom() {
		const value = Math.floor(Math.random() * 100);
		// img 86, 97 not found in picsum API
		return [86, 97].includes(value) ? this.getRandom() : value;
	}

	handleFilterChange = (key, filter) => {
		console.log(key, filter)
		this.setState(prevState => ({
			filters: {
				...prevState.filters,
				[key]: filter
			}
		}))
	}

	contains(target, arr) {
		let occurrences = 0;
		arr.forEach((item) => {
			occurrences += (item.toLowerCase().indexOf(target.toLowerCase()) === -1) ? 1 : 0;
		});
		return occurrences >= arr.length
	}

	extremumInArrayOfObjects(items, attribute) {
		return {
			min: Math.min.apply(Math, items.map((item) => item[attribute])),
			max: Math.max.apply(Math, items.map((item) => item[attribute]))
		}
	}

	filtrationConditions(item, filters) {
		return (
			this.contains(filters.identity, [item.email, item.firstname, item.lastname]) ||
			this.contains(filters.mac, [item.macAddress]) ||
			this.contains(filters.ip, [item.ip]) ||
			filters.likes > item.likes ||
			filters.photos > item.photos ||
			filters.friends > item.friends ||
			(filters.usersLoginStatus !== "all" && !Object.is(filters.usersLoginStatus, item.state))
		)
	}


	render() {
		const { requestedResourceStatus, items, filters } = this.state;
		let users = [];
		if (requestedResourceStatus.error) {
			return <ErrorMessage message={requestedResourceStatus.error.message} />;
		} else if (!requestedResourceStatus.isLoaded) {
			return <Loader />;
		} else {
			items.forEach(item => {
				if (this.filtrationConditions(item, filters)) {
					return
				}
				users.push(<UserCard userDatas={item} key={item.uuid} />)
			})
			return (
				<div>
					<SearchBar
						onFilterItemChange={this.handleFilterChange}
						filters={filters}
						rangesExtremums={{
							likes: this.extremumInArrayOfObjects(items, 'likes'),
							photos: this.extremumInArrayOfObjects(items, 'photos'),
							friends: this.extremumInArrayOfObjects(items, 'friends'),
						}}
					/>
					{users.length ?
						<article className="users">
							{users}
						</article> :
						<p>No result for your research !</p>
					}
				</div>
			)
		}
	}
}

export default FilterableUserList;