import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards.js';
const preview = require(`../../assets/preview.png`);

class NewCardForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title : '',
      file : '',
      imageURL : '',
      showCardForm: false,
      buttonText: 'Add Ideas'
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCardForm = this.toggleCardForm.bind(this);
  }

  handleChangeTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  handleChangeImage(event){
    event.preventDefault();
    let reader = new FileReader();

    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageURL: reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  handleSubmit(event){
    event.preventDefault();

    let formData = new FormData();

    formData.append('file', this.state.file);
    formData.append('title', this.state.title);

    this.props.addCard(formData);

    this.setState({
      title: '',
      file: '',
      imageURL: ''
    });
  }

  toggleCardForm(event){
    event.preventDefault();

    if(!this.state.showCardForm){
      this.setState({
        title: '',
        file: '',
        imageURL: '',
        showCardForm: true,
        buttonText: 'Close'
      })
    }else{
      this.setState({
        title: '',
        file: '',
        imageURL: '',
        showCardForm: false,
        buttonText: 'Add Ideas'
      })
    }
  }

  render(){
    return (
      <div id="new-card-form">

        <div className="add-button">
          <input type="Submit" value={this.state.buttonText} class="button" onClick={this.toggleCardForm}/>
        </div>

        { this.state.showCardForm ?
        <div id="new-idea-form">
          <form onSubmit={this.handleSubmit}>
            <div id="buttons">
              <textarea cols="30" rows="5" id="" value={this.state.title} placeholder="Describe your idea! (Image upload is optional)" onChange={this.handleChangeTitle} />
              <div id="image-upload-area">
                <div id="uploaded-image-preview">
                  <img id="preview" alt="preview" src={this.state.imageURL === '' ? preview : this.state.imageURL } />
                </div>
                <input type="file" accept="image/*" id="image-upload" placeholder="Image" onChange={this.handleChangeImage}/>
                </div>
              </div>
            <input type="submit" class="button" value="Post Idea"/>
          </form>
        </div>
        : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    priorities: state.priorities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedNewCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);

export default ConnectedNewCardForm;