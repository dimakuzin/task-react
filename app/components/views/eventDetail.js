import React from 'react';
import {Link} from 'react-router';

export default function(props) {
	return (
		<div className="row">
			<div className="col-md-12">{props.event.community.name}</div>
			<div className="col-md-12">{props.event.community.description}</div>
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-4">{'total members: ' + props.event.members.total_count}</div>
				</div>

				{props.event.members.items.map(item => {
					return (
						<div key={item.id} className="row">
							<div className="col-md-3">{'name: ' + item.username}</div>
							<div className="col-md-3">{'email: ' + item.email}</div>
						</div>
					)
				})}
			</div>
			<div className="row">
				<Link to={'/'}>{'< back'}</Link>
			</div>
		</div>
	);
}