class elementorHelloThemeHandler {
  constructor() {
    this.initSettings();
    this.initElements();
    this.bindEvents();
  }

  initSettings() {
    this.settings = {
      selectors: {
        menuToggle: '.site-header .site-navigation-toggle',
        menuToggleHolder: '.site-header .site-navigation-toggle-holder',
        dropdownMenu: '.site-header .site-navigation-dropdown'
      }
    };
  }

  initElements() {
    this.elements = {
      window,
      menuToggle: document.querySelector(this.settings.selectors.menuToggle),
      menuToggleHolder: document.querySelector(this.settings.selectors.menuToggleHolder),
      dropdownMenu: document.querySelector(this.settings.selectors.dropdownMenu)
    };

    // Debug logs to ensure elements are selected properly
    if (!this.elements.menuToggle) console.error('Menu toggle button not found.');
    if (!this.elements.menuToggleHolder) console.error('Menu toggle holder not found.');
    if (!this.elements.dropdownMenu) console.error('Dropdown menu not found.');
  }

  bindEvents() {
    if (!this.elements.menuToggle || !this.elements.menuToggleHolder || !this.elements.dropdownMenu) {
      console.error('One or more essential elements are missing. Event binding aborted.');
      return;
    }

    this.elements.menuToggle.addEventListener('click', () => this.handleMenuToggle());
    this.elements.dropdownMenu.querySelectorAll('.menu-item-has-children > a').forEach(anchorElement =>
      anchorElement.addEventListener('click', event => this.handleMenuChildren(event))
    );
  }

  closeMenuItems() {
    if (!this.elements.menuToggleHolder) return;

    this.elements.menuToggleHolder.classList.remove('elementor-active');
    this.elements.window.removeEventListener('resize', this.resizeHandler);
  }

  handleMenuToggle() {
    const { menuToggle, menuToggleHolder, dropdownMenu } = this.elements;

    if (!menuToggle || !menuToggleHolder || !dropdownMenu) return;

    const isDropdownVisible = !menuToggleHolder.classList.contains('elementor-active');
    menuToggle.setAttribute('aria-expanded', isDropdownVisible);
    dropdownMenu.setAttribute('aria-hidden', !isDropdownVisible);
    menuToggleHolder.classList.toggle('elementor-active', isDropdownVisible);

    // Close all submenus
    dropdownMenu.querySelectorAll('.elementor-active').forEach(item => item.classList.remove('elementor-active'));

    if (isDropdownVisible) {
      this.resizeHandler = () => this.closeMenuItems();
      this.elements.window.addEventListener('resize', this.resizeHandler);
    } else {
      this.elements.window.removeEventListener('resize', this.resizeHandler);
    }
  }

  handleMenuChildren(event) {
    const anchor = event.currentTarget;
    const parentLi = anchor.parentElement;

    if (!parentLi || !parentLi.classList) return;

    event.preventDefault(); // Prevent default anchor behavior
    parentLi.classList.toggle('elementor-active');
  }
}

// Initialize the menu handler on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new elementorHelloThemeHandler();
});
