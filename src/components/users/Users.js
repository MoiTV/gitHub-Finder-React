import React, { Component } from 'react';

class Users extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            login,
            blog,
            html_url,
            followers,
            following,
            public_gists,
            public_repos,
            hireable
        } = this.props.user;

        const { loading } = this.props;

        return <div>{name}</div>;
    }
}

export default Users;
