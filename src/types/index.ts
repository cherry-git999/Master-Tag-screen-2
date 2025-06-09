export interface Tag {
  id: number;
  serialNo: number;
  tagNo: string;
  instType: string;
  make: string;
  calDate: string;
  reportNo: string;
}

export type SidebarItem = {
  name: string;
  href: string;
  current: boolean;
};