export interface MediaFile {
    id: string;
    url: string;
    type: 'image' | 'video' | 'document' | 'text';
    name: string;
    size: string;
    uploadDate: Date;
  }
  
  export interface ChatMessage {
    id: string;
    sender: 'user' | 'ai';
    content: string;
    timestamp: Date;
  }