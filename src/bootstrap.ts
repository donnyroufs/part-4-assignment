import {
  PostController,
  PostEntity,
  PostRepository,
  PostService,
} from './logic'

async function bootstrap() {
  const controller = new PostController(new PostService(new PostRepository()))

  const body = {
    title: 'part 4',
    content: 'learning about dtos and layers I think?',
    realProp: 'uhu',
    nonsense: 'esnesnon',
  }

  const createdPost = await controller.store(body)

  console.log({ createdPost })
}

bootstrap()
