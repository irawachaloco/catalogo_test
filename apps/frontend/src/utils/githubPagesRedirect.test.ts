import { describe, expect, it, vi } from 'vitest';

import { applyGithubPagesRedirect, readGithubPagesRedirect } from './githubPagesRedirect';

describe('githubPagesRedirect', () => {
  it('returns null when there is no redirect payload', () => {
    expect(readGithubPagesRedirect('')).toBeNull();
  });

  it('decodes pathname, query, and hash from the Pages redirect payload', () => {
    expect(
      readGithubPagesRedirect('?p=%2Fproduct%2Fluna-vessel&q=ref%3Dinstagram&h=details'),
    ).toEqual({
      pathname: '/product/luna-vessel',
      search: '?ref=instagram',
      hash: '#details',
    });
  });

  it('rewrites browser history when a redirect payload exists', () => {
    const replaceState = vi.fn();
    const location = {
      search: '?p=%2Fgallery&q=filter%3Davailable&h=top',
    } as Location;
    const history = {
      replaceState,
    } as unknown as History;

    expect(applyGithubPagesRedirect(location, history)).toBe(true);
    expect(replaceState).toHaveBeenCalledWith(null, '', '/gallery?filter=available#top');
  });
});
