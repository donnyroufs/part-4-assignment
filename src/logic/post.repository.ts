import { sleep } from './sleep.util'
import { PostEntity } from './post.entity'

export interface ISchema {
  posts: PostEntity[]
}

export class PostRepository {
  private readonly _db: ISchema = { posts: [] }

  async save(data: unknown) {
    await sleep()

    const index = this._db.posts.push({
      id: this._db.posts.length + 1,
      // @ts-expect-error Missing proper type
      ...data,
    })

    return this._db.posts[index - 1]
  }
}
