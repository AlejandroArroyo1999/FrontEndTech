import './App.css';
import React from 'react';

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Previewer">
                <div className="header">
                    Previewer
                </div>
                <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.result }}>
                    
                </div>
            </div>
        )
    }
}

export default Previewer;