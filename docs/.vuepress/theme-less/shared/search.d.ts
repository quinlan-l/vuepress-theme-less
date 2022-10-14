import {DefaultThemePageFrontmatter} from '@vuepress/theme-default/lib/shared/page'

export interface DefaultSearchPageFrontmatter extends DefaultThemePageFrontmatter {
  home: true;
  navbar: true;

  siteIdx?: number;
  sites?: {
      name: string;
      host: string;
      url: string;
  }[];

  footer?: string;
}