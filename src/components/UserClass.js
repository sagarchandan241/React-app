import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 2,
        };

    }


    render (){
        const {name, location} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                <h1>Count = {count}</h1>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    //    this.setState({
                    //     count2: this.state.count2 + 1,  # Never do such thing all setstate should be in add in only one object
                    //    })

                    })
                }}>Increase Count</button>
                <h2>count2 = {count2}</h2>
                <h2>{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact : sagarchandan</h4>
            </div>
        )
    }
};

export default UserClass;