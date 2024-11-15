import React from "react";
import styles from "../Restaurant Component/User.module.css";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            userInfo:{
                name:"Dumy name",
                location :"Default location",
                user_view_type:"Dummy",
                id : 0,
                avatar_url:"https://dummy.jpg",
            }
        }
    }
    async componentDidMount(){
        console.log("child componentDidMount")
        const data = await fetch("https://api.github.com/users/nikhitha-2000");
        const json = await data.json();
        this.setState({userInfo:json});
        console.log(json)
    }
    componentDidUpdate(){
        console.log("component dud updated")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render(){
        return (
        <div className={styles.usercard}>
            <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name :{this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h4>contact :@nikhitha-2000</h4>
        <h4>user view type: {this.state.userInfo.user_view_type}</h4>
        <h4>id:{this.state.userInfo.id}</h4>
     </div>
        )
    }
}

export default UserClass;