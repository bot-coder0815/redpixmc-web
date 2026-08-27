(function () {
  function setupLayout() {
    var nav = document.getElementById("nav-bar");
    var footer = document.getElementById("site-footer");

    var links = [
      { href: "index.html", label: "Start", id: "link-start" },
      { href: "shop.html", label: "Shop", id: "link-shop" },
      { href: "regeln.html", label: "Regeln", id: "link-regeln" },
    ];

    if (nav) {
      nav.innerHTML =
        '<div class="container nav-inner">' +
        '<a class="nav-logo" href="index.html"><span class="dot">R</span><span>redpixmc<span style="color:var(--primary)">.de</span></span></a>' +
        '<nav class="nav-links">' +
        links
          .map(function (l) {
            return '<a href="' + l.href + '" id="' + l.id + '">' + l.label + "</a>";
          })
          .join("") +
        '<a class="nav-cta" href="shop.html">Shop öffnen</a>' +
        "</nav>" +
        '<button class="nav-toggle" aria-label="Menü öffnen">☰</button>' +
        "</div>";
    }

    if (footer) {
      var year = new Date().getFullYear();
      footer.innerHTML =
        '<div class="container">' +
        '<div class="footer-grid">' +
        "<div>" +
        "<h4>redpixmc.de</h4>" +
        "<p>Die offizielle Wiki-, Info- und Shop-Seite der Redpix-Minecraft-Community.</p>" +
        "</div>" +
        "<div>" +
        "<h4>Navigation</h4>" +
        "<ul>" +
        "<li><a href=\"index.html\">Start</a></li>" +
        "<li><a href=\"shop.html\">Shop</a></li>" +
        "<li><a href=\"regeln.html\">Regeln</a></li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h4>Server</h4>" +
        "<ul>" +
        '<li><span style="color:var(--accent);font-family:Consolas,monospace">play.redpixmc.de</span></li>' +
        "<li>1.21+ | Java &amp; Bedrock</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
        "<span>© " + year + " redpixmc.de. Alle Rechte vorbehalten.</span>" +
        "<span>Nicht offiziell von Mojang/Microsoft.</span>" +
        "</div>" +
        "</div>";
    }

    var toggle = document.querySelector(".nav-toggle");
    var linksEl = document.querySelector(".nav-links");
    if (toggle && linksEl) {
      toggle.addEventListener("click", function () {
        linksEl.classList.toggle("open");
      });
    }

    var current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      if (a.getAttribute("href") === current) {
        a.classList.add("active");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupLayout);
  } else {
    setupLayout();
  }
})();
