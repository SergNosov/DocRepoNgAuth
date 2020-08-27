import {AuthStateInterface} from '../../auth/types/authState.interface';
import {DoctypeStateInterface} from '../../dashboard/types/doctypeStateInterface';


export interface AppStateInterface {
  auth: AuthStateInterface;
  doctypes: DoctypeStateInterface;
}
