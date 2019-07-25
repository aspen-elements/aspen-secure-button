import { PolymerElement,html } from '@polymer/polymer/polymer-element.js';
import {AspenSecurableMixin} from'@aspen-elements/aspen-securable-mixin';
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/paper-tooltip/paper-tooltip.js'
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
/**
 * `asp-secure-button` This component is a button that is only visible to the person with the appropriate role.
 *     <asp-button icon="" tooltip="Some tooltip text"></asp-button>

        ### Styling

        Custom Property | Description | Default Value
        ----------------|-------------|--------------
        `--icon-size` | the height and width of the icon | 20px
        `--icon-color` | the color of the icon | #909090
        `--tooltip-font-size` | the font size of the tooltip | 0.9em
        `--tooltip-background-color` |  the background color of the tooltip | #616161
        `--tooltip-text-color` | the color of the tooltip text | white

 * 
 * 
 * 
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenSecureButton extends AspenSecurableMixin(PolymerElement) {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
                --icon-size: 20px;
                --icon-color: #909090;
                --tooltip-font-size: 0.9em;
                --tooltip-background-color: #616161;
                --tooltip-text-color: white;
            }

            iron-icon{
                --iron-icon-height: var(--icon-size);
                --iron-icon-width: var(--icon-size);
                color: var(--icon-color);
            }

            paper-tooltip{
                --paper-tooltip:{
                    font-size: var(--tooltip-font-size);
                }
                --paper-tooltip-text-color: var(--tooltip-text-color);
                --paper-tooltip-background: var(--tooltip-background-color);
            }
        </style>
        

        <template is="dom-if" if="[[hasRole]]">
            <paper-tooltip for="icon" position="right" offset="10">[[tooltip]]</paper-tooltip>
            <iron-icon id="icon" icon="[[icon]]"></iron-icon>
        </template>
`;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
      return 'aspen-secure-button';
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
      return {
          /** The name of the icon. */
          icon:{
              type: String,
              value: ''
          },

          /** The text of the tooltip. */
          tooltip:{
              type: String,
              value: ''
          }

      };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
      super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized. 
   */
  ready() {
      super.ready();

      afterNextRender(this, function() {
          
      });
  }
}

window.customElements.define(AspenSecureButton.is, AspenSecureButton);
