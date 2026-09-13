<nav class="navbar">
  <a class="navbar-brand" href="#">Logo</a>

  <button class="navbar-toggler" type="button" aria-label="Open menu">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Mobile slide menu -->
  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-panels">

      <!-- Panel 0: Root -->
      <div class="mobile-panel is-active" data-panel="root">
        <div class="mobile-panel-header">
          <span class="mobile-panel-title">Menu</span>
          <button class="mobile-menu-close" type="button" aria-label="Close">&times;</button>
        </div>
        <ul class="mobile-panel-list">
          <li><a href="#">Home</a></li>
          <li>
            <button type="button" class="mobile-next" data-target="blog">
              Blog <span class="arrow">›</span>
            </button>
          </li>
          <li>
            <button type="button" class="mobile-next" data-target="work">
              Work <span class="arrow">›</span>
            </button>
          </li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

      <!-- Panel: Blog -->
      <div class="mobile-panel" data-panel="blog">
        <div class="mobile-panel-header">
          <button type="button" class="mobile-back" data-target="root">‹ Back</button>
          <span class="mobile-panel-title">Blog</span>
        </div>
        <ul class="mobile-panel-list">
          <li><a href="#">Design</a></li>
          <li>
            <button type="button" class="mobile-next" data-target="html">
              HTML <span class="arrow">›</span>
            </button>
          </li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      </div>

      <!-- Panel: HTML (submenu of Blog) -->
      <div class="mobile-panel" data-panel="html">
        <div class="mobile-panel-header">
          <button type="button" class="mobile-back" data-target="blog">‹ Back</button>
          <span class="mobile-panel-title">HTML</span>
        </div>
        <ul class="mobile-panel-list">
          <li><a href="#">Sub Menu 1</a></li>
          <li><a href="#">Sub Menu 2</a></li>
          <li><a href="#">Sub Menu 3</a></li>
        </ul>
      </div>

      <!-- Panel: Work -->
      <div class="mobile-panel" data-panel="work">
        <div class="mobile-panel-header">
          <button type="button" class="mobile-back" data-target="root">‹ Back</button>
          <span class="mobile-panel-title">Work</span>
        </div>
        <ul class="mobile-panel-list">
          <li><a href="#">Project 1</a></li>
          <li><a href="#">Project 2</a></li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Desktop menu (unchanged) -->
  <div class="navbar-collapse desktop-only">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item has-dropdown">
        <a class="nav-link dropdown-toggle" href="#">Blog</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Design</a></li>
          <li class="has-dropdown">
            <a class="dropdown-item dropdown-toggle" href="#">HTML</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Sub Menu 1</a></li>
              <li><a class="dropdown-item" href="#">Sub Menu 2</a></li>
              <li><a class="dropdown-item" href="#">Sub Menu 3</a></li>
            </ul>
          </li>
          <li><a class="dropdown-item" href="#">CSS</a></li>
          <li><a class="dropdown-item" href="#">JavaScript</a></li>
        </ul>
      </li>
      <li class="nav-item has-dropdown">
        <a class="nav-link dropdown-toggle" href="#">Work</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Project 1</a></li>
          <li><a class="dropdown-item" href="#">Project 2</a></li>
        </ul>
      </li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>