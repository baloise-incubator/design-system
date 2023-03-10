import { FooterLink, Language, loadFooterLinks, loadSocialMediaLinks, SocialMediaLink } from '@baloise/web-app-utils'
import { Component, Host, h, Prop, State, Watch, Method } from '@stencil/core'
import {
  BalConfigObserver,
  defaultConfig,
  BalConfigState,
  BalLanguage,
  detachComponentToConfig,
  attachComponentToConfig,
  updateBalLanguage,
  BalRegion,
} from '../../utils/config'
import { BEM } from '../../utils/bem'

@Component({
  tag: 'bal-footer',
  styleUrls: {
    css: 'bal-footer.sass',
  },
})
export class Footer implements BalConfigObserver {
  @State() links: FooterLink[] = []
  @State() socialMediaLinks: SocialMediaLink[] = []
  @State() language: BalLanguage = defaultConfig.language
  @State() region: BalRegion = defaultConfig.region
  @State() allowedLanguages: BalLanguage[] = defaultConfig.allowedLanguages

  /**
   * @deprecated The languages in which the links will appear.
   */
  @Prop() locale: 'en' | 'de' | 'fr' | 'it' | '' = ''

  /**
   * If `true` the legal Baloise links will be hidden.
   */
  @Prop() hideLinks = false

  /**
   * If `true` the language selection will be hidden.
   */
  @Prop() hideLanguageSelection = false

  disconnectedCallback() {
    detachComponentToConfig(this)
  }

  connectedCallback() {
    attachComponentToConfig(this)
    this.updateFooterLinks()
    this.updateSocialMediaLinks()
  }

  /**
   * @internal define config for the component
   */
  @Method()
  async configChanged(state: BalConfigState): Promise<void> {
    this.language = state.language
    this.region = state.region
    this.allowedLanguages = state.allowedLanguages
    this.updateFooterLinks()
    this.updateSocialMediaLinks()
  }

  @Watch('locale')
  watchLocaleHandler() {
    if (this.locale !== '') {
      this.language = this.locale
      this.updateFooterLinks()
      this.updateSocialMediaLinks()
    }
  }

  changeLanguage(language: BalLanguage) {
    updateBalLanguage(language)
  }

  updateFooterLinks() {
    if (!this.hideLinks && (this.region === 'CH' || this.region === 'DE')) {
      // The following footer links only apply to swiss and german applications
      loadFooterLinks(new Language(this.language), this.region).then(links => (this.links = links))
    }
  }

  updateSocialMediaLinks() {
    if (!this.hideLinks && (this.region === 'CH' || this.region === 'DE')) {
      // The following footer links only apply to swiss and german applications
      loadSocialMediaLinks(new Language(this.language), this.region).then(links => (this.socialMediaLinks = links))
    }
  }

  render() {
    const block = BEM.block('footer')
    const elInner = block.element('inner')
    const elContainer = elInner.element('container')
    const elLinksContainer = elInner.element('links-container')
    const elHeaderContainer = elInner.element('header-container')
    const elLogo = elHeaderContainer.element('logo')
    const elLanguage = elHeaderContainer.element('language')
    const elLegalLinks = elLinksContainer.element('legal-links')
    const elSocialMediaLinks = elLinksContainer.element('social-media-links')

    return (
      <Host
        class={{
          ...block.class(),
        }}
      >
        <footer
          class={{
            ...elInner.class(),
          }}
        >
          {/* <slot></slot> */}
          <div
            class={{
              container: true,
              ...elContainer.class(),
              ...elHeaderContainer.class(),
            }}
          >
            <div
              class={{
                ...elLogo.class(),
              }}
            >
              <bal-logo color="white"></bal-logo>
            </div>
            <div
              class={{
                ...elLanguage.class(),
              }}
              style={{
                display: this.hideLanguageSelection || this.allowedLanguages.length <= 1 ? 'none' : 'flex',
              }}
            >
              <bal-icon name="web" color="white"></bal-icon>
              <bal-select value={this.language} onBalChange={event => this.changeLanguage(event.detail as any)}>
                {this.allowedLanguages.map(language => (
                  <bal-select-option label={language.toLocaleUpperCase()} value={language}>
                    {language.toLocaleUpperCase()}
                  </bal-select-option>
                ))}
              </bal-select>
            </div>
          </div>
          <div
            class={{
              container: true,
              ...elContainer.class(),
              ...elLinksContainer.class(),
            }}
          >
            <div
              class={{
                ...elSocialMediaLinks.class(),
              }}
              style={{
                display: this.hideLanguageSelection || this.allowedLanguages.length <= 1 ? 'none' : 'flex',
              }}
            >
              {this.socialMediaLinks.map(link => (
                <a href={link.link}>
                  <bal-icon name={link.label.toLowerCase()} color="white"></bal-icon>
                </a>
              ))}
            </div>
            <div
              class={{
                ...elLegalLinks.class(),
              }}
              style={{ display: this.hideLinks ? 'none' : 'flex' }}
            >
              {this.links.map(link => (
                <a href={link.link} target="_blank">
                  <bal-text size="small" space="none">
                    {link.label}
                  </bal-text>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </Host>
    )
  }
}
