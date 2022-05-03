import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import { Props } from '../../props'

@Component({
  tag: 'bal-logo',
})
export class Logo implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * Defines the color of the logo.
   */
  @Prop() color: Props.BalLogoColor = 'blue'

  render() {
    return (
      <Host
        class={{
          'bal-logo': true,
          [`bal-logo--has-color-${this.color}`]: true,
        }}
      >
        <div>
          <svg width="158" height="32" viewBox="0 0 158 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M112.351 3.52166C112.351 1.47065 114.09 0 116.118 0C118.146 0 119.727 1.47065 119.727 3.52166C119.727 5.57268 118.146 7.00945 116.118 7.00945C114.09 7.00945 112.351 5.57324 112.351 3.52166ZM113.231 9.43647H118.97V27.4547H113.231V9.43647ZM82.5903 2.46199H88.33V27.4541H82.5903V2.46199ZM48.3558 27.8995C53.6142 27.8995 57.3602 23.8647 57.3602 18.4631C57.3602 13.0609 53.7175 9.0266 48.4915 9.02715C46.5342 9.02715 44.8845 9.60807 43.5786 10.7022V2.46255H37.839V27.4547H43.132V25.9163C44.4378 27.1814 46.1908 27.8995 48.3558 27.8995ZM47.5312 14.02C49.9368 14.02 51.6893 15.8989 51.6893 18.4631C51.6893 21.0272 49.9368 22.8733 47.5312 22.8733C45.0224 22.8733 43.3034 21.0611 43.3034 18.4631C43.3034 15.8317 44.9877 14.02 47.5312 14.02ZM78.8057 27.4547V9.43647H73.5127V11.317C72.2409 10.0524 70.522 9.36815 68.2889 9.36815C63.0305 9.36815 59.2498 13.0614 59.2498 18.4631C59.2498 23.8647 63.0305 27.8995 68.2889 27.8995C70.5226 27.8995 72.2409 27.1464 73.5127 25.8135V27.4547H78.8057ZM69.114 14.02C71.6229 14.02 73.3072 15.83 73.3072 18.4631C73.3072 21.0617 71.6224 22.8733 69.114 22.8733C66.6744 22.8733 64.9554 21.0256 64.9554 18.4631C64.9554 15.9005 66.7084 14.02 69.114 14.02ZM100.74 9.02659C94.9667 9.02659 90.8422 13.0609 90.8422 18.463C90.8422 23.8308 94.9684 27.8995 100.74 27.8995C106.549 27.8995 110.673 23.8308 110.673 18.463C110.673 13.0609 106.546 9.02659 100.74 9.02659ZM100.774 14.0867C103.283 14.0867 104.899 15.8644 104.899 18.4286C104.899 21.0272 103.249 22.8389 100.774 22.8394C98.2656 22.8394 96.6159 20.9928 96.6159 18.463C96.6159 15.8639 98.2656 14.0867 100.774 14.0867ZM126.05 21.2666L121.307 23.0788C122.373 26.2267 125.294 27.8995 129.382 27.8962C134.159 27.8962 137.183 25.6397 137.183 21.9125C137.183 17.823 133.59 16.8788 130.834 16.1549C129.121 15.7047 127.732 15.3397 127.732 14.3566C127.732 13.6046 128.316 13.1603 129.484 13.1603C130.687 13.1603 131.547 13.7412 131.959 14.8697L136.705 13.0231C135.983 10.4945 133.302 9.02437 129.59 9.02437C125.019 9.02437 122.132 11.1465 122.132 14.6337C122.132 18.3232 125.492 19.3268 128.205 20.1373C130.043 20.6862 131.584 21.1465 131.584 22.2924C131.584 23.1127 130.896 23.6253 129.59 23.6253C127.734 23.6253 126.531 22.7711 126.05 21.2666ZM157.6 18.0871C157.6 13.644 154.094 8.99216 148.183 8.99216C142.959 8.99216 138.766 13.2686 138.766 18.463C138.766 23.8308 142.546 27.8995 148.527 27.8995C152.473 27.8995 154.804 26.3867 156.201 24.6616L152.901 21.3716C151.87 22.6401 150.726 23.2493 148.698 23.2493C146.533 23.2493 144.918 22.1552 144.334 20.1392H157.462C157.557 19.4593 157.603 18.7735 157.6 18.0871ZM144.264 16.5825C144.746 14.3943 146.223 13.2658 148.32 13.2658C150.416 13.2658 151.791 14.531 152.272 16.5825H144.264ZM16.7228 1.02356L31.1352 15.3613C31.2611 15.4866 31.3609 15.6354 31.4289 15.7991C31.497 15.9628 31.5319 16.1383 31.5318 16.3155C31.5316 16.4926 31.4964 16.668 31.428 16.8316C31.3597 16.9953 31.2596 17.1439 31.1335 17.269L27.2256 21.1566L15.7648 9.75525L9.17152 16.3143L15.7648 22.8733L19.8525 18.8063L24.7206 23.6486L16.7256 31.605C16.5997 31.7302 16.4503 31.8296 16.2859 31.8973C16.1215 31.9651 15.9453 32 15.7673 32C15.5893 32 15.4131 31.9651 15.2486 31.8973C15.0842 31.8296 14.9348 31.7302 14.809 31.605L0.396538 17.2673C0.142626 17.0145 0 16.6717 0 16.3143C0 15.9569 0.142626 15.6141 0.396538 15.3613L14.8062 1.02356C14.932 0.898338 15.0814 0.799001 15.2458 0.731227C15.4103 0.663454 15.5865 0.628572 15.7645 0.628572C15.9425 0.628572 16.1187 0.663454 16.2831 0.731227C16.4475 0.799001 16.5969 0.898338 16.7228 1.02356Z"
              fill="#000D6E"
            />
          </svg>
        </div>
      </Host>
    )
  }
}
