export interface CollageLayer {
    _key: string;
    type: 'image' | 'sticker' | 'tape' | 'polaroid' | 'text';
    image?: any;
    text?: string;
    x: number;
    y: number;
    rotation: number;
    zIndex: number;
    scale: number;
}

export interface Event {
    _id: string;
    title: string;
    slug: { current: string };
    date: string;
    location: string;
    price: string;
    shortDesc: string;
    longDesc: any;
    collageLayers: CollageLayer[];
    tags: string[];
}
