import React, { Component } from 'react';
import CategoryBox from './categoryBox';
import AddTask from './addTask';

class TrafficControl extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            tasksStage1: [{msg: "task 1", color: "yellow", status: 0},
                          {msg: "task 2", color: "yellow", status: 0},
                          {msg: "task 3", color: "yellow", status: 0},
                          {msg: "task 4", color: "yellow", status: 0},
                          {msg: "task 5", color: "yellow", status: 0},
                          {msg: "task 6", color: "yellow", status: 0},
                          {msg: "task 7", color: "yellow", status: 0},
                          {msg: "task 8", color: "yellow", status: 0},
                          {msg: "task 9", color: "yellow", status: 0}
                         ],
            tasksStage2: [{msg: "task 1", color: "yellow", status: 0},
                          {msg: "task 2", color: "yellow", status: 0},
                          {msg: "task 3", color: "yellow", status: 0},
                          {msg: "task 4", color: "yellow", status: 0},
                          {msg: "task 5", color: "yellow", status: 0},
                          {msg: "task 6", color: "yellow", status: 0},
                          {msg: "task 7", color: "yellow", status: 0},
                          {msg: "task 8", color: "yellow", status: 0},
                          {msg: "task 9", color: "yellow", status: 0}
                         ],
            tasksStage3: [{msg: "task 1", color: "yellow", status: 0},
                          {msg: "task 2", color: "yellow", status: 0},
                          {msg: "task 3", color: "yellow", status: 0},
                          {msg: "task 4", color: "yellow", status: 0},
                          {msg: "task 5", color: "yellow", status: 0},
                          {msg: "task 6", color: "yellow", status: 0},
                          {msg: "task 7", color: "yellow", status: 0},
                          {msg: "task 8", color: "yellow", status: 0},
                          {msg: "task 9", color: "yellow", status: 0}
                         ],
            addition: props.addition,
            reset: props.reset

        }
        this.handleClick = this.handleClick.bind(this);
        this.getTaskData = this.getTaskData.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({addition: nextProps.addition, reset: nextProps.reset});

        if(nextProps.reset == 1)
        {
            this.setState({
                tasksStage1: [{msg: "task 1", color: "yellow", status: 0},
                              {msg: "task 2", color: "yellow", status: 0},
                              {msg: "task 3", color: "yellow", status: 0},
                              {msg: "task 4", color: "yellow", status: 0},
                              {msg: "task 5", color: "yellow", status: 0},
                              {msg: "task 6", color: "yellow", status: 0},
                              {msg: "task 7", color: "yellow", status: 0},
                              {msg: "task 8", color: "yellow", status: 0},
                              {msg: "task 9", color: "yellow", status: 0}
                             ],
                tasksStage2: [{msg: "task 1", color: "yellow", status: 0},
                              {msg: "task 2", color: "yellow", status: 0},
                              {msg: "task 3", color: "yellow", status: 0},
                              {msg: "task 4", color: "yellow", status: 0},
                              {msg: "task 5", color: "yellow", status: 0},
                              {msg: "task 6", color: "yellow", status: 0},
                              {msg: "task 7", color: "yellow", status: 0},
                              {msg: "task 8", color: "yellow", status: 0},
                              {msg: "task 9", color: "yellow", status: 0}
                             ],
                tasksStage3: [{msg: "task 1", color: "yellow", status: 0},
                              {msg: "task 2", color: "yellow", status: 0},
                              {msg: "task 3", color: "yellow", status: 0},
                              {msg: "task 4", color: "yellow", status: 0},
                              {msg: "task 5", color: "yellow", status: 0},
                              {msg: "task 6", color: "yellow", status: 0},
                              {msg: "task 7", color: "yellow", status: 0},
                              {msg: "task 8", color: "yellow", status: 0},
                              {msg: "task 9", color: "yellow", status: 0}
                             ]
            });
        }
    }

    handleClick(index, category){
        var newState1 = this.state.tasksStage1;
        var newState2 = this.state.tasksStage2;
        var newState3 = this.state.tasksStage3;

        if(category == "Tasks")
        {
            if(newState1[index]["status"])
            {
                var tasksFull = true;
                var i;

                for(i = 0; i < newState2.length; ++i){
                    if(newState2[i]["status"] == 0)
                    {
                        newState2[i]["msg"] = newState1[index]["msg"];
                        newState2[i]["color"] = newState1[index]["color"];
                        newState2[i]["status"] = 1;
                        tasksFull = false;
                        break;
                    }
                }

                if(tasksFull)
                {
                    alert("Working on Too Many Tasks Already")
                }
                else
                {
                    newState1[index]["status"] = 0;

                    this.setState({
                        tasksStage1: newState1,
                        tasksStage2: newState2
                    });
                }
            }
        }
        else if (category == "Working")
        {
            if(newState2[index]["status"])
            {
                var tasksFull = true;
                var i;

                for(i = 0; i < newState3.length; ++i){
                    if(newState3[i]["status"] == 0)
                    {
                        newState3[i]["msg"] = newState2[index]["msg"];
                        newState3[i]["color"] = newState2[index]["color"];
                        newState3[i]["status"] = 1;
                        tasksFull = false;
                        break;
                    }
                }

                if(tasksFull)
                {
                    alert("Delete a Completed Task")
                }
                else
                {
                    newState2[index]["status"] = 0;

                    this.setState({
                        tasksStage2: newState2,
                        tasksStage3: newState3
                    });
                }
            }
        }
        else
        {
            if(newState3[index]["status"])
            {
                newState3[index]["status"] = 0;

                this.setState({
                    tasksStage3: newState3
                });
            }
        }
    }

    getTaskData(msg, color)
    {
        var newState1 = this.state.tasksStage1;
        var tasksFull = true;
        var i;

        if(msg.length > 25)
        {
            alert("Task Description Too Long, Has Been Sliced in PostIt");
            msg = msg.substr(0,25);
        }

        for(i = 0; i < newState1.length; ++i){
            if(newState1[i]["status"] == 0)
            {
                newState1[i]["msg"] = msg;
                newState1[i]["color"] = color;
                newState1[i]["status"] = 1;
                tasksFull = false;
                break;
            }
        }
        if(tasksFull)
        {
            alert("Task List is Full")
        }
        else
        {
            this.setState({
                taskStage1: newState1
            });
        }

    }

    render()
    {
        if(this.state.addition == 0)
        {
            return(
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <CategoryBox categoryName="Tasks" handler={this.handleClick} tasks={this.state.tasksStage1} />
                            </div>
                            <div className="col-md-4">
                                <CategoryBox categoryName="Working" handler={this.handleClick} tasks={this.state.tasksStage2} />
                            </div>
                            <div className="col-md-4">
                                <CategoryBox categoryName="Completed" handler={this.handleClick} tasks={this.state.tasksStage3} />
                            </div>
                        </div>
                    </div>
                );
        }
        else
        {
            return(
                <AddTask getTaskData={this.getTaskData}/>
            );
        }
    }
}

export default TrafficControl;
