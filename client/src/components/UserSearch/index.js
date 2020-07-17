import React, { Component } from "react";
//import { Link } from 'react-router-dom';
//import style from "./style.module.css";
import { user as userAPI } from "../../utils/setAuthToken";
import SearchForm from "../../components/SearchForm";
import {List} from "../../components/ItemList";
import { Col, Row } from "../../components/Grid";


class UserSearch extends Component {   
    constructor(props) {
        super(props);
    };
    state = {
        Items: [],
        message: ""
      
    };
    handleForm = event => {
        event.preventDefault();
        userAPI
        .scrape({
            val: event.target.name,
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res.status)
                this.setState({
                    Items: res.data
                  })
            }
        })
        .catch(err => {
            console.warn(err.response.data)
        });        
    }


    handleSearch = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    ItemSearch = () => {
        userAPI
        .search({
            searchText: this.state.Items
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res.status)
                console.log(res.data)
                this.setState({
                    searchText:res.data
                  })

            }
        })
        .catch(err => {
            console.log(err.response.data)
        });   
    }

    handleFormSubmit = event =>{
        event.preventDefault();
        this.ItemSearch();
    }
    render (){
        return (
        
        <div className = "container-fluid">
            <div className='row'>
                <div className="col-md-12">    
                    <SearchForm handleSearch={this.handleSearch}
                            handleFormSubmit={this.handleFormSubmit}/>
                </div>   
            </div>
            <div className='row'>
                <div className="col-md-12">    
                    {this.state.Items ? (
                        <>
                        <h4>Search Items {this.state.Items}
                        </h4>
                        <Row className="flex-wrap-reverse">
                            <Col size="md-6">
                                
                            </Col>
                            <Col size="md-4">
                                <b>Item</b>
                            </Col>
                            <Col size="md-2">
                            </Col>
                        </Row>
                        <List>
                            {this.state.Items.map(Item => (
                                <ItemList
                                key={Item.id}
                                Item={Item.itemName}
                                val={Item.val}
                                handleForm={this.handleForm}
                                Button={() => (
                                    <button
                                      onClick={() => this.handleForm()}
                                      className="btn btn-primary ml-2"
                                    >
                                      Add Item
                                    </button>
                                  )}
                                />
                                ))}
                        </List>
                        </>
                        ) : 
                        (
                        <h3 className="text-center">{this.state.message}</h3>
                    )}                    
                </div>
               
            </div> 
            
        </div>
       
    );
}

}

export default UserSearch;


