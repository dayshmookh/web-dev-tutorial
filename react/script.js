
var listofcars = [
    {
        img:"4.png",
        title: "Car",
        description: "Description"
    },
    {
        img:"4.png",
        title: "Car",
        description: "Description"
    },
    {
        img:"4.png",
        title: "Car",
        description: "Description"
    },
    {
        img:"4.png",
        title: "Car",
        description: "Description"
    },
    {
        img:"4.png",
        title: "Car",
        description: "Description"
    },
    {
        img:"4.png",
        title: "Car",
        description: "Description"
    }
]
;


var listofsweets = [
    {
        img:"img.jpg",
        title: "Sweet",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Sweet",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Sweet",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Sweet",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Sweet",
        description: "Description"
    },
    {
        img:"img.jpg",
        title: "Sweet",
        description: "Description"
    }
]
;


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

        props.list.forEach(item => {
            this.cards.push(<Card img={item.img} title={item.title + " " + props.list.indexOf(item)} description={item.description} />)
        })
    }

    render () {
        return (
            
                <div className="row">
                    {this.cards}                
                </div>
            
        )
    }
}



class SidebarItem extends React.Component {
    render () {
        return (
            <a href={this.props.link} className="collection-item">{this.props.text}</a>
        )
    }
}

class Sidebar extends React.Component {
    constructor (props) {
        super(props);
        this.items = [];

        props.list.forEach(item => {
            this.items.push(<SidebarItem link={"/"+item} text={item} />)
        })
    }

    render () {
        return (
            <div class="collection">
                {this.items}
            </div>
        );
    }
}


var sidemenuitems = ["first", "second", "third", "fourth"];




// ----------



class Clock extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.changer(),
            1000
        );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changer() {
        this.setState({
            date: new Date()
        });
    }



    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
 




// ---------









$(document).ready(()=>{
    ReactDOM.render(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel center">
                        <Clock />
                    </div>
                </div>
                <div className="col s9">
                    <Cards list={listofsweets} />
                    <Cards list={listofcars} />
                </div>
                <div className="col s3">
                    <Sidebar list={sidemenuitems} />
                </div>
            </div>
            
        </div>, 
        document.getElementById("root")
    )
})