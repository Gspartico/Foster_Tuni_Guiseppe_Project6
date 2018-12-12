import React, { Component } from 'react';
import './App.css';
import Logo from './assets/logo.svg'

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            toggleList: "",
        }
    }
    toggleList = () => {
        
        if (this.state.toggleList === "") {
            this.setState({
                toggleList: "yes",
            })
        } else {
            this.setState({
                toggleList: "",
            })
        }
    }
    render() {
        const toggleList = this.state.toggleList !== ""
        return (
            
            <div className="MainNav">
                <header className="mainHeader">
                    <h1 className="visuallyhidden">Synchronicity</h1>
                    <nav className="mainHeader__nav wrapper clearfix">                       
                        {/* ADD IN ON CLICK DROP DOWN INFO WITH THEIR WHOLE USER, EASIER TO BUILD WITH THE INFO PASSING */}
                        <p className="mainHeader__nav__logo">
                            <span className="mainHeader__nav__logo--start">synchroni</span><span className="mainHeader__nav__logo--end">C<img aria-hidden="true" src={Logo} alt="synchronicity: building img by Rudez Studio from the Noun Project https://thenounproject.com/rudezstudio/collection/building-and-manufacturing/" className="mainHeader__nav__logo--img" />TY</span>
                        </p>
                        
                    </nav>
                </header>
            </div>
        );
    }
}

export default MainNav;