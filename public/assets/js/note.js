import React, { Component } from 'react';

class Note extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            message: props.message,
            color: props.color,
            status: props.status
        }
    }

    componentWillReceiveProps(nextProps){
      this.setState({ message: nextProps.message,
                      color: nextProps.color,
                      status: nextProps.status
                    });
    }

    render(){
        var style = {backgroundColor: this.state.color, color: 'black', width: '100%', height: '15vh', padding: '6%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', overflowWrap: 'break-word'};

        if(this.state.status == 1)
        {
            return(
                <div style={style}>
                    <span className="romanText" style={{fontSize: '1vw'}}>{this.state.message}</span>
                </div>
            );
        }
        else
            return(<div style={{backgroundColor: 'transparent', color: 'transparent', width: '100%', height: '15vh'}}>

            </div>);

    }
}

export default Note;
