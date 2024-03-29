## API Report File for "@vuedx/compiler-tsx"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { AttributeNode } from '@vue/compiler-core';
import type { BaseElementNode } from '@vue/compiler-core';
import type { Cache as Cache_2 } from '@vuedx/shared';
import { CompilerError } from '@vuedx/compiler-sfc';
import type { CompoundExpressionNode } from '@vue/compiler-core';
import type { DecodedSourceMap } from 'magic-string';
import { Node as Node_2 } from '@vue/compiler-core';
import type { RawSourceMap } from 'source-map';
import type { RootNode } from '@vue/compiler-core';
import { SFCDescriptor } from '@vuedx/compiler-sfc';
import type { SourceLocation } from '@vue/compiler-core';

// @public (undocumented)
export const annotations: {
    diagnosticsIgnore: {
        start: string;
        end: string;
    };
    templateGlobals: {
        start: string;
        end: string;
    };
    setupGlobals: {
        start: string;
        end: string;
    };
    missingExpression: string;
    tsxCompletions: string;
    tsCompletions: string;
};

// @public (undocumented)
export function compile(source: string, options: CompileOptions): Omit<CompileOutput, 'map'> & {
    map: RawSourceMap;
};

// Warning: (ae-forgotten-export) The symbol "TransformOptions" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface CompileOptions extends TransformOptions {
}

// Warning: (ae-forgotten-export) The symbol "TransformedCode" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface CompileOutput extends TransformedCode {
    // (undocumented)
    descriptor: SFCDescriptor;
    // (undocumented)
    errors: Array<CompilerError | SyntaxError>;
    // (undocumented)
    template?: RootNode;
}

// @public (undocumented)
export function compileWithDecodedSourceMap(source: string, options: CompileOptions): CompileOutput;

// @public (undocumented)
export interface CustomAttributeNode extends AttributeNode {
    // (undocumented)
    nameLoc: SourceLocation;
}

// @public (undocumented)
export interface CustomBaseElementNode extends BaseElementNode {
    // (undocumented)
    endTagLoc?: SourceLocation;
    // (undocumented)
    hoists?: CompoundExpressionNode[];
    // (undocumented)
    startTagLoc: SourceLocation;
    // (undocumented)
    tagLoc: SourceLocation;
}

// @public (undocumented)
export interface CustomNode extends Node_2 {
    // Warning: (ae-forgotten-export) The symbol "Scope" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    scope: Scope;
}

// (No @packageDocumentation comment for this package)

```
