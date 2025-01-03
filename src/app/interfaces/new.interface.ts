export interface New {
  image: string;
  title: string;
  summary: string;
  htmlBlocks?: HtmlBlock[];
}

export interface HtmlBlock {
  type: HtmlBlockTypes;
  align: HtmlBlockAlign;
  content: any;
}

export type HtmlBlockTypes = 'Image' | 'Text' | 'Table' | 'Mixed';
export type HtmlBlockAlign = 'Center' | 'Start' | 'End';