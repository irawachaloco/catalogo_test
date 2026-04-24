const decodeSegment = (value: string | null) => (value ? decodeURIComponent(value) : '');

export const readGithubPagesRedirect = (search: string) => {
  const params = new URLSearchParams(search);
  const pathname = decodeSegment(params.get('p'));
  const rawQuery = decodeSegment(params.get('q'));
  const hash = decodeSegment(params.get('h'));

  if (!pathname) {
    return null;
  }

  return {
    pathname,
    search: rawQuery ? `?${rawQuery}` : '',
    hash: hash ? `#${hash}` : '',
  };
};

export const applyGithubPagesRedirect = (location: Location, history: History) => {
  const redirect = readGithubPagesRedirect(location.search);

  if (!redirect) {
    return false;
  }

  history.replaceState(null, '', `${redirect.pathname}${redirect.search}${redirect.hash}`);

  return true;
};
