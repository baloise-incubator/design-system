import docs from './bal-field.docs.mdx'
import { BalComponentStory } from '../../../../stories/utils'
import {
  BalField,
  BalFieldControl,
  BalFieldHint,
  BalFieldLabel,
  BalFieldMessage,
  BalButton,
  BalCard,
  BalCardContent,
  BalCardActions,
  BalInput,
  BalTextarea,
  BalRadio,
  BalRadioGroup,
  BalCheckbox,
  BalSelect,
  BalDatepicker,
  BalSelectOption,
  BalFormGrid,
  BalFormCol,
} from '../../../../../.storybook/vue/components'
import { configArgTypes, configDefaultArgs, reduceConfigArgs, setConfig } from '../../../../stories/utils/config'

const component = BalComponentStory({
  title: 'Components/Form/Field',
  component: BalField,
  subcomponents: {
    BalFieldControl,
    BalFieldHint,
    BalFieldLabel,
    BalFieldMessage,
  },
  docs,
  argTypes: {
    hasFieldMessage: {
      description: 'Show a hint or validation message below the control',
      table: {
        category: 'custom',
      },
    },
    ...configArgTypes,
  },
  args: {
    ...configDefaultArgs,
    hasFieldMessage: true,
  },
})

export default component.story

export const Basic = args => ({
  components: { ...component.components, BalInput },
  setup: () => {
    setConfig(args)
    return {
      args: reduceConfigArgs(args),
    }
  },
  template: `<bal-field v-bind="args">
  <bal-field-label required>Firstname</bal-field-label>
  <bal-field-control>
    <bal-input id="bal-input-1" name="firstName" placeholder="Enter your firstname"></bal-input>
  </bal-field-control>
  <bal-field-message :color="args.invalid ? 'danger' : 'hint'" v-if="args.hasFieldMessage">Field Message</bal-field-message>
</bal-field>`,
})
Basic.args = {}
Basic.parameters = { ...component.sourceCode(Basic) }

export const Addon = args => ({
  components: { ...component.components, BalButton, BalInput },
  setup: () => {
    setConfig(args)
    return {
      args: reduceConfigArgs(args),
    }
  },
  template: `<bal-field v-bind="args">
  <bal-field-label required>Search</bal-field-label>
  <bal-field-control>
    <bal-input name="search" placeholder="Search..."></bal-input>
    <bal-button color="info">Search</bal-button>
  </bal-field-control>
  </bal-field>`,
})
Addon.args = {}
Addon.parameters = { ...component.sourceCode(Addon) }

export const AddonExpandedOnMobile = args => ({
  components: { ...component.components, BalButton, BalInput },
  setup: () => {
    setConfig(args)
    return {
      args: reduceConfigArgs(args),
    }
  },
  template: `<bal-field v-bind="args">
  <bal-field-label required>Search</bal-field-label>
  <bal-field-control expanded-on-mobile>
    <bal-input name="search" placeholder="Search..."></bal-input>
    <bal-button color="primary">Search</bal-button>
  </bal-field-control>
  </bal-field>`,
})
AddonExpandedOnMobile.args = {}
AddonExpandedOnMobile.parameters = { ...component.sourceCode(AddonExpandedOnMobile) }

export const WithGrid = args => ({
  components: {
    ...component.components,
    BalButton,
    BalCard,
    BalCardContent,
    BalCardActions,
    BalInput,
    BalTextarea,
    BalRadio,
    BalRadioGroup,
    BalCheckbox,
    BalSelect,
    BalDatepicker,
    BalSelectOption,
    BalFormGrid,
    BalFormCol,
  },
  setup: () => ({ args }),
  template: `<bal-card>
    <bal-card-content>
    <form>
      <bal-form-grid>
        <bal-form-col>
          <bal-field>
            <bal-field-control>
              <bal-radio-group>
                <bal-radio name="gender" value="male">Male</bal-radio>
                <bal-radio name="gender" value="female">Female</bal-radio>
              </bal-radio-group>
            </bal-field-control>
          </bal-field>
        </bal-form-col>

      <bal-form-col size="half">
        <bal-field required>
          <bal-field-label required>Firstname</bal-field-label>
          <bal-field-control>
            <bal-input name="firstname" placeholder="Enter your firstname" required></bal-input>
          </bal-field-control>
        </bal-field>
      </bal-form-col>

      <bal-form-col size="half">
        <bal-field required>
          <bal-field-label required>Lastname</bal-field-label>
          <bal-field-control>
            <bal-input name="lastname" placeholder="Enter your lastname" required></bal-input>
          </bal-field-control>
        </bal-field>
      </bal-form-col>

      <bal-form-col size="half">
        <bal-field required>
          <bal-field-label required>Street</bal-field-label>
          <bal-field-control>
            <bal-input name="street" placeholder="Enter your street" required></bal-input>
          </bal-field-control>
          <bal-field-message>Enter a valid swiss street.</bal-field-message>
        </bal-field>
      </bal-form-col>

      <bal-form-col size="half">
        <bal-form-grid>
          <bal-form-col size="one-third">
            <bal-field>
              <bal-field-label>Postal Code</bal-field-label>
              <bal-field-control>
                <bal-input name="postalCode" placeholder="4000" required></bal-input>
              </bal-field-control>
            </bal-field>
          </bal-form-col>

          <bal-form-col size="two-thirds">
            <bal-field>
              <bal-field-label>City</bal-field-label>
              <bal-field-control>
                <bal-input name="city" placeholder="Basel" required></bal-input>
              </bal-field-control>
            </bal-field>
          </bal-form-col>
        </bal-form-grid>
      </bal-form-col>

      <bal-form-col size="half">
        <bal-field>
          <bal-field-label>Canton</bal-field-label>
          <bal-field-control>
            <bal-select placeholder="select your canton" formControlName="canton">
              <bal-select-option value="AG" label="AG">AG</bal-select-option>
              <bal-select-option value="BS" label="BS">BS</bal-select-option>
              <bal-select-option value="BL" label="BL">BL</bal-select-option>
            </bal-select>
          </bal-field-control>
        </bal-field>
      </bal-form-col>

      <bal-form-col size="half">
        <bal-field>
          <bal-field-label>Birthdate</bal-field-label>
          <bal-field-control>
            <bal-datepicker placeholder="Select your birthdate"></bal-datepicker>
          </bal-field-control>
        </bal-field>
      </bal-form-col>

      <bal-form-col>
        <bal-field>
          <bal-field-control>
            <bal-checkbox>Checkbox</bal-checkbox>
          </bal-field-control>
        </bal-field>
      </bal-form-col>

      <bal-form-col>
        <bal-field>
          <bal-field-label>Comment</bal-field-label>
          <bal-field-control>
            <bal-textarea name="comment" placeholder="Enter your comment"></bal-textarea>
          </bal-field-control>
        </bal-field>
      </bal-form-col>
      </bal-form-grid>
    </form>
  </bal-card-content>
  <bal-card-actions position="right">
    <bal-button color="primary">Submit</bal-button>
    <bal-button color="text">Cancel</bal-button>
  </bal-card-actions>
</bal-card>`,
})
WithGrid.args = {}
WithGrid.parameters = { ...component.sourceCode(WithGrid) }
