import { IfcViewerAPI } from "web-ifc-viewer";

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({ container });

var house = document.getElementById("house");
var office = document.getElementById("office");

var file = "../../../IFC/02.ifc";

file = "../../../IFC/02.ifc";
loadIfc(file);


async function loadIfc(url) {
  await viewer.IFC.setWasmPath("../../../");
  const model = await viewer.IFC.loadIfcUrl(url);
  viewer.shadowDropper.renderShadow(model.modelID);
}
loadIfc(file);

window.onmousemove = () => viewer.IFC.selector.prePickIfcItem(true);

window.onclick = async () => {
  const { modelID, id } = await viewer.IFC.selector.pickIfcItem(true);
  const props = await viewer.IFC.getProperties(modelID, id, true, false);
  console.log(props);
};

window.ondblclick = () => viewer.IFC.selector.highlightIfcItem();

window.onkeydown = (event) => {
  if (event.code === "KeyC") {
    viewer.IFC.selector.unpickIfcItems();
    viewer.IFC.selector.unHighlightIfcItems();
  }
};

document.getElementById("express_803").addEventListener("click", () => {
  viewer.IFC.selector.pickIfcItemsByID(0, [803], true);
});

document.getElementById("express_350").addEventListener("click", () => {
  viewer.IFC.selector.pickIfcItemsByID(0, [350], true);
});

// Get the modal
var modal0 = document.getElementById("myModal");

// Get the button that opens the modal
var btn0 = document.getElementById("express_803");

// Get the <span> element that closes the modal
var span0 = document.getElementById("closezero");

// When the user clicks on the button, open the modal
btn0.onclick = function () {
  console.log("clicked");
  modal0.style.display = "block";
  
};

// When the user clicks on <span> (x), close the modal
span0.onclick = function () {
  modal0.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
};

// new modal

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("express_350");

// Get the <span> element that closes the modal
var span2 = document.getElementById("closeone");

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
