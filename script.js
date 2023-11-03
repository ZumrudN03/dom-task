const modal= document.createElement("div")
modal.className="modal";
document.body.append(modal);

modal.innerHTML=`
  <div class="modal-content">
  <h3>Modal</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <button class="close">close</button>
</div>
`

const openBtn = document.createElement("button");
openBtn.className="openbtn"
openBtn.textContent="Open"
document.body.append(openBtn)
openBtn.addEventListener("click",function(){
    modal.style.display="block"
});


const closeBtn = modal.querySelector(".close")
closeBtn.addEventListener("click",function(){
    modal.style.display = "none";
});
