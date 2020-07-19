import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
 
class BusinessVerification extends Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [], showSubmitButton: false };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        console.log(picture)
        if(picture.length === 0){
            this.setState({
                showSubmitButton: false
            })
        } else {
            this.setState({ 
                showSubmitButton: true 
            })
        }

    
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <div className="container" style={{ width:'75%', marginTop:'20%'}}>
            <h3 className="title">Please upload your business verification certificate</h3>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
            {this.state.showSubmitButton ? <button id="btn1" className='btn btn-primary' onClick={()=>{this.props.history.push('/profile'); alert("Your certificate has been uploaded successfull")}}>submit</button> : ""} 
            </div>
        );
    }
}

export default BusinessVerification;