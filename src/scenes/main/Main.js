import React from 'react';
import AppBar from '../../components/app-bar/AppBar'
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    searchCallBack(text) {
        console.log(text)
    }
    render() {
        return (
            <AppBar searchCallBack={this.searchCallBack}></AppBar>
        )
    }
}