import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
 
class BusinessVerification extends Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
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
            />
            </div>
        );
    }
}

export default BusinessVerification;