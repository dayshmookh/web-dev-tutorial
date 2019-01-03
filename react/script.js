
var items = [
    {
        img:"img.jpg",
        title: "Title",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Title",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Title",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Title",
        description: "Description"
    }
]



class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: props.img,
            title: props.title,
            description: props.description,
        };
    }

    render () {
        return (
            <div className="col s4">
                <div className="card ">
                    <div className="card-image">
                        <img src={this.state.img} alt="img" />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{this.state.title}</span>
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Cards extends React.Component {

    constructor (props) {
        super(props);
        this.cards = [];

        items.forEach(item => {
            this.cards.push(<Card img={item.img} title={item.title + " " + items.indexOf(item)} description={item.description} />)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    {this.cards}                
                </div>
            </div>
        )
    }
}

$(document).ready(()=>{
    ReactDOM.render(<Cards />, document.getElementById("root"))
})