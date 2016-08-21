/**
 * Created by Dima on 21.08.2016.
 */
import React from 'react';
import {Link} from 'react-router';

export default function (props) {
    return (
        <div className="events-list">
            {props.events.map(event => {
                return (
                    <div key={event.id} className="row">
                        <div className="col-md-12">{event.name}</div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">{'Author: ' + event.created_by.username}</div>
                                <div className="col-md-4">{'email: ' + event.created_by.email}</div>
                                <div className="col-md-4">{'subscr: ' + event.subscribers_count}</div>
                            </div>
                        </div>
                        <div className="col-md-12">{event.description}</div>
                        <div className="col-md-4">
                            <Link to={'/' + event.id}>{'detail'}</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
