import { PostService } from './post.service'

export class PostController {
  constructor(private readonly _service: PostService) {}

  async store(data: unknown) {
    return this._service.create(data)
  }
}
