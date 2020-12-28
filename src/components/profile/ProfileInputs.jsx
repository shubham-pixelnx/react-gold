import { Component } from "react";
import { connect } from "react-redux";
import svgs from "../svgs";
import profileAction from "./../../actions/profileAction";
import headerAction from "./../../actions/headerAction";
import { AlertMsg } from "../../utils/helper";
import { appConstants } from "./../../constants/appDefaults";
let { getUserInfo } = headerAction;
let { updateUserData } = profileAction;
let {
    app: {
        requestState: { FETCHING, SUCCEEDED },
    },
} = appConstants;
class ProfileInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.header.userInfo.data.name,
        };
    }
    componentDidMount() {}
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };
    validateForm() {
        const noName = this.state.name.trim() === "";
        if (noName) {
            AlertMsg("error", "Oops!", "Field can not be empty!");
            return false;
        }
        return true;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.validateForm()) return;
        this.props.updateUserData({
            name: this.state.name,
        });
    };
    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.profile.updateProfile.stage === FETCHING &&
            this.props.profile.updateProfile.stage === SUCCEEDED
        ) {
            this.props.getUserInfo();
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="we_input_wrapper we_input_icon">
                    <input
                        type="text"
                        className="we_input"
                        placeholder="Name"
                        maxLength="20"
                        name="name"
                        autoComplete="off"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <span className="we_icon">{svgs.app.userIcon}</span>
                </div>
                <div className="we_input_wrapper we_input_icon">
                    <input
                        type="email"
                        className="we_input"
                        placeholder="Your Account Email"
                        readOnly={true}
                        disabled={true}
                        value={this.props.header.userInfo.data.email}
                    />
                    <span className="we_icon">{svgs.app.emailIcon}</span>
                </div>
                <button
                    className="we_btn"
                    disabled={
                        this.props.profile.updateProfile.stage === FETCHING
                    }
                >
                    {this.props.profile.updateProfile.stage === FETCHING
                        ? "Saving..."
                        : "Save"}
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateUserData: (data) => dispatch(updateUserData(data)),
        getUserInfo: (data) => dispatch(getUserInfo()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileInputs);
