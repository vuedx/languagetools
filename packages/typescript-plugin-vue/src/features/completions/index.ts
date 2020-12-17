import { TemplateContextCompletionProvider } from './TemplateContextCompletionProvider'
import { TemplateExpressionCompletionProvider } from './TemplateExpressionCompletionProvider'
import { TemplatePropCompletionProvider } from './TemplatePropCompletionProvider'
import { TemplateTagCompletionProvider } from './TemplateTagCompletionProvider'

export const TEMPLATE_COMPLETION_PROVIDERS = [
  TemplateTagCompletionProvider,
  TemplatePropCompletionProvider,
  TemplateContextCompletionProvider,
  TemplateExpressionCompletionProvider,
]
