import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Editor">
                <div className="header">
                    Editor
                </div>
                <textarea id="editor" rows={11} value={this.props.input} onChange={this.props.changeCallback} />
            </div>
        )
    }
}

export default Editor;