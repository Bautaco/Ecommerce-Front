type RouterMap = {
  label: string;
  active: boolean;
  route: string;
};

export const routes: RouterMap[] = [
  { label: "Home", active: true, route: "/" },
];
export function setStateFalse(): void {
  routes.forEach((r) => {
    r.active = false;
  });
}
