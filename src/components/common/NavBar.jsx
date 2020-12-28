import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="we_header_menu_wrapper">
                <div className="we_container">
                    <div className="we_header_menu_inner">
                        <div className="we_header_menu">
                            <ul>
                                {this.props.navigation.links.map((navLink) => {
                                    return (
                                        <li key={navLink.label}>
                                            <NavLink
                                                to={navLink.href}
                                                activeClassName="active"
                                            >
                                                <span>{navLink.label}</span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.header,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
