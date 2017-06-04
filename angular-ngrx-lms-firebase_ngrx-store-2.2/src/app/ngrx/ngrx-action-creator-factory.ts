import { Action } from '@ngrx/store';

export interface ActionCreator<T> {
  (payload?: T): Action;
}

export class ActionCreatorFactory {

  static create?<T>(type: string, defaultPayloadValue?: any) {
    return (payload?: T): Action => {
        return <Action> {
            type: type, 
            payload: payload || defaultPayloadValue
        };
    }
  }
}