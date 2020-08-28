import React, { Component } from 'react';
import './EmailLine.css';

class EmailLine extends Component {
    constructor(props){
        super(props)
        this.extraNum = this.extraNum.bind(this)
    }
    extraNum(extraNum) {
        if (this.props.extraNum) {
            return (
                <div className=" num">
                    {this.props.extraNum}
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="mail">
                <div className="mail-text email first">
                    {this.props.from}
                </div>
                
                <div className="mail-text email">
                    {this.props.to}
                </div>
                <this.extraNum />
                <div className="mail-text subject">
                    {this.props.subject}
                </div>
                <div className="mail-text clipped">
                    {this.props.clipped}
                </div>
                <div className="mail-text date">
                    {this.props.date}
                </div>
            </div>
        )
    }
}

export default EmailLine