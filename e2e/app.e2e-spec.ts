import { GitBattlePage } from './app.po';

describe('git-battle App', () => {
  let page: GitBattlePage;

  beforeEach(() => {
    page = new GitBattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
