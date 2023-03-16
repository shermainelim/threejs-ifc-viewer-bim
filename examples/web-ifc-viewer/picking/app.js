import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container});

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}
loadIfc('../../../IFC/02.ifc');

window.onmousemove = () => viewer.IFC.selector.prePickIfcItem(true);

window.onclick = async () => {
    const {modelID, id} = await viewer.IFC.selector.pickIfcItem(true);
    const props = await viewer.IFC.getProperties(modelID, id, true, false);
    console.log(props);
}

window.ondblclick = () => viewer.IFC.selector.highlightIfcItem();

window.onkeydown = (event) => {
    if(event.code === 'KeyC') {
        viewer.IFC.selector.unpickIfcItems();
        viewer.IFC.selector.unHighlightIfcItems();
    }
}

document.getElementById('express_803')
.addEventListener('click', () => {
    viewer.IFC.selector.pickIfcItemsByID(0, [803], true);
})

document.getElementById('express_350')
.addEventListener('click', () => {
    viewer.IFC.selector.pickIfcItemsByID(0, [350], true);
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("express_803");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  console.log("clicked");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// new modal 

// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("express_350");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}