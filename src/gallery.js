// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/iron-image/iron-image'
import '../src/gallery-image'

class Gallery extends PolymerElement {
    constructor(){
        super();

        this.dataReceived = false;
        this.isError = false;
        this.errorMsg = "";

        this.images = [];
    }

    filterData(searchString) {
        if(!searchString) {
            return null;
        } else {
            let rx = new RegExp(searchString, 'i');
            return function(item) {
                return item.tag.match(rx) || item.source.match(rx) || item.org.match(rx);
            }
        }
    }

    sortData(sortString) {
        if(sortString === "") {
            return null;
        } else {
            return function(a, b) {
              if(sortString === "date") {
                return new Date(a.date || "1/1/2000") - new Date(b.date || "1/1/2000");
              }
              else if(sortString === "active") {
                  if(a.active < b.active) {
                      return -1;
                  }
                  if(a.active > b.active) {
                      return 1;
                  }
                  return 0;
              }
            };
        }

    }

    messageReceived(event) {
        this.dataReceived = true;
        this.isError = false;
        this.images = this.ajaxResponse.rows || [];
        console.log("Message received");
    }

    errorReceived(event) {
        this.dataReceived = false;
        this.isError = true;
        this.errorMsg = event.detail.request.xhr.response || "Unknown Error";
    }

    static get template() {
        return html`
            <style include="shared-styles"></style>
            <style>
                .error img {
                    display: inline-block;
                    margin: 0 auto;
                }

                .error label {
                    display: inline-block;
                    margin: 0 auto;
                }

                .task-panel {
                    font-size: 12px;
                    margin-bottom: 1em;
                }
            </style>
        
            <h1>Gallery</h1>

            <iron-ajax auto
                url="http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0"
                handle-as="json"
                on-response="messageReceived"
                on-error="errorReceived"
                last-response="{{ajaxResponse}}"></iron-ajax>

            <div id="gallery">
                <div class="task-panel">
                    <input value="{{searchString::input}}" placeholder="Filter by tag, source or org">
                    <label>Sort By: <label>
                    <select value={{sortString::change}}>
                        <option>---</option>
                        <option value='date'>Date</option>
                        <option value='active'>Active</option>
                    </select>
                </div>
                <template is="dom-repeat" if="[[dataReceived]]" 
                          items="[[images]]" 
                          filter="{{filterData(searchString)}}" 
                          sort="{{sortData(sortString)}}">
                    <gallery-image
                        src="[[item.image]]"
                        title="[[item.description]]"
                        date="[[item.date]]"
                        tag="[[item.tag]]"></gallery-image>
                </template>
                <template is="dom-if" if=[[isError]]>
                    <div class="error">
                        <img src="images/sad-robot.png"/>
                        <label>[[errorMsg]]</label>
                    </div>
                </template>
            </div>
        `;
    }
}

// Register the element with the browser.
customElements.define('image-gallery', Gallery);