import { TemplateContextCompletionProvider } from './TemplateContextCompletionProvider'
import { TemplateExpressionCompletionProvider } from './TemplateExpressionCompletionProvider'
import { TemplateCompletionProvider } from './TemplateCompletionProvider'

export const TEMPLATE_COMPLETION_PROVIDERS = [
  TemplateCompletionProvider,
  TemplateContextCompletionProvider,
  TemplateExpressionCompletionProvider,
]
