const element = (
  <div id="A1">
    <div id="B1">
      <div id = "C1">C1</div>
      <div id = "C2">C2</div>
    </div>
    <div id="B2">B2</div>
  </div>
)

console.log(JSON.stringify(element, null, 2))

function App() {
  return element;
}

export default App;
