import React, { Component } from 'react';

export default class List extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className="row">
                {users.map(item =>{
                    return <div className="card" key={item.id}>
                                <a rel="noreferrer" href={item.html_url} target="_blank">
                                <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                })}
            </div>
        )
    }
}
