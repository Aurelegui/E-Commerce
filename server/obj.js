// // format from M/D/YYYY to YYYYMMDD

// // const { json } = require("express");

// // function formatDate(userDate) {
// //     // format from M/D/YYYY to YYYYMMDD
// //     var DateArray = userDate.split("/");
// //     var day = DateArray[1];
// //     var month = DateArray[0];
// //     if (day.length < 2) {
// //         day = '0' + day;
// //     }
// //     if (month.length < 2) {
// //         month = '0' + month;
// //     }
// //     var year = userDate.slice(-4);
// //     console.log(year);
// //   }

// //   console.log(formatDate("12/3/2014"));


// // This adds addEventListener to all Element with class "image".
// // When pressed removes actual Element
// function setup() {
//   document.querySelectorAll('.image')
//     .forEach(press => press.addEventListener('click', () => press.remove()))
// }

// // Example case. 
// document.body.innerHTML = `
//   <div class="image">
//     <img src="https://bit.ly/3lmYVna" alt="First">
//     <button class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://bit.ly/3flyaMj" alt="Second">
//     <button class="remove">X</button>
//   </div>`;

// setup();

// document.getElementsByClassName("remove")[0].click();
// console.log(document.body.innerHTML);


// // For example, for the membership ID "55555" the sum of all digits is 25. 
// // Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

// // function createCheckDigit(membershipId) {
// //     var numberArray = membershipId.split('').map(x=>+x);
// //     var sum = numberArray.reduce(
// //         (previousValue, currentValue) => previousValue + currentValue,0);
// //     sum = sum.toString();
// //     while(sum.length >= 2) {
// //         temp = sum.split('').map(x=>+x);
// //         sum = temp.reduce(
// //             (previousValue, currentValue) => previousValue + currentValue,0);
// //         sum = sum.toString();
// //     }
// //     return sum;
// //   }

// //   console.log(createCheckDigit("10"));

// // ALGOOOO

// /**
// //  * @param {number[]} numbers The array of numbers.
// //  * @param {number} sum The required target sum.
// //  * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
//  */
// // function findTwoSum(numbers, sum) {
// //   var result = [];
// //   k = 0;
// //   if (!numbers || sum < 1) {
// //     return null;
// //   }
// //   for(let i = 0; i < numbers.length; i++) {
// //     for(let j = 0; j < numbers.length; j++) {
// //       if(i == j){
// //         // console.log("j = " + j ,"i = " + i)
// //         j++;
// //       }
// //       // console.log(numbers[i], numbers[j]);
// //       if(numbers[i] + numbers[j] == sum){
// //         // k++;
// //         // console.log("i + j = ", numbers[i] + numbers[j], k)
// //         var temp = [i , j];
// //         result = temp;
// //         return result;
// //         // result = result.concat(temp);
// //         // result = [];
// //         // console.log(result);
// //         // console.log(temp);
// //       }
// //     }
// //   }
// //   if (!result) return null;
// //   return result;
// // }

// // const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
// // console.log(indices);


// //  REAAAAAAAAAAAAAACT

// // EXERCICE 1

// // React is loaded and is available as React and ReactDOM
// // imports should NOT be used
// // class Username extends React.Component {
// //   state = { value: "" };

// //   changeValue(value) {
// //     this.setState({ value });
// //   }

// //   render() {
// //     const { value } = this.state;
// //     return <h1>{value}</h1>;
// //   }
// // }

// // function App() {
// //   const myRef = React.useRef();
// //   function clickHandler() {
// //     document.querySelector("h1").innerHTML = myRef.current.value;
// //   }

// //   return (
// //     <div>
// //       <button onClick={clickHandler}>Change Username</button>
// //       <input type="text" ref={myRef}/>
// //       <Username />
// //     </div>
// //   );
// // }

// // document.body.innerHTML = "<div id='root'></div>";
// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);

// // document.querySelector("input").value = "John Doe";
// // document.querySelector("button").click();
// // setTimeout(() => console.log(document.getElementById("root").innerHTML));

// // EXERCICE 2
// // The Message component contains an anchor element and a paragraph below the anchor. Rendering of the paragraph should be toggled by clicking on the anchor element using the following logic:

// // At the start, the paragraph should not be rendered.
// // After a click, the paragraph should be rendered.
// // After another click, the paragraph should not be rendered.

// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: 0
//     };
//   }

//   clickHandler = e => {
//     e.preventDefault();
//     this.setState({
//       visible: !this.state.visible
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <a href="#" onClick={this.clickHandler}>
//           Want to buy a new car?
//         </a>
//         {this.state.visible && <p>Call +11 22 33 44 now!</p>}
//       </React.Fragment>
//     );
//   }
// }

// // document.body.innerHTML = "<div id='root'> </div>";

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<Message />, rootElement);

// //  EXERCICE 3

// // React is loaded and is available as React and ReactDOM
// // imports should NOT be used
// const Product = props => {
//   const plus = () => {
//     props.onVote(1, props.index);
//   };
//   const minus = () => {
//     props.onVote(-1, props.index);
//   };
//   return (
//     <li>
//       <span>{this.props.name}</span> - <span>votes: {this.props.votes}</span>
//       <button onClick={plus}>+</button>{" "}
//       <button onClick={minus}>-</button>
//     </li>
//   );
// };

// const GroceryApp = (props) => {
//   let [products, setProducts] = React.useState(props.products);
//   const onVote = (dir, index) => {
//     const nextProducts = [...products];
//     const product = products[index];
//     nextProducts[index] = { ...product, votes: product.votes + dir };
//     setProducts(nextProducts);
//   };

//   return (
//     <ul>
//       {products.sort((a, b) => b.votes - a.votes)
//         .map((product, index) => {
//           <Product product={product} index={index} onVote={onVote} />
//         })}
//     </ul>
//   );
// }

// document.body.innerHTML = "<div id='root'></div>";

// ReactDOM.render(<GroceryApp
//   products={[
//     { name: "Oranges", votes: 0 },
//     { name: "Bananas", votes: 0 }
//   ]}
// />, document.getElementById('root'));

// let plusButton = document.querySelector("ul > li > button");
// if (plusButton) {
//   plusButton.click();
// }
// console.log(document.getElementById('root').outerHTML)

const median = arr => {
  let arrayLength = arr.length;
  console.log("length arr = ", arrayLength);
  let arrayMid = arrayLength / 2;
  console.log("mid arr = ", arrayMid);

}

console.log(median([1, 2, 3, 4, 6, 5, 7, 8, 9]))