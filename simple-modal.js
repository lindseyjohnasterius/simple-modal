class SimpleModal extends HTMLElement {
  connectedCallback(){
    const hidden = this.getAttribute('hidden');
    if(hidden !== null){this.hideModal()}
    const close_button = document.createElement('span');
    close_button.innerText = 'x';
    close_button.classList.add('close-button');
    close_button.addEventListener('click', (e) => {
      this.hideModal()
    });
    this.appendChild(close_button);
    this.style.transition = 'opacity 0.5s ease-out';
    this.open_modal_div = document.querySelector('simple-show-modal');
    if(this.open_modal_div === null){
      this.open_modal_div = document.createElement('simple-show-modal');
      this.open_modal_div.innerText = 'Show Modal';
      document.body.appendChild(this.open_modal_div);
    }
    this.open_modal_div.style.opacity = 0;

  }

  hideModal(){
    this.style.opacity = 0;
    setTimeout((e)=>{
      this.style.display = 'none';
    }, 600);
    this.open_modal_div = document.querySelector('simple-show-modal');
    this.open_modal_div.style.opacity = 1;
  }

  showModal(){
    this.style.opacity = 1;
    this.style.display = 'flex';
    this.open_modal_div = document.querySelector('simple-show-modal');
    this.open_modal_div.style.opacity = 0;
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }
}

customElements.define('simple-modal', SimpleModal)


class ShowModal extends HTMLElement {
  connectedCallback(){
    this.addEventListener('click', function(){
      document.querySelector('simple-modal').showModal();

    })
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('simple-show-modal', ShowModal)


