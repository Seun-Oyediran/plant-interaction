export function matchRoute(route: string, basePath: string, exact = false): boolean {
  if (exact) {
    return route === basePath;
  }

  const dashboardPattern = new RegExp(`^${basePath}(/[a-zA-Z0-9_-]+)*$`);

  return dashboardPattern.test(route);
}

export function radians_to_degrees(radians: number) {
  const pi = Math.PI;
  return radians * (180 / pi);
}
