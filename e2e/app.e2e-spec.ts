import { YexClientPage } from './app.po';

describe('yex-client App', () => {
  let page: YexClientPage;

  beforeEach(() => {
    page = new YexClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
