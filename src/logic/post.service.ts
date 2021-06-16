import { PostRepository } from './post.repository'

export class PostService {
  constructor(private readonly _repo: PostRepository) {}

  async create(data: unknown) {
    return this._repo.save(data)
  }
}
