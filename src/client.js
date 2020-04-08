import * as sapper from "@sapper/app";

sapper.start({
  target: document.querySelector("#sapper"),
});

window.prefetchRoutes = () =>
  // sapper.prefetchRoutes(["/graphic", "copywriting", "photography"]);
  (window.prefetch = (href) => sapper.prefetch(href));
window.goto = (href) => sapper.goto(href);
