import React from "react";
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            filterdUsers:[]
        }
    }
    searchUsers(e){
        let users = this.state.users;
        if(e.target.value===""){
            this.setState({filterdUsers:users})
        }else{
            let filterdUsers = users.filter((user)=>{
                return user.name.includes(e.target.value) || user.username.includes(e.target.value)
            })
            this.setState({filterdUsers:filterdUsers})
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="form-group">
                        <input type="email" class="form-control"   placeholder="Search user" onChange={(e)=>this.searchUsers(e)}/>
                    </div>
                </div>
                <div className="row">
                    {this.state.filterdUsers.map((user) => {
                        return (
                            <div className="col-md-3">
                                <div class="card" style={{ "width": "18rem" }}>
                                    {/* <img class="card-img-top" src={photo.name} alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">{user.username}</h5>
                                        <h5 class="card-title">{user.name}</h5>
                                        <h5 class="card-title">{user.email}</h5>
                                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json,filterdUsers:json }))
    }
}

export default Users