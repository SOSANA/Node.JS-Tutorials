var React = require('react/addons');
var ReactRouter = require('react-router');
var ClassNames = require('classnames');


var Link = ReactRouter.Link;


var Component = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    getInitialState: function () {

        return {
            navBarOpen: false
        };
    },
    componentWillReceiveProps: function () {

        this.setState({ navBarOpen: false });
    },
    isNavActive: function (routes) {

        return ClassNames({
            active: routes.some(function (route) {

                return this.context.router.isActive(route);
            }.bind(this))
        });
    },
    toggleMenu: function () {

        this.setState({ navBarOpen: !this.state.navBarOpen });
    },
    render: function () {

        var navBarCollapse = ClassNames({
            'navbar-collapse': true,
            collapse: !this.state.navBarOpen
        });

        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="home">
                            <img
                                className="navbar-logo"
                                src="/public/media/logo-square-inverse.png"
                            />
                            <span className="navbar-brand-label">Aqua</span>
                        </Link>
                        <button
                            className="navbar-toggle collapsed"
                            onClick={this.toggleMenu}>

                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={navBarCollapse}>
                        <ul className="nav navbar-nav">
                            <li className={this.isNavActive(['accounts', 'accountDetails'])}>
                                <Link to="accounts">Accounts</Link>
                            </li>
                            <li className={this.isNavActive(['admins', 'adminDetails'])}>
                                <Link to="admins">Admins</Link>
                            </li>
                            <li className={this.isNavActive(['adminGroups', 'adminGroupDetails'])}>
                                <Link to="adminGroups">Admin Groups</Link>
                            </li>
                            <li className={this.isNavActive(['statuses', 'statusDetails'])}>
                                <Link to="statuses">Statuses</Link>
                            </li>
                            <li className={this.isNavActive(['users', 'userDetails'])}>
                                <Link to="users">Users</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/login/logout">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Component;
