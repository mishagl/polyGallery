import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import 'plastic-image'
import 'intersection-observer'

class GalleryImage extends PolymerElement {
    static get properties () {
        return {
          src: {
            type: String,
            value: ''
          },
          title: {
            type: String,
            value: ''
          },
          date: {
            type: String,
            value: ''
          },
          tag: {
            type: String,
            value: ''
          }
        };
      }

    toDate(strDateIn) {
        return new Date(strDateIn || "1/1/2000").toLocaleDateString();
    }

    static get is() {
        return "gallery-image";
    }

    static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
        <style>
            .img,
            .img.gallery-image {
                border: 1px solid #ccc;
                box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                padding: 0.5em;
                padding-bottom: 2em;

                position: relative;
                width: 320px;
                margin-bottom: 1em;
                margin-right: 1em;

                display: inline-block;
            }

            .img:hover,
            .img.gallery-image:hover {
                border-color: #000;
            }

            .img.inactive,
            .img.inactive.gallery-image {
                background-color: rgb(255, 233, 199);
            }

            .img > label,
            .img.gallery-image > label {
                display: inline-block;
                width: 320px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .img > .date,
            .img.gallery-image > .date {
                bottom: 3px;
                position: absolute;
                right: .5em;
                font-size: 12px;
            }

            .img > .tag,
            .img.gallery-image > .tag {
                bottom: 3px;
                position: absolute;
                left: .5em;
                text-transform: capitalize;
                font-size: 12px;
            }

            /*** Loader (src: https://loading.io/css/) ***/

            .lds-dual-ring {
                position: absolute;
                display: inline-block;
                width: 64px;
                height: 64px;
                z-index: -1;
                top: 112px;
                left: 128px;
            }

            .lds-dual-ring:after {
                content: " ";
                display: block;
                width: 46px;
                height: 46px;
                margin: 1px;
                border-radius: 50%;
                border: 5px solid rgb(19, 138, 236);
                border-color: rgb(19, 138, 236) transparent rgb(19, 138, 236) transparent;
                animation: lds-dual-ring 1.2s linear infinite;
            }

            @keyframes lds-dual-ring {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        </style>
        <div class="img">
            <plastic-image lazy-load preload sizing="contain" srcset="[[src]]" style="width:320px; height:288px;"></plastic-image>
            <label title="[[title]]">[[title]]</label>
            <span class="date">[[toDate(date)]]</span>
            <span class="tag">[[tag]]</span>
            <div class="loader lds-dual-ring"></div>
        </div>
    `;
  }
}

// Register the element with the browser.
customElements.define('gallery-image', GalleryImage);