import { VueTextDocument } from './VueTextDocument'
import { trimIndent } from '@vuedx/shared'

describe(VueTextDocument, () => {
  it('should return the correct block', () => {
    const doc = VueTextDocument.create(
      'test.vue',
      'vue',
      0,
      trimIndent(`
        <template>
          <div></div>
        </template>
        <script>
          export default {}
        </script>
        <style>
          div {}
        </style>
      `),
    )

    const template = doc.blockAt({ line: 1, character: 0 })
    expect(template).toBeDefined()
    expect(template?.type).toBe('template')

    const script = doc.blockAt({ line: 4, character: 0 })
    expect(script).toBeDefined()
    expect(script?.type).toBe('script')

    const style = doc.blockAt({ line: 7, character: 0 })
    expect(style).toBeDefined()
    expect(style?.type).toBe('style')
  })

  it('should return the correct embedded document', () => {
    const doc = VueTextDocument.create(
      'test.vue',
      'vue',
      0,
      trimIndent(`
        <template>
          <div></div>
        </template>
        <style scoped>
          p {}
        </style>
        <script>
          export default {}
        </script>
        <style>
          div {}
        </style>
        <style lang="scss">
          div {}
        </style>
      `),
    )

    const template = doc.getEmbeddedDocument('vue-html')
    expect(template).toBeDefined()
    expect(template?.getText()).toMatchInlineSnapshot(`
      "          
        <div></div>
                 
                    
            
              
              
                         
               
             
              
              
                         
              
              
      "
    `)

    const script = doc.getEmbeddedDocument('javascript')
    expect(script).toBeDefined()
    expect(script?.getText()).toMatchInlineSnapshot(`
      "          
                   
                 
                    
            
              
              
        export default {}
               
             
              
              
                         
              
              
      "
    `)

    const style = doc.getEmbeddedDocument('css')
    expect(style).toBeDefined()
    expect(style?.getText()).toMatchInlineSnapshot(`
      "          
                   
                 
                    
        p {}
              
              
                         
               
             
        div {}
              
                         
              
              
      "
    `)
  })
})
