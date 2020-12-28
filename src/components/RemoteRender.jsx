import { Component } from "react";
import { connect } from "react-redux";
import editorAction from "../actions/editorAction";
import Preview from "./editor/player/Preview";
import { appConstants } from "../constants/appDefaults";
let {
    app: {
        requestState: { INITIAL, FETCHING, ERRORED, SUCCEEDED },
    },
} = appConstants;
let { freeChange, fetchLayerData } = editorAction;
class RemoteRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layerDataLoaded: false,
        };
        this.renderToken = this.props.match.params.token;
        this.pageName = this.props?.specialRouteData?.pageName;
    }
    componentDidMount() {
        // this.props.setEditorState({
        //     videoId,
        // });
        this.props.fetchLayerData(this.pageName, {
            token: this.renderToken,
        });
        document.body.classList.add("we_render_screen");
    }
    componentWillUnmount() {
        document.body.classList.remove("we_render_screen");
    }
    componentDidUpdate() {
        if (this.state.layerDataLoaded) return;
        if (this.props.layerData.stage === INITIAL) {
            console.log("TO_PPTR", {
                type: "LAYER_DATA",
                data: {
                    stage: "INITIAL",
                },
            });
        } else if (this.props.layerData.stage === FETCHING) {
            console.log("TO_PPTR", {
                type: "LAYER_DATA",
                data: {
                    stage: "FETCHING",
                },
            });
        } else if (this.props.layerData.stage === ERRORED) {
            console.log("TO_PPTR", {
                type: "LAYER_DATA",
                data: {
                    stage: "ERRORED",
                    data: this.props.layerData,
                },
            });
        } else if (this.props.layerData.stage === SUCCEEDED) {
            console.log("TO_PPTR", {
                type: "LAYER_DATA",
                data: {
                    stage: "SUCCEEDED",
                },
            });
            /*             let wr = document.querySelector(
                "#root > div.we_main_wrapper > div > div"
            );
            Object.assign(wr.style, {
                margin: "unset",
                transform: "scale(1.5)",
                transformOrigin: "top left",
            }); */
            this.setState({
                layerDataLoaded: true,
            });
        }
    }
    render() {
        if (this.props.template === null) {
            return (
                <div>
                    <h1>Layer data (State : {this.props.layerData.stage})</h1>
                    <h2>{JSON.stringify(this.props.layerData)}</h2>
                </div>
            );
        }
        return <Preview renderPreview={true} />;
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.editor,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setEditorState: (updatedObject) => dispatch(freeChange(updatedObject)),
        fetchLayerData: (pn, d) => dispatch(fetchLayerData(pn, d)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RemoteRender);
