export const ExternalPortalTemplate = `
<div class="bal-app bal-app-background has-sticky-footer">
  <header class="has-background-white">
    <bal-navbar no-burger>
      <bal-navbar-brand>
        <bal-icon name="logo" inverted size="large"></bal-icon>
        <bal-text style="margin-left: 15px">
          <strong>Portal</strong>
        </bal-text>
      </bal-navbar-brand>
    </bal-navbar>
    <div class="container">
      <bal-tabs action action-label="Action" data-test-id="tabs">
        <bal-tab-item value="tab-a" label="Tab A" active="true"></bal-tab-item>
        <bal-tab-item value="tab-b" label="Tab B"></bal-tab-item>
        <bal-tab-item bubble value="tab-c" label="Tab C"></bal-tab-item>
        <bal-tab-item disabled value="tab-d" label="Tab D"></bal-tab-item>
      </bal-tabs>
    </div>
  </header>
  <main>
    <div class="container my-7">
      <bal-card class="p-5">
      <bal-heading title level="h4" space="none">BaloiseCombi</bal-heading>
      <bal-heading subtitle level="h5" space="bottom">Police number 70/2.937.458</bal-heading>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <bal-button-group position="right">
        <bal-button>Action</bal-button>
        <bal-button>Action 2</bal-button>
      </bal-button-group>
    </bal-card>
    </div>
  </main>
  <bal-footer has-track-line></bal-footer>
</div>`
