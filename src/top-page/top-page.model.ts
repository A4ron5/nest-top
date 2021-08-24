import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TopPageModel extends Base {}

export enum TopLevelCatergory {
  Courses,
  Services,
  Books,
  Products,
}

export class HHData {
  @prop()
  count: number;
  @prop()
  juniorSalary: number;
  @prop()
  middleSalary: number;
  @prop()
  seniorSalary: number;
}

export class Advantage {
  @prop()
  title: string;

  @prop()
  description: string;
}
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCatergory })
  firstLevelCategory: TopLevelCatergory;
  @prop()
  secondLevelCategory: string;
  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HHData })
  hh?: HHData;
  @prop({ type: () => [Advantage] })
  advantages: Advantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
