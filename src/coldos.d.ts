declare const ui_themeicons: string;
declare const os_theme: 'dark' | 'light';

declare function clicksound(): void;
declare function Window_focus(id_app: string): void;
declare function Window_add(
  htmlcode: string,
  id_app: string,
  height: string,
  width: string,
  indicator: boolean,
  config: any,
  addappindock: boolean,
  classdock: string,
  jswin: string
): void;
declare function Window_kill(id_app: string | HTMLElement, p1?: boolean, p2?: boolean): void;
declare function Window_minimize(id_app: string): void;
declare function Window_maximize(id_app: string): void;
declare function popup(
  type: string,
  title: string,
  text: string,
  b1: string,
  b2: string,
  num: number,
  active: boolean,
  f: boolean,
  s1: string,
  s2: string
): void;

declare global {
  interface Window {
    [key: string]: any;
  }
}

export {};
