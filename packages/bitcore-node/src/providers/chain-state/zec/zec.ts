import { InternalStateProvider } from "../internal/internal";

export class ZECStateProvider extends InternalStateProvider{
  constructor(chain: string = 'ZEC') {
    super(chain);
  }
}
