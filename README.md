# simple-modal
A simple modal component

## Usage

```html
  <html>
    <head>
      <script src="./simple-modal.js"></script>
      <link rel="./simple-modal.css">
    </head>
    <body>
      <simple-modal></simple-modal>
    
    </body>
  </html>

```

---

# SimpleModal Component


This is a custom web component that represents a simple modal with a close button and a show modal button.


## Functions


### connectedCallback()

- Description: This function is called when the element is first connected to the document's DOM. It initializes the modal by creating a close button, setting up event listeners, and creating a show modal button if it doesn't already exist.

- Parameters: None


### hideModal()

- Description: This function hides the modal by changing its opacity and display properties, and sets the opacity of the show modal button to 1.

- Parameters: None


### showModal()

- Description: This function shows the modal by changing its opacity and display properties, and sets the opacity of the show modal button to 0.

- Parameters: None


### static get observedAttributes()

- Description: This static method defines which attributes the browser should watch for changes on this element.

- Returns: An empty array since no attributes are being observed.


### attributeChangedCallback(name, old_value, new_value)

- Description: This function is called when an observed attribute changes. In this component, there are no attributes being observed.

- Parameters:

  - `name`: The name of the attribute that changed.

  - `old_value`: The previous value of the attribute.

  - `new_value`: The new value of the attribute.


## ShowModal Component


This is a custom web component that represents a button to show the modal.


### Functions


### connectedCallback()

- Description: This function is called when the element is first connected to the document's DOM. It sets up a click event listener to show the modal when clicked.

- Parameters: None


### static get observedAttributes()

- Description: This static method defines which attributes the browser should watch for changes on this element.

- Returns: An empty array since no attributes are being observed.


### attributeChangedCallback(name, old_value, new_value)

- Description: This function is called when an observed attribute changes. In this component, there are no attributes being observed.

- Parameters:

  - `name`: The name of the attribute that changed.

  - `old_value`: The previous value of the attribute.

  - `new_value`: The new value of the attribute.


## Custom Element Registration


- The `SimpleModal` component is registered as a custom element with the tag name 'simple-modal'.

- The `ShowModal` component is registered as a custom element with the tag name 'simple-show-modal'.
