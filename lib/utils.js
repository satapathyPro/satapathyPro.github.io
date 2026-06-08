export function getAssetPath(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}
