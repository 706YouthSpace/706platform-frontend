import { GraphQLClient } from 'graphql-request'

export class GraphQLService {
    endpoint: string;

    client: GraphQLClient

    constructor (endpoint: string, options?: RequestInit) {
      this.endpoint = endpoint

      this.client = new GraphQLClient(this.endpoint, { ...options, credentials: 'include' })
    }

    query (gqlText: string, variables?: { [k: string]: any }) {
      return this.client.request(gqlText, variables)
    }
}

const DEFAULT_GQL_ENDPOINT = `${window.origin}/api/graphql`
export class AppGraphQLService extends GraphQLService {
  constructor (endpoint?: string, options?: RequestInit) {
    super(endpoint || DEFAULT_GQL_ENDPOINT, options)

    this.client = new GraphQLClient(this.endpoint, { ...options, credentials: 'include' })
  }

  async query (gqlText: string, variables?: { [k: string]: any }) {
    try {
      const result = await super.query(gqlText, variables)

      return result
    } catch (err) {
      const realErr = err.response?.errors[0]
      if (realErr && realErr.extensions) {
        throw realErr.extensions
      }
      throw realErr || err.response
    }
  }

  async multiQuery (gqlText: string, variables?: { [k: string]: any }) {
    try {
      const result = await super.query(gqlText, variables)

      return result
    } catch (err) {
      const realErrs = err.response?.errors

      throw realErrs.map((x: any) => x.extensions || x)
    }
  }
}
