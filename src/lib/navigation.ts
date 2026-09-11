import { NAV_CATEGORIES } from "./constants";

export function getNavigationContext(pathname: string, hash = "") {
  pathname = pathname.replace(/\/$/, "") || "/";
  const category = NAV_CATEGORIES.find((category) =>
    category.items.some((item) =>
      pathname === `${category.href.split("#")[0]}/${item.slug}` ||
      `${pathname}${hash}` === item.href
    )
  ) ?? (pathname === "/services/wildlife-removal" ? NAV_CATEGORIES[2] :
    pathname === "/services" ? NAV_CATEGORIES[0] : undefined);
  const item = category?.items.find((item) =>
    pathname === `${category.href.split("#")[0]}/${item.slug}` ||
    `${pathname}${hash}` === item.href
  );
  const crumbs = [{ label: "Home", href: "/" }];
  if (category) {
    crumbs.push({ label: category.label, href: category.href });
    if (item) crumbs.push({ label: item.label, href: `${pathname}${hash}` });
  } else if (["/about", "/contact", "/privacy"].includes(pathname)) {
    crumbs.push({ label: pathname === "/about" ? "About" : pathname === "/contact" ? "Contact" : "Privacy", href: pathname });
  }
  return { category, item, crumbs };
}
