class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button/>
                <Navigation/>
            </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');
    }

    render() {
        return (
            <button className="hamburger" onClick={this.handleClick}>
      <span className="hamburger__box">
        <span className="hamburger__inner"></span>
      </span>
            </button>
        );
    }
}


const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="">Lorem</a></li>
                <li className="navigation__item"><a href="">Ipsum</a></li>
                <li className="navigation__item"><a href="">Dolor</a></li>
                <li className="navigation__item"><a href="">Sit</a></li>
            </ul>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));
