import React, { Component } from "react";
import html2canvas from 'html2canvas';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            file: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleImg = this.handleImg.bind(this)
    }

    // Mahdollistaa tekstin kirjoittamisen
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    // Mahdollistaa kuvan valitsemisen
    handleImg(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    // Funktio, jolla pystyy tallentamaan kyseisen kuvan mihin olet kirjoittanut tekstiä
    async tallenna() {
        const element = document.getElementById('meme'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/png'),
        link = document.createElement('a');

        link.href = data;
        link.download = 'meme.png';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        return (
            <div id="content">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <div id="meme" className='meme'>
                        <img className="memeimg" width="512" height="512" src={this.state.file}/>
                        <h2 className='top'>{this.state.topText}</h2>
                        <h2 className='bottom'>{this.state.bottomText}</h2>
                    </div>
                    <br/>
                    <input type="file" name="photo" accept="image/png, image/jpeg" 
                    onChange={this.handleImg} />
                    <br/>
                    <input type="text" name="topText" 
                        placeholder="Top text" value={this.state.topText}
                        onChange={this.handleChange} 
                    /> 
                    <br/>
                    <input type="text" name="bottomText" 
                        placeholder="Bottom text" value={this.state.bottomText}
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <button type="button" onClick={this.tallenna}>Tallenna</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator;