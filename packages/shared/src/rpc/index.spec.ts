import * as RPC from './index'

describe('rpc', () => {
  class Bar {
    baz = 5
  }

  class Foo {
    prop = true

    Bar = Bar

    state = {
      foo: 1,
      bar: {
        value() {
          return 100
        },
      },
      sym: Symbol('SomeSymbol!!'),
    }

    sum(a: number, b: number) {
      return a + b
    }

    callMeBack(fn: (num: number) => void, timeout: number) {
      setTimeout(() => fn(timeout), timeout)
    }

    async callMeNow(fn: (num: number) => void, num: number) {
      await fn(num)
    }
  }

  let foo: RPC.Remote<Foo>
  beforeEach(() => {
    const { port1, port2 } = createLocalChannel()
    foo = RPC.create<Foo>(RPC.createEndpoint(port2))
    RPC.expose(new Foo(), RPC.createEndpoint(port1))
  })

  it('can read primitive property', async () => {
    await expect(foo.prop).resolves.toBe(true)
  })

  it('can write primitive property', async () => {
    await expect(foo.prop).resolves.toBe(true)
    await RPC.set(foo, 'prop', false)
    await expect(foo.prop).resolves.toBe(false)
  })

  it('can read complex property', async () => {
    expect((await foo.state).foo).toBe(1)
  })

  it('can call method', async () => {
    await expect(foo.sum(1, 2)).resolves.toBe(3)
  })

  it('can bind method', async () => {
    const s = foo.sum.bind(null, 1)
    await expect(s(2)).resolves.toBe(3)
  })

  it('can create instance', async () => {
    const instance = await new foo.Bar()
    await expect(instance.baz).resolves.toEqual(5)
    await instance[RPC.Symbols.release]()
    expect(() => {
      void instance.baz
    }).toThrow(/Proxy has been released and is not useable/)
  })

  it('can call callback', async () => {
    const fn = jest.fn()
    await foo.callMeBack(fn, 2)

    await waitFor(() => {
      expect(fn).toHaveBeenCalledWith(2)
    })
  })

  it('throws error on non-existent method', async () => {
    await expect((foo as any).nonExistingMethod()).rejects.toThrow(
      /Cannot read properties of undefined/,
    )
  })

  it('throws custom error', async () => {
    await expect(
      foo.callMeNow(() => {
        throw ({ message: 'not an error' } as unknown) as Error
      }, 2),
    ).rejects.toEqual({ message: 'not an error' })
  })
})

async function waitFor(
  fn: () => void | Promise<void>,
  timeout: number = 2000,
): Promise<void> {
  let error: unknown = new Error('timeout')
  const endedAt = Date.now() + timeout
  while (Date.now() < endedAt) {
    try {
      return await fn()
    } catch (e) {
      error = e
    }

    await new Promise((resolve) => setTimeout(resolve, 0))
  }

  throw error
}

function createLocalChannel(): {
  port1: RPC.Channel
  port2: RPC.Channel
} {
  let h1 = (_data: Buffer): void => {}
  let h2 = (_data: Buffer): void => {}

  return {
    port1: {
      receive(handler) {
        h1 = handler
      },
      send(data) {
        setTimeout(() => h2(data), Math.random() * 3)
      },
    },
    port2: {
      receive(handler) {
        h2 = handler
      },
      send(data) {
        setTimeout(() => h1(data), Math.random() * 3)
      },
    },
  }
}
