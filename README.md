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
# Simple Modal


A simple modal component that can be shown or hidden using custom elements in HTML.


## Functions


### SimpleModal


#### connectedCallback()


- Checks if the modal is supposed to be hidden by checking the `hidden` attribute.

- Creates a close button with functionality to close the modal when clicked.

- Sets a transition effect for showing and hiding the modal.

- Creates a button to show the modal if one doesn't exist.

- Hides the modal by changing opacity and display properties.

- Updates the visibility of the modal trigger button.


#### hideModal()


- Hides the modal by changing opacity and display properties.

- Sets a timeout to delay the hiding effect for a smooth transition.

- Updates the visibility of the modal trigger button.


#### showModal()


- Shows the modal by changing opacity and display properties.

- Updates the visibility of the modal trigger button.


### ShowModal


#### connectedCallback()


- Adds an event listener to the element (button) to show the modal when clicked.


## Usage


To use the Simple Modal component, add the `<simple-modal>` custom element to your HTML. You can also use the `<simple-show-modal>` element as a trigger to show the modal.


Example:

```html

<simple-modal hidden></simple-modal>

<simple-show-modal>Click to Show Modal</simple-show-modal>

```


By clicking on the "Click to Show Modal" button, the modal will be displayed. The close button in the modal can be used to hide it again.

