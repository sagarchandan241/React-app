    const parent = React.createElement("div", {id: "parent"},
React.createElement("div", {id: "child"},
React.createElement("h1",{},"This is H1 tag")));
  


//const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);