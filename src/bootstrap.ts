import {
  PostController,
  PostEntity,
  PostRepository,
  PostService,
} from './logic'

// You dont have to do anything inside the logic folder, however feel free to play around after
// you got all the tests green :)

// ** run yarn test:watch ** to get started

export class PostRequestDto {}
export class PostResponseDto {}

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
