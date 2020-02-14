/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DateCallback,
} from './components/datepicker/datepicker';
import {
  Option,
} from './components/dropdown-option/dropdown-option.types';
import {
  TabItemOptions,
} from './components/tab-item/tab-item';
import {
  TabItemOptions as TabItemOptions1,
} from './components/tab-item/tab-item';

export namespace Components {
  interface BalAccordion {
    /**
    * Close the accordion
    */
    'close': () => Promise<void>;
    /**
    * Bal-Icon of the close trigger button
    */
    'closeIcon': string;
    /**
    * Label of the close trigger button
    */
    'closeLabel': string;
    /**
    * Controls if the accordion is collapsed or not
    */
    'collapsed': boolean;
    /**
    * Open the accordion
    */
    'open': () => Promise<void>;
    /**
    * Bal-Icon of the open trigger button
    */
    'openIcon': string;
    /**
    * Label of the open trigger button
    */
    'openLabel': string;
    /**
    * Triggers the accordion
    */
    'toggle': () => Promise<void>;
    /**
    * Type defines the theme of the accordion toggle
    */
    'type': | "is-primary"
    | "is-info";
  }
  interface BalButton {
    /**
    * If `true` the button is disabled
    */
    'disabled': boolean;
    /**
    * If `true` the button has a full width
    */
    'expanded': boolean;
    /**
    * If `true` the button is inverted
    */
    'inverted': boolean;
    /**
    * If `true` the button has a light color
    */
    'light': boolean;
    /**
    * If `true` the label is hidden and a loading spinner is shown instead.
    */
    'loading': boolean;
    /**
    * If `true` the button is outlined
    */
    'outlined': boolean;
    /**
    * The theme type of the button. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-link";
  }
  interface BalDatepicker {
    /**
    * Close the datepicker dropdown
    */
    'close': () => Promise<void>;
    /**
    * Disable the input
    */
    'disabled': boolean;
    /**
    * Callback to determine which date in the datepicker should be selectable.
    */
    'filter': DateCallback;
    /**
    * Language of the datepicker. Possible values are `de`, `fr`,`it` or `en`.
    */
    'language': string;
    /**
    * Latest date available for selection
    */
    'maxDate': string;
    /**
    * Latest year available for selection
    */
    'maxYear': string;
    /**
    * Earliest date available for selection
    */
    'minDate': string;
    /**
    * Earliest year available for selection
    */
    'minYear': string;
    /**
    * Open the datepicker dropdown
    */
    'open': () => Promise<void>;
    /**
    * Placeholder text to render if no date has been selected.
    */
    'placeholder': string;
    /**
    * The value of the datepicker with the format `dd.MM.yyyy`.
    */
    'value': string;
  }
  interface BalDropdown {
    /**
    * Closes the dropdown menu.
    */
    'close': () => Promise<void>;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled': boolean;
    /**
    * If `true`, the component uses the whole width.
    */
    'expanded': boolean;
    /**
    * If `true`, the height of the dropdown content is fixed.
    */
    'fixed': boolean;
    /**
    * Returns the value of the dropdown.
    */
    'getSelected': () => Promise<Option>;
    /**
    * Open the dropdown menu.
    */
    'open': () => Promise<void>;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder': string;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'readonly': boolean;
    /**
    * Selects an option.
    */
    'select': (option: Option) => Promise<void>;
    /**
    * Open & closes the dropdown.
    */
    'toggle': () => Promise<void>;
    /**
    * Defines the trigger icon on the right site.
    */
    'triggerIcon': string;
    /**
    * If `true`, the use can search for the option.
    */
    'typeahead': boolean;
    /**
    * The value of the selected dropdown item.
    */
    'value': Option;
  }
  interface BalDropdownOption {
    /**
    * TODO: Describe
    */
    'activated': boolean;
    /**
    * TODO: Describe
    */
    'highlight': string;
    /**
    * Tell's if the item is activated by selection.
    */
    'isHidden': () => Promise<boolean>;
    /**
    * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
    */
    'label': string;
    /**
    * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
    */
    'value': string | boolean | number | object;
  }
  interface BalField {
    /**
    * Baloise icon for the left side of the input
    */
    'iconLeft': string;
    /**
    * Baloise icon for the right side of the input
    */
    'iconRight': string;
    /**
    * Label text
    */
    'label': string;
    /**
    * If `true` a asterix (*) is added to the label text
    */
    'required': boolean;
    /**
    * Validation message text
    */
    'validationMessage': string;
  }
  interface BalIcon {
    'isLeft': boolean;
    'isRight': boolean;
    /**
    * The name of the icon without the bal-icon prefix.
    */
    'name': string;
    /**
    * Defines the size of the icon.
    */
    'size': "small" | "medium" | "large" | "";
  }
  interface BalModal {
    'close': () => Promise<void>;
    'open': () => Promise<void>;
  }
  interface BalModalActions {}
  interface BalModalTitle {}
  interface BalSpinner {}
  interface BalTabItem {
    /**
    * Tell's if the tab is active and the content is visible.
    */
    'active': boolean;
    /**
    * If `true` a small red bubble is added to the tab.
    */
    'bubble': boolean;
    /**
    * If `true` the tab is disabled.
    */
    'disabled': boolean;
    /**
    * Options of the tab like label, value etc.
    */
    'getOptions': () => Promise<TabItemOptions>;
    /**
    * Label for the tab.
    */
    'label': string;
    /**
    * Sets the tab active.
    */
    'setActive': (active: boolean) => Promise<void>;
    /**
    * This is the key of the tab.
    */
    'value': string;
  }
  interface BalTabs {
    /**
    * If `true` the field expands over the whole width.
    */
    'expanded': boolean;
    /**
    * If you want the rounded tab style
    */
    'rounded': boolean;
    /**
    * Dropdown a tab by the value of the tab item.
    */
    'select': (value: string) => Promise<void>;
  }
  interface BalTag {
    /**
    * The theme type of the tag. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-light";
  }
  interface BalToast {
    /**
    * Closes this toast
    */
    'close': () => Promise<void>;
    /**
    * Closes the toast after the given duration in ms
    */
    'closeIn': (duration: number) => Promise<void>;
    /**
    * Message text
    */
    'message': string;
    /**
    * The theme type of the toast. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  }
}

declare global {


  interface HTMLBalAccordionElement extends Components.BalAccordion, HTMLStencilElement {}
  var HTMLBalAccordionElement: {
    prototype: HTMLBalAccordionElement;
    new (): HTMLBalAccordionElement;
  };

  interface HTMLBalButtonElement extends Components.BalButton, HTMLStencilElement {}
  var HTMLBalButtonElement: {
    prototype: HTMLBalButtonElement;
    new (): HTMLBalButtonElement;
  };

  interface HTMLBalDatepickerElement extends Components.BalDatepicker, HTMLStencilElement {}
  var HTMLBalDatepickerElement: {
    prototype: HTMLBalDatepickerElement;
    new (): HTMLBalDatepickerElement;
  };

  interface HTMLBalDropdownElement extends Components.BalDropdown, HTMLStencilElement {}
  var HTMLBalDropdownElement: {
    prototype: HTMLBalDropdownElement;
    new (): HTMLBalDropdownElement;
  };

  interface HTMLBalDropdownOptionElement extends Components.BalDropdownOption, HTMLStencilElement {}
  var HTMLBalDropdownOptionElement: {
    prototype: HTMLBalDropdownOptionElement;
    new (): HTMLBalDropdownOptionElement;
  };

  interface HTMLBalFieldElement extends Components.BalField, HTMLStencilElement {}
  var HTMLBalFieldElement: {
    prototype: HTMLBalFieldElement;
    new (): HTMLBalFieldElement;
  };

  interface HTMLBalIconElement extends Components.BalIcon, HTMLStencilElement {}
  var HTMLBalIconElement: {
    prototype: HTMLBalIconElement;
    new (): HTMLBalIconElement;
  };

  interface HTMLBalModalElement extends Components.BalModal, HTMLStencilElement {}
  var HTMLBalModalElement: {
    prototype: HTMLBalModalElement;
    new (): HTMLBalModalElement;
  };

  interface HTMLBalModalActionsElement extends Components.BalModalActions, HTMLStencilElement {}
  var HTMLBalModalActionsElement: {
    prototype: HTMLBalModalActionsElement;
    new (): HTMLBalModalActionsElement;
  };

  interface HTMLBalModalTitleElement extends Components.BalModalTitle, HTMLStencilElement {}
  var HTMLBalModalTitleElement: {
    prototype: HTMLBalModalTitleElement;
    new (): HTMLBalModalTitleElement;
  };

  interface HTMLBalSpinnerElement extends Components.BalSpinner, HTMLStencilElement {}
  var HTMLBalSpinnerElement: {
    prototype: HTMLBalSpinnerElement;
    new (): HTMLBalSpinnerElement;
  };

  interface HTMLBalTabItemElement extends Components.BalTabItem, HTMLStencilElement {}
  var HTMLBalTabItemElement: {
    prototype: HTMLBalTabItemElement;
    new (): HTMLBalTabItemElement;
  };

  interface HTMLBalTabsElement extends Components.BalTabs, HTMLStencilElement {}
  var HTMLBalTabsElement: {
    prototype: HTMLBalTabsElement;
    new (): HTMLBalTabsElement;
  };

  interface HTMLBalTagElement extends Components.BalTag, HTMLStencilElement {}
  var HTMLBalTagElement: {
    prototype: HTMLBalTagElement;
    new (): HTMLBalTagElement;
  };

  interface HTMLBalToastElement extends Components.BalToast, HTMLStencilElement {}
  var HTMLBalToastElement: {
    prototype: HTMLBalToastElement;
    new (): HTMLBalToastElement;
  };
  interface HTMLElementTagNameMap {
    'bal-accordion': HTMLBalAccordionElement;
    'bal-button': HTMLBalButtonElement;
    'bal-datepicker': HTMLBalDatepickerElement;
    'bal-dropdown': HTMLBalDropdownElement;
    'bal-dropdown-option': HTMLBalDropdownOptionElement;
    'bal-field': HTMLBalFieldElement;
    'bal-icon': HTMLBalIconElement;
    'bal-modal': HTMLBalModalElement;
    'bal-modal-actions': HTMLBalModalActionsElement;
    'bal-modal-title': HTMLBalModalTitleElement;
    'bal-spinner': HTMLBalSpinnerElement;
    'bal-tab-item': HTMLBalTabItemElement;
    'bal-tabs': HTMLBalTabsElement;
    'bal-tag': HTMLBalTagElement;
    'bal-toast': HTMLBalToastElement;
  }
}

declare namespace LocalJSX {
  interface BalAccordion {
    /**
    * Bal-Icon of the close trigger button
    */
    'closeIcon'?: string;
    /**
    * Label of the close trigger button
    */
    'closeLabel'?: string;
    /**
    * Controls if the accordion is collapsed or not
    */
    'collapsed'?: boolean;
    /**
    * Bal-Icon of the open trigger button
    */
    'openIcon'?: string;
    /**
    * Label of the open trigger button
    */
    'openLabel'?: string;
    /**
    * Type defines the theme of the accordion toggle
    */
    'type'?: | "is-primary"
    | "is-info";
  }
  interface BalButton {
    /**
    * If `true` the button is disabled
    */
    'disabled'?: boolean;
    /**
    * If `true` the button has a full width
    */
    'expanded'?: boolean;
    /**
    * If `true` the button is inverted
    */
    'inverted'?: boolean;
    /**
    * If `true` the button has a light color
    */
    'light'?: boolean;
    /**
    * If `true` the label is hidden and a loading spinner is shown instead.
    */
    'loading'?: boolean;
    /**
    * If `true` the button is outlined
    */
    'outlined'?: boolean;
    /**
    * The theme type of the button. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-link";
  }
  interface BalDatepicker {
    /**
    * Disable the input
    */
    'disabled'?: boolean;
    /**
    * Callback to determine which date in the datepicker should be selectable.
    */
    'filter'?: DateCallback;
    /**
    * Language of the datepicker. Possible values are `de`, `fr`,`it` or `en`.
    */
    'language'?: string;
    /**
    * Latest date available for selection
    */
    'maxDate'?: string;
    /**
    * Latest year available for selection
    */
    'maxYear'?: string;
    /**
    * Earliest date available for selection
    */
    'minDate'?: string;
    /**
    * Earliest year available for selection
    */
    'minYear'?: string;
    /**
    * Triggers when the value of the datepicker is changed
    */
    'onBalChange'?: (event: CustomEvent<string>) => void;
    /**
    * Placeholder text to render if no date has been selected.
    */
    'placeholder'?: string;
    /**
    * The value of the datepicker with the format `dd.MM.yyyy`.
    */
    'value'?: string;
  }
  interface BalDropdown {
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled'?: boolean;
    /**
    * If `true`, the component uses the whole width.
    */
    'expanded'?: boolean;
    /**
    * If `true`, the height of the dropdown content is fixed.
    */
    'fixed'?: boolean;
    /**
    * Emitted when the toggle loses focus.
    */
    'onBalBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the checked property has changed.
    */
    'onBalChange'?: (event: CustomEvent<Option>) => void;
    /**
    * Emitted when the toggle has focus..
    */
    'onBalFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Instructional text that shows before the input has a value.
    */
    'placeholder'?: string;
    /**
    * If `true`, the user cannot interact with the input.
    */
    'readonly'?: boolean;
    /**
    * Defines the trigger icon on the right site.
    */
    'triggerIcon'?: string;
    /**
    * If `true`, the use can search for the option.
    */
    'typeahead'?: boolean;
    /**
    * The value of the selected dropdown item.
    */
    'value'?: Option;
  }
  interface BalDropdownOption {
    /**
    * TODO: Describe
    */
    'activated'?: boolean;
    /**
    * TODO: Describe
    */
    'highlight'?: string;
    /**
    * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
    */
    'label'?: string;
    /**
    * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
    */
    'value'?: string | boolean | number | object;
  }
  interface BalField {
    /**
    * Baloise icon for the left side of the input
    */
    'iconLeft'?: string;
    /**
    * Baloise icon for the right side of the input
    */
    'iconRight'?: string;
    /**
    * Label text
    */
    'label'?: string;
    /**
    * If `true` a asterix (*) is added to the label text
    */
    'required'?: boolean;
    /**
    * Validation message text
    */
    'validationMessage'?: string;
  }
  interface BalIcon {
    'isLeft'?: boolean;
    'isRight'?: boolean;
    /**
    * The name of the icon without the bal-icon prefix.
    */
    'name'?: string;
    /**
    * Defines the size of the icon.
    */
    'size'?: "small" | "medium" | "large" | "";
  }
  interface BalModal {}
  interface BalModalActions {}
  interface BalModalTitle {}
  interface BalSpinner {}
  interface BalTabItem {
    /**
    * Tell's if the tab is active and the content is visible.
    */
    'active'?: boolean;
    /**
    * If `true` a small red bubble is added to the tab.
    */
    'bubble'?: boolean;
    /**
    * If `true` the tab is disabled.
    */
    'disabled'?: boolean;
    /**
    * Label for the tab.
    */
    'label'?: string;
    /**
    * Emitted when the tabs get rendered.
    */
    'onBalTabChanged'?: (event: CustomEvent<any>) => void;
    /**
    * This is the key of the tab.
    */
    'value'?: string;
  }
  interface BalTabs {
    /**
    * If `true` the field expands over the whole width.
    */
    'expanded'?: boolean;
    /**
    * Emitted when the changes has finished.
    */
    'onBalTabsDidChange'?: (event: CustomEvent<TabItemOptions>) => void;
    /**
    * If you want the rounded tab style
    */
    'rounded'?: boolean;
  }
  interface BalTag {
    /**
    * The theme type of the tag. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-light";
  }
  interface BalToast {
    /**
    * Message text
    */
    'message'?: string;
    /**
    * The theme type of the toast. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  }

  interface IntrinsicElements {
    'bal-accordion': BalAccordion;
    'bal-button': BalButton;
    'bal-datepicker': BalDatepicker;
    'bal-dropdown': BalDropdown;
    'bal-dropdown-option': BalDropdownOption;
    'bal-field': BalField;
    'bal-icon': BalIcon;
    'bal-modal': BalModal;
    'bal-modal-actions': BalModalActions;
    'bal-modal-title': BalModalTitle;
    'bal-spinner': BalSpinner;
    'bal-tab-item': BalTabItem;
    'bal-tabs': BalTabs;
    'bal-tag': BalTag;
    'bal-toast': BalToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bal-accordion': LocalJSX.BalAccordion & JSXBase.HTMLAttributes<HTMLBalAccordionElement>;
      'bal-button': LocalJSX.BalButton & JSXBase.HTMLAttributes<HTMLBalButtonElement>;
      'bal-datepicker': LocalJSX.BalDatepicker & JSXBase.HTMLAttributes<HTMLBalDatepickerElement>;
      'bal-dropdown': LocalJSX.BalDropdown & JSXBase.HTMLAttributes<HTMLBalDropdownElement>;
      'bal-dropdown-option': LocalJSX.BalDropdownOption & JSXBase.HTMLAttributes<HTMLBalDropdownOptionElement>;
      'bal-field': LocalJSX.BalField & JSXBase.HTMLAttributes<HTMLBalFieldElement>;
      'bal-icon': LocalJSX.BalIcon & JSXBase.HTMLAttributes<HTMLBalIconElement>;
      'bal-modal': LocalJSX.BalModal & JSXBase.HTMLAttributes<HTMLBalModalElement>;
      'bal-modal-actions': LocalJSX.BalModalActions & JSXBase.HTMLAttributes<HTMLBalModalActionsElement>;
      'bal-modal-title': LocalJSX.BalModalTitle & JSXBase.HTMLAttributes<HTMLBalModalTitleElement>;
      'bal-spinner': LocalJSX.BalSpinner & JSXBase.HTMLAttributes<HTMLBalSpinnerElement>;
      'bal-tab-item': LocalJSX.BalTabItem & JSXBase.HTMLAttributes<HTMLBalTabItemElement>;
      'bal-tabs': LocalJSX.BalTabs & JSXBase.HTMLAttributes<HTMLBalTabsElement>;
      'bal-tag': LocalJSX.BalTag & JSXBase.HTMLAttributes<HTMLBalTagElement>;
      'bal-toast': LocalJSX.BalToast & JSXBase.HTMLAttributes<HTMLBalToastElement>;
    }
  }
}


