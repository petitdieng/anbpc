// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import "bootstrap";
import "@popperjs/core";


document.addEventListener('turbo:load', () => {
    // Initialisation des toasts
    document.querySelectorAll('.toast').forEach((toastEl) => {
      new bootstrap.Toast(toastEl).show();
    });
  
    // Initialisation des dropdowns
    document.querySelectorAll('.dropdown-toggle').forEach((dropdownToggleEl) => {
      new bootstrap.Dropdown(dropdownToggleEl);
    });
  
    // Initialisation des tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipEl) => {
      new bootstrap.Tooltip(tooltipEl);
    });
  
    // Initialisation des popovers
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popoverEl) => {
      new bootstrap.Popover(popoverEl);
    });
  });
  