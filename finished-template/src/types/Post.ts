import { RecordModel } from 'pocketbase';

export default interface Post extends RecordModel {
  title: string;
  content: string;
  coverImageUrl: string;
}
