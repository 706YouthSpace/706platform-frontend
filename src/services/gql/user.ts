import { AppGraphQLService } from './base'

export interface User {
    _id: string;
    email?: string;
    name?: string;
    image?: string;
    alternativeName?: string;
}

export class UserGQLService extends AppGraphQLService {
  async whoami () {
    const result = await this.query(`{
        whoami {
            _id
            email
            name
            image
            alternativeName
        }
    }`)

    return result.whoami
  }
}

export const userGQLService = new UserGQLService()
