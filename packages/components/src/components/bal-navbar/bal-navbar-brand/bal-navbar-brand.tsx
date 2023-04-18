import { Component, Element, h, Host, Prop, State, Event, EventEmitter, Watch } from '@stencil/core'
import { Props } from '../../../types'
import { ScrollHandler } from '../../../utils/scroll'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-navbar-brand',
})
export class NavbarBrand {
  private scrollHandler = ScrollHandler()

  @Element() el!: HTMLElement

  @State() isMenuActive = false

  /**
   * Link of the logo / title.
   */
  @Prop() href?: string = ''

  /**
   * @deprecated Link target
   */
  @Prop() linkTarget: Props.BalButtonTarget | '' = ''
  @Watch('linkTarget')
  hasShapeHandler() {
    console.warn('[DEPRECATED] - Please use the property target instead')
    this.migrateLinkTarget()
  }

  private migrateLinkTarget() {
    if (this.linkTarget !== '') {
      this.target = this.linkTarget
    }
  }

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   */
  @Prop() target: Props.BalButtonTarget = '_self'

  /**
   * @deprecated Use interface on bal-navbar instead.
   * If `true` the navbar does not have a mobil version. Only shows logo and an app title.
   */
  @Prop() simple = false

  /**
   * Src to display a logo -> replaces the default Baloise Logo
   */
  @Prop() logo?: string

  /**
   * Defines if the logo animation should be active
   */
  @Prop() animated = true

  /**
   * @internal
   * Defines the type of navbar. App is used for almost every web applications
   * like the portal app. For our sales funnel we recommend to use the simple navbar.
   * Meta and main are used for the website.
   */
  @Prop() interface: Props.BalNavbarInterface = 'app'

  /**
   * Emitted when the link element has clicked
   */
  @Event() balNavigate!: EventEmitter<MouseEvent>

  connectedCallback() {
    this.migrateLinkTarget()
    this.scrollHandler.connect()
  }

  componentWillLoad() {
    if (window.matchMedia) {
      window.matchMedia('(min-width: 960px)').addEventListener('change', this.resetIsMenuActive.bind(this))
    }
  }

  disconnectedCallback() {
    this.scrollHandler.disconnect()
  }

  async resetIsMenuActive(ev: MediaQueryListEvent) {
    if (ev.matches && !this.simple) {
      this.toggle(false)
    }
  }

  async toggle(isMenuActive: boolean): Promise<void> {
    this.isMenuActive = isMenuActive

    if (this.isMenuActive) {
      this.scrollHandler.disable()
    } else {
      this.scrollHandler.enable()
    }

    const navbar = this.el.closest('bal-navbar')
    if (navbar) {
      const navbarMenuElement = navbar.querySelector('bal-navbar-menu')
      if (navbarMenuElement && !this.simple) {
        await navbarMenuElement.toggle(this.isMenuActive)
      }
    }
  }

  async onClick() {
    this.toggle(!this.isMenuActive)
  }

  render() {
    const navbarBrandEl = BEM.block('navbar').element('brand')

    const logoTemplate = this.logo ? (
      <img loading="lazy" class={{ ...navbarBrandEl.element('logo').class() }} src={this.logo} alt="" />
    ) : (
      <bal-logo animated={this.animated} color={'white'}></bal-logo>
    )

    return (
      <Host
        class={{
          ...navbarBrandEl.class(),
          ...navbarBrandEl.modifier(`context-${this.interface}`).class(),
        }}
      >
        {this.href ? (
          <a href={this.href} target={this.target} onClick={(event: MouseEvent) => this.balNavigate.emit(event)}>
            {logoTemplate}
          </a>
        ) : (
          logoTemplate
        )}
        <span class={{ ...navbarBrandEl.element('title').class() }}>
          <slot></slot>
        </span>
        <bal-button
          class={{
            ...navbarBrandEl.element('burger').class(),
            ...navbarBrandEl
              .element('burger')
              .modifier('hidden')
              .class(this.interface === 'simple'),
          }}
          color="light"
          inverted
          square
          icon={this.isMenuActive ? 'close' : 'menu-bars'}
          onClick={() => this.onClick()}
        ></bal-button>
      </Host>
    )
  }
}
