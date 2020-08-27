import {DoctypeInterface} from '../../../types/doctype.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: DoctypeInterface[] | null;
}
