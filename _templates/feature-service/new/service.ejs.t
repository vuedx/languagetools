---
to: packages/vue-languageservice/src/features/<%= name %>Service.ts
---
import { inject, injectable } from 'inversify'
import type {Typescript} from '../contracts/Typescript'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class <%= name %>Service {
  private readonly logger = LoggerService.getLogger('<%= name %>')
  
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}
}
