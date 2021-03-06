import React, { Component } from 'react';
import Category from './category';
import Note from './note';

class CategoryBox extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#320B86', height: '80vh'}}>
                <Category name={this.props.categoryName} />
                <div className="row" style={{padding: "5%"}}>
                    <div className="col-md-4" onClick={() => this.props.handler(0, this.props.categoryName)}>
                        <Note message={this.props.tasks[0]["msg"]} color={this.props.tasks[0]["color"]} status={this.props.tasks[0]["status"]} />
                    </div>
                    <div className="col-md-4" onClick={() => this.props.handler(1, this.props.categoryName)}>
                        <Note message={this.props.tasks[1]["msg"]} color={this.props.tasks[1]["color"]} status={this.props.tasks[1]["status"]} />
                    </div>
                    <div className="col-md-4" onClick={() => this.props.handler(2, this.props.categoryName)}>
                        <Note message={this.props.tasks[2]["msg"]} color={this.props.tasks[2]["color"]} status={this.props.tasks[2]["status"]} />
                    </div>
                </div>
                <div className="row" style={{padding: "5%"}}>
                    <div className="col-md-4" onClick={() => this.props.handler(3, this.props.categoryName)}>
                        <Note message={this.props.tasks[3]["msg"]} color={this.props.tasks[3]["color"]} status={this.props.tasks[3]["status"]} />
                    </div>
                    <div className="col-md-4" onClick={() => this.props.handler(4, this.props.categoryName)}>
                        <Note message={this.props.tasks[4]["msg"]} color={this.props.tasks[4]["color"]} status={this.props.tasks[4]["status"]} />
                    </div>
                    <div className="col-md-4" onClick={() => this.props.handler(5, this.props.categoryName)}>
                        <Note message={this.props.tasks[5]["msg"]} color={this.props.tasks[5]["color"]} status={this.props.tasks[5]["status"]} />
                    </div>
                </div>
                <div className="row" style={{padding: "5%"}}>
                    <div className="col-md-4" onClick={() => this.props.handler(6, this.props.categoryName)}>
                        <Note message={this.props.tasks[6]["msg"]} color={this.props.tasks[6]["color"]} status={this.props.tasks[6]["status"]} />
                    </div>
                    <div className="col-md-4" onClick={() => this.props.handler(7, this.props.categoryName)}>
                        <Note message={this.props.tasks[7]["msg"]} color={this.props.tasks[7]["color"]} status={this.props.tasks[7]["status"]} />
                    </div>
                    <div className="col-md-4" onClick={() => this.props.handler(8, this.props.categoryName)}>
                        <Note message={this.props.tasks[8]["msg"]} color={this.props.tasks[8]["color"]} status={this.props.tasks[8]["status"]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryBox;
