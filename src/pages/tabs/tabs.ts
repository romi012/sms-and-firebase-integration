import { Component } from '@angular/core';

import { PostPage } from '../post/post';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PostPage;
  

  constructor() {

  }
}
