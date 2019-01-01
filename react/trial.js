
// class Square extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }



//   render() {
    

//     return (

//       <div className=" col s3">
//         <div className="card-panel">
//           <h3 className="center">{this.props.name}</h3>
//         </div>
//       </div>

//     );
//   }
// }


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
    };
  }



  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    this.setState({
      value: new Date()
    })
  }

  render () {
    return(
      <div>
        {this.state.value.toString()}
      </div>
    )
  }

}

var c = <Counter />;

// ReactDOM.render(
//     <div className="container">
//         <div className="row">
//             <Square name="Krushn" />
//             <Square name="Somulu" />
//             <Square name="Swati" />
//             <Square name="Priyansh" />
//         </div>
//     </div>,
//     document.getElementById('root')
// );

var k = 5;

ReactDOM.render(
  c,
  document.getElementById('root')
);


// function timersetter () {
//   ReactDOM.render(
//     <div>
//       <p>Hello</p>
//       {new Date().toLocaleTimeString()}
//     </div>, 
//     document.getElementById('timer'));
// }


// function reloader () {
//   location.reload();
// }

// function colorsetter () {
//   $("body").css("background", "red");
// }

// var col = 0;
// var colors = ["red", "green", "blue", "yellow"];

// function colorcycle(){
//   $(".card-panel").css("background", colors[col]);

//   col = (++col)%4;
  
// }

//$(document).ready(function(){
  // setInterval(colorcycle,500);
//});