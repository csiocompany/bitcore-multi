import { InternalStateProvider } from "../internal/internal";

export class DASHStateProvider extends InternalStateProvider{
  constructor(chain: string = 'DASH') {
    super(chain);
  }
}
