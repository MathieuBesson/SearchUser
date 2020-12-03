import React from 'react'
import './UserCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function UserCard({ userDatas }) {
	return (
		<section className="card-user">
			<div className="card-user-block">
				<img className="card-user-bg" src={userDatas.bagroundUser} alt="user-background" />
			</div>
			<div className={"card-user-block2 " + userDatas.state}>
				<img className="card-user-profil" src={userDatas.avatarUser} alt="user-profil" />
			</div>
			<h3 className="card-user-name">{userDatas.firstname + ' ' + userDatas.lastname}</h3>
			<p className="card-user-surname" >{userDatas.surname}</p>
			<ul className="card-user-other-infos" >
				<li>
					<span className="user-friends-number">{userDatas.friends}</span>
					<span className="user-friends-intituled">Friends</span>
				</li>				
				<li>
					<span className="user-friends-number">{userDatas.photos}</span>
					<span className="user-friends-intituled">Photos</span>
				</li>				
				<li>
					<span className="user-friends-number">{userDatas.likes}</span>
					<span className="user-friends-intituled">Likes</span>
				</li>
			</ul>
			<ul className="card-user-infos" >
				<div>
					<li><FontAwesomeIcon icon={['fas', 'envelope-open']} /><a href={"mailto:" + userDatas.email}>{userDatas.email}</a></li>
					<li><FontAwesomeIcon icon={['fas', 'address-card']} /> {userDatas.macAddress}</li>
				</div>
				<div>
					<li><FontAwesomeIcon icon={['fas', 'link']} /> <a href="https://mathieu-besson.netlify.app/">{userDatas.website.slice(7)}</a></li>
					<li><FontAwesomeIcon icon={['fas', 'server']} /> {userDatas.ip}</li>
				</div>
			</ul>
		</section>
	)
}


export default UserCard;