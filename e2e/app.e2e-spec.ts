import { RouterA2Page } from './app.po';

describe('router-a2 App', () => {
  let page: RouterA2Page;

  beforeEach(() => {
    page = new RouterA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
