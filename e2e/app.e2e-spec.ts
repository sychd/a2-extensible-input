import { A2ExtensibleInputPage } from './app.po';

describe('a2-extensible-input App', function() {
  let page: A2ExtensibleInputPage;

  beforeEach(() => {
    page = new A2ExtensibleInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
